import { Test, TestingModule } from "@nestjs/testing";
import { ConfigleamModule } from "../configleam.module";

describe("ConfigleamModule", () => {
  let module: TestingModule;

  describe("forRootAsync", () => {
    beforeEach(async () => {
      module = await Test.createTestingModule({
        imports: [
          ConfigleamModule.forRootAsync({
            useFactory: async () => {
              return { addrs: "http://test.com" };
            },
          }),
        ],
      }).compile();
    });

    it("should be defined", () => {
      expect(module).toBeDefined();
    });

    it("should provide ConfigleamModule with resolved options", async () => {
      const configleamModule = module.get(ConfigleamModule);
      expect(configleamModule).toBeDefined();
    });
  });

  describe("forRoot", () => {
    beforeEach(async () => {
      module = await Test.createTestingModule({
        imports: [ConfigleamModule.forRoot({ addrs: "http://test.com" })],
      }).compile();
    });

    it("should be defined", () => {
      expect(module).toBeDefined();
    });

    it("should provide ConfigleamModule with resolved options", async () => {
      const configleamModule = module.get(ConfigleamModule);
      expect(configleamModule).toBeDefined();
    });
  });
});
