import { IApi, generatePreset } from "@doctors/core";
import type { Nullify } from "@doctors/core";
import { ConfigSchema } from "../type";
import { PRESET_NAME } from "../constants";

const schema: Nullify<ConfigSchema> = {
  npmPkg: {
    peerDepAndDepRepeat: {
      level: null,
      exclude: null,
    },
    checkPkgFilesExist: {
      level: null,
    },
    preferPackFiles: {
      level: null,
    },
  },
};

// meta 元数据 将会作为所有 feature 插件的实参传入 供使用
const meta = {};

export default (api: IApi) => {
  generatePreset({
    api,
    command: PRESET_NAME,
    schema,
    meta,
  });
};
