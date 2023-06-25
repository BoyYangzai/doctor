import { IApi, generatePreset } from "@doctors/core";
import { ConfigSchema } from "../type";
import { Nullify } from "@doctors/core";

export default (api: IApi) => {
  const COMMAND_NAME = "web-tools";

  const schema: Nullify<ConfigSchema> = {
    tools: {
      nodeVersion: null,
    },
  };
  const meta = {};

  generatePreset(api, COMMAND_NAME, schema, meta);
};
