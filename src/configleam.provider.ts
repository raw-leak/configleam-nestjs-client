import { Inject, Injectable } from "@nestjs/common";
import { Configleam, ConfigleamOptions } from "configleam-js-client";
import { MODULE_OPTIONS_TOKEN } from "./config.module-definition";

@Injectable()
export class ConfigleamProvider {
  private readonly configleam: Configleam;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: ConfigleamOptions) {
    this.configleam = new Configleam(options);
  }

  getConfigleam(): Configleam {
    return this.configleam;
  }
}
