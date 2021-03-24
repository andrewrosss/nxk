/* eslint-disable valid-jsdoc */
import * as admin from "firebase-admin";

import { set, unset } from "lodash";

import { coerceOrString } from "./utils";
import { loadConfig } from "./config";

export function firebaseAdmin(): admin.app.App {
  const existingApp = admin.apps.find((app) => app?.name === "[DEFAULT]");
  if (existingApp) {
    return existingApp;
  }

  const config = loadConfig();
  const { active, projects } = config;
  if (!(active && projects && projects[active])) {
    throw new Error(
      "No active project alias specified. Use an existing alias with " +
        "'nxk firebase:use <alias>' or create an alias using " +
        "the 'nxk firebase:alias:add' command."
    );
  }
  return admin.initializeApp({
    credential: admin.credential.cert(projects[active].serviceAccount),
  });
}

/**
 * @param claims The user claims to update
 * @param path The object path of the claim to update
 * @param value The value to update at path. If value is 'null' then the claim is removed.
 * @returns The updated claim object
 */
export function updateClaims<T extends object>(
  claims: T | undefined,
  path: string,
  value: string
): Partial<T> {
  const parsedValue = coerceOrString(value);
  if (parsedValue === null) {
    const res = unset(claims, path);
    if (!res) throw new Error(`Failed to delete claim at path [${path}]`);
    return claims || {};
  }
  return set(claims || {}, path, parsedValue);
}
