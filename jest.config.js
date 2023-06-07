module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx, ts, tsx, svg}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "app"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "\\.[jt]sx?$": "ts-jest",
    "^.+\\.svg$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
  },
};
