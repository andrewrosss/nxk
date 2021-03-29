/* eslint-disable unicorn/filename-case */
import { Command, flags } from "@oclif/command";
import { getMailchimp, getSubscriberHash } from "../../../lib/mailchimp";

import { loadConfig } from "../../../lib/config";

export default class MailchimpListsGetListMember extends Command {
  static description = "Get member info from an audience/list";

  static flags = {
    help: flags.help({ char: "h" }),
    listId: flags.string({
      char: "l",
      description:
        "Audience/list ID from which to retrieve the memeber data. " +
        "If not specified the audience/list associated with the " +
        "active alias is used.",
    }),
  };

  static args = [
    { name: "email", required: true, description: "The email of the member" },
  ];

  async run() {
    const { args, flags } = this.parse(MailchimpListsGetListMember);

    const email: string = args.email;
    let { listId } = flags;
    if (!listId) {
      const { active, aliases } = loadConfig();
      listId = aliases?.[active ?? ""]?.mailchimp?.audienceId;
    }

    const mailchimp = getMailchimp();
    const res = await mailchimp.lists.getListMember(
      listId,
      getSubscriberHash(email)
    );

    this.log(res);
  }
}
