import { Command, flags } from "@oclif/command";

import { loadConfig } from "../../../lib/config";

export default class FirebaseAliasList extends Command {
  static description = "Display all of the saved project aliases";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const config = loadConfig();
    const aliases = config.aliases;
    this.log(JSON.stringify(aliases, null, 2));
  }
}
