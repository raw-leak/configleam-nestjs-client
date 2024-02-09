import { Module } from "@nestjs/common";
import { ConfigleamService } from "./configleam.service";
import { ConfigleamProvider } from "./configleam.provider";
import { ConfigurableModuleClass } from "./config.module-definition";

@Module({
  providers: [ConfigleamProvider, ConfigleamService],
  exports: [ConfigleamService],
})
export class ConfigleamModule extends ConfigurableModuleClass {}
