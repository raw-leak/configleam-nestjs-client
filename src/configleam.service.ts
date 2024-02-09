import { Injectable } from "@nestjs/common";
import {
  Configleam,
  ConfigleamConfig,
  ReadConfigOptions,
  ReadConfigParam,
} from "configleam-js-client";
import { ConfigleamProvider } from "./configleam.provider";

@Injectable()
export class ConfigleamService {
  private readonly configleam: Configleam;

  constructor(configleamProvider: ConfigleamProvider) {
    this.configleam = configleamProvider.getConfigleam();
  }

  readConfig(
    params: ReadConfigParam,
    options?: ReadConfigOptions,
  ): Promise<ConfigleamConfig> {
    return this.configleam.readConfig(params, options);
  }
}
