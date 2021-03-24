import * as fs from "fs";
import * as path from "path";

import { set, unset } from "lodash";

import { Config } from "../@types/config";
import { coerceOrString } from "./utils";

export function getConfigFile(): string {
  return path.join(process.cwd(), ".nxkrc.json");
}

export function saveConfig(config: Partial<Config>): void {
  const configFile = getConfigFile();
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2), "utf8");
}

export function loadConfig(): Partial<Config> {
  const configFile = getConfigFile();
  if (fs.existsSync(configFile)) {
    return JSON.parse(fs.readFileSync(configFile, "utf8"));
  }
  const config = {};
  saveConfig(config);
  return config;
}

export function updateConfig(path: string, value: any): Partial<Config> {
  const prevConfig = loadConfig();
  const config = set(prevConfig, path, coerceOrString(value));
  saveConfig(config);
  return config;
}

export function deleteConfig(path: string): Partial<Config> {
  const config = loadConfig();
  const res = unset(config, path);
  if (!res) {
    throw new Error(`Error unsetting configuration at path [${path}]`);
  }
  saveConfig(config);
  return config;
}
