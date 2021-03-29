import { Command, flags } from "@oclif/command";

import { updateConfig } from "../../../lib/config";

export default class FirebaseAliasAdd extends Command {
  static description = "Add an alias to reference a project";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "alias",
      required: true,
      description: "A short name to reference this project by",
    },
    { name: "project_id", required: true, description: "The GCP Project ID" },
    {
      name: "service_account",
      required: true,
      description: "The service account to use when this alias is active",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseAliasAdd);

    const alias = args.alias;
    const projectId = args.project_id;
    const serviceAccount = args.service_account;

    updateConfig(`aliases.${alias}`, { projectId, serviceAccount });
  }
}
