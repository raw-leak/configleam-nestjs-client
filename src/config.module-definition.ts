import { ConfigurableModuleBuilder } from "@nestjs/common";
import { ConfigleamOptions } from "configleam-js-client";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ConfigleamOptions>()
    .setClassMethodName("forRoot")
    .setFactoryMethodName("forRootAsync")
    .build();
