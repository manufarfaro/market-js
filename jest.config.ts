import { Config } from "@jest/types";


const jestConfig = async (): Promise<Config.InitialOptions> => ({
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
});

export default jestConfig;
