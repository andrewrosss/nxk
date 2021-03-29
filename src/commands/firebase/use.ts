import { Command, flags } from "@oclif/command";
import { loadConfig, updateConfig } from "../../lib/config";

import { pprintJsonify } from "../../lib/utils";

export default class FirebaseUse extends Command {
  static description = "Use the project/credentials associated with an alias";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    "show-current": flags.boolean({
      char: "c",
      description: "List the alias currently in use and exit",
    }),
  };

  static args = [{ name: "alias" }];

  async run() {
    const { args, flags } = this.parse(FirebaseUse);

    const config = loadConfig();
    const { aliases, active } = config;

    const showCurrent = flags["show-current"];
    if (showCurrent) {
      if (!aliases) {
        return this.warn(
          "No project aliases exists. Add an alias with 'nxk firebase:alias:add'"
        );
      }
      if (!active) {
        return this.warn(
          "No currently active alias is set. Set one with 'nxk firebase:use'"
        );
      }
      return this.log(pprintJsonify(aliases[active]));
    }

    const alias = args.alias;
    if (!aliases || !(alias in aliases)) {
      return this.warn(
        `No alias [${alias}] exists. Add this alias with 'nxk firebase:alias:add "${alias}" <projectId> <serviceAccount>'`
      );
    }

    updateConfig("active", alias);
  }
}
