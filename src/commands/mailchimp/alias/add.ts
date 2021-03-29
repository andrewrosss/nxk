import { Command, flags } from "@oclif/command";

import { updateMailchimpConfig } from "../../../lib/config";

export default class MailchimpAliasAdd extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "alias",
      required: true,
      description: "The alias to which this config will be associated",
    },
    {
      name: "server",
      required: true,
      description: "The mailchimp server location (ex: 'us1')",
    },
    {
      name: "audienceId",
      required: true,
      description: "The audience/list ID to associate with this alias",
    },
    {
      name: "apiKey",
      required: true,
      description: "The API key to use when configuring the client.",
    },
  ];

  async run() {
    const { args } = this.parse(MailchimpAliasAdd);

    const { alias, server, audienceId, apiKey } = args;

    // check if this alias exists, if not ask if a new one should
    // be created (would be nice to have a "did you mean ...?")
    updateMailchimpConfig(alias, { server, audienceId, apiKey });
  }
}
