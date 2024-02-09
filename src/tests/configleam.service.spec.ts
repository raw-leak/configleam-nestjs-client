import { ConfigleamService } from "../configleam.service";
import { ConfigleamProvider } from "../configleam.provider";
import { ReadConfigOptions, ReadConfigParam } from "configleam-js-client";

describe("ConfigleamService", () => {
  let configleamService: ConfigleamService;
  let configleamProviderMock: ConfigleamProvider;
  let configleamMock: any;

  beforeEach(() => {
    configleamMock = {
      readConfig: jest.fn(),
    } as any;

    configleamProviderMock = {
      getConfigleam: jest.fn(() => configleamMock),
    } as unknown as ConfigleamProvider;

    configleamService = new ConfigleamService(configleamProviderMock);
  });

  it("should be defined", () => {
    expect(configleamService).toBeDefined();
  });

  describe("When reading configuration successfully", () => {
    it("should call readConfig method of Configleam with provided params and options", async () => {
      const params: ReadConfigParam = {
        env: "test",
        groups: ["group-1"],
        globals: ["global-1"],
      };
      const options: ReadConfigOptions = {
        headers: { Authorization: "Bearer token" },
      };

      await configleamService.readConfig(params, options);
      expect(configleamProviderMock.getConfigleam).toHaveBeenCalledTimes(1);

      expect(configleamMock.readConfig).toHaveBeenCalledWith(params, options);
    });
  });

  describe("When reading configuration with fail", () => {
    it("should throw an error if readConfig fails", async () => {
      const errorMessage = "Failed to fetch configuration";
      const params: ReadConfigParam = { env: "test" };
      const options: ReadConfigOptions = {
        headers: { Authorization: "Bearer token" },
      };

      configleamMock.readConfig.mockRejectedValue(new Error(errorMessage));

      await expect(
        configleamService.readConfig(params, options),
      ).rejects.toThrow(errorMessage);

      expect(configleamProviderMock.getConfigleam).toHaveBeenCalledTimes(1);
    });
  });
});
