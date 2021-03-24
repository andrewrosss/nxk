#!/usr/bin/env node

import { Command, flags } from "@oclif/command";
import { firebaseAdmin, updateClaims } from "../../../../lib/firebase-admin";

import { pprintJsonify } from "../../../../lib/utils";

export default class FirebaseAuthClaimsSet extends Command {
  static description = "Set a custom claim on a user";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "uid",
      required: true,
      description: "The uid of the user",
    },
    {
      name: "path",
      required: true,
      description: "The object path for the claim",
    },
    {
      name: "value",
      required: true,
      description:
        "The value of this claim. If the value is null this claim is removed.",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseAuthClaimsSet);

    const { uid, path, value } = args;

    const admin = firebaseAdmin();
    const userRecord = await admin.auth().getUser(uid);
    const updatedClaims = updateClaims(userRecord.customClaims, path, value);
    await admin.auth().setCustomUserClaims(uid, updatedClaims);

    this.log(`Updated claims for user [${uid}] email [${userRecord.email}]`);
    this.log(pprintJsonify((await admin.auth().getUser(uid)).customClaims));
    this.exit();
  }
}
