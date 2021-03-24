#!/usr/bin/env node

import { Command, flags } from "@oclif/command";

import { firebaseAdmin } from "../../../../lib/firebase-admin";
import { pprintJsonify } from "../../../../lib/utils";

export default class FirebaseAuthClaimsList extends Command {
  static description = "List any custom claims associated with a user";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "uid",
      required: true,
      description: "The uid of the user of which to get the custom claims",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseAuthClaimsList);

    const admin = firebaseAdmin();
    const uid = args.uid;
    const userRecord = await admin.auth().getUser(uid);
    this.log(pprintJsonify(userRecord.customClaims));
    this.exit();
  }
}
