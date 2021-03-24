import { Command, flags } from "@oclif/command";

import { get } from "lodash";
import { loadConfig } from "../../../lib/config";
import { pprintJsonify } from "../../../lib/utils";

export default class FirebaseConfigGet extends Command {
  static description = "Get a particular configuration value";

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
    const { args } = this.parse(FirebaseConfigGet);

    const path = args.path;

    const config = loadConfig();
    const value = get(config, path, undefined);
    if (value === undefined) {
      return this.exit(1);
    }
    this.log(pprintJsonify(value));
  }
}
