/* eslint-disable unicorn/filename-case */
import { Command, flags } from "@oclif/command";

import { getSubscriberHash } from "../../lib/mailchimp";

export default class MailchimpSubscriberHash extends Command {
  static description = "Get the Mailchimp ID (subscriber hash) from an email";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "email" }];

  async run() {
    const { args } = this.parse(MailchimpSubscriberHash);

    this.log(getSubscriberHash(args.email as string));
  }
}
