import { Command, flags } from "@oclif/command";

import { firebaseAdmin } from "../../../../lib/firebase-admin";
import { pprintJsonify } from "../../../../lib/utils";

export default class FirebaseAuthUserGet extends Command {
  static description = "Update a firebase UserRecord";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "uid",
      required: true,
      description: "The uid of the userRecord to retrieve",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseAuthUserGet);

    const { uid } = args;

    const adminApp = firebaseAdmin();
    const userRecord = await adminApp.auth().getUser(uid);
    this.log(pprintJsonify(userRecord));
    this.exit();
  }
}
