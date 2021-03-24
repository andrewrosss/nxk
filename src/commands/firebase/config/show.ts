import { Command, flags } from "@oclif/command";

import { loadConfig } from "../../../lib/config";
import { pprintJsonify } from "../../../lib/utils";

export default class FirebaseConfigShow extends Command {
  static description = "Show the current config (contents of .nxkrc.json)";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const config = loadConfig();
    this.log(pprintJsonify(config));
  }
}
