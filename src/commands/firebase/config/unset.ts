import { Command, flags } from "@oclif/command";

import { deleteConfig } from "../../../lib/config";

export default class FirebaseConfigUnset extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "path",
      required: true,
      description: "The dotted path of the config variable to get",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseConfigUnset);

    const path = args.path;
    deleteConfig(path);
  }
}
