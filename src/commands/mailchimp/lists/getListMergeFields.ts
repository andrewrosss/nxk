/* eslint-disable unicorn/filename-case */
import { Command, flags } from "@oclif/command";

import { getMailchimp } from "../../../lib/mailchimp";
import { loadConfig } from "../../../lib/config";

export default class MailchimpListsGetListMergeFields extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "listId",
      description:
        "The audience/list ID from which to get the merge fields. If " +
        "not specified the audienceId associated with the active alias is used.",
    },
  ];

  async run() {
    const { args } = this.parse(MailchimpListsGetListMergeFields);

    let listId: string | undefined = args.listId;
    if (!listId) {
      const { active, aliases } = loadConfig();
      listId = aliases?.[active ?? ""]?.mailchimp?.audienceId;
    }

    const mailchimp = getMailchimp();

    const res = await mailchimp.lists.getListMergeFields(listId);

    this.log(res);
  }
}
