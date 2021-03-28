import * as admin from "firebase-admin";

import { Command, flags } from "@oclif/command";
import { coerceOrString, pprintJsonify } from "../../../../lib/utils";

import { firebaseAdmin } from "../../../../lib/firebase-admin";
import { set } from "lodash";

export default class FirebaseAuthUserUpdate extends Command {
  static description = "Update a firebase UserRecord";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "uid",
      required: true,
      description: "The uid of the userRecord to update",
    },
    {
      name: "path",
      required: true,
      description: "The property path/key to update",
    },
    { name: "value", required: true, description: "The updated value" },
  ];

  async run() {
    const { args } = this.parse(FirebaseAuthUserUpdate);

    const { uid, path, value } = args;

    const adminApp = firebaseAdmin();
    const updateRequest: admin.auth.UpdateRequest = set(
      {},
      path,
      coerceOrString(value)
    );
    const userRecord = await adminApp.auth().updateUser(uid, updateRequest);
    this.log(pprintJsonify(userRecord));
    this.exit();
  }
}
