/* eslint-disable unicorn/filename-case */
import { Command, flags } from "@oclif/command";

import { firebaseAdmin } from "../../../../lib/firebase-admin";

export default class FirebaseFirestoreCollectionGetAll extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    {
      name: "collectionPath",
      required: true,
      description: "The path to the collection",
    },
  ];

  async run() {
    const { args } = this.parse(FirebaseFirestoreCollectionGetAll);

    const collectionPath = args.collectionPath;
    const admin = firebaseAdmin();
    const db = admin.firestore();
    const collectionRef = db.collection(collectionPath);
    const docs = (await collectionRef.get()).docs.map((snap) => ({
      id: snap.id,
      ...snap.data(),
    }));
    this.warn(`Downloaded [${docs.length}] documents`);
    this.log(JSON.stringify(docs, null, 2));
  }
}
