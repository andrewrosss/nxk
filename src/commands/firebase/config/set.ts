import { Command, flags } from "@oclif/command";

import { updateConfig } from "../../../lib/config";

export default class FirebaseConfigSet extends Command {
  static description = "Set a particular configuration value";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "path",
      required: true,
      description: "The dotted path of the config variable to get",
    },
    {
      name: "value",
      required: true,
      description: "The value to set for this config parameter.",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseConfigSet);

    const path = args.path;
    const value = args.value;

    updateConfig(path, value);
  }
}
