import * as crypto from "crypto";

import {
  MailchimpListMemberUpdate,
  MailchimpMergeFields,
} from "../@types/config";

import { loadConfig } from "./config";

export function getMailchimp() {
  const config = loadConfig();
  const mailchimp = require("@mailchimp/mailchimp_marketing");

  const { active, aliases } = config;
  if (!(active && aliases && aliases[active]))
    throw new Error("No active alias specified.");

  const mc = aliases[active].mailchimp;
  if (!mc) throw new Error(`No mailchimp config set for alias ${active}.`);

  mailchimp.setConfig({ apiKey: mc.apiKey, server: mc.server });

  return mailchimp;
}

export function getSubscriberHash(email: string): string {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

export function getActiveList(): string {
  const { active, aliases } = loadConfig();
  const listId = aliases?.[active ?? ""]?.mailchimp?.audienceId;
  if (!listId) throw new Error("No active audience/list ID");
  return listId;
}

export function updateListMemberMergeFields(
  email: string,
  mergeFields: Partial<MailchimpMergeFields>
) {
  const mailchimp = getMailchimp();
  const listId = getActiveList();
  const subscriberHash = getSubscriberHash(email);
  const body: MailchimpListMemberUpdate = {
    merge_fields: mergeFields,
  };
  mailchimp.lists.updateListMember(listId, subscriberHash, body);
}
