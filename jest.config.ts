import { resolve } from 'path'
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: resolve(__dirname),
  collectCoverage: true,
  testEnvironment: 'node',
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^dayjs/esm/(.*)$': 'dayjs/$1',
  },
  testMatch: [`<rootDir>/**/__tests__/**/*.spec.{js,ts}`],
  coverageDirectory: 'coverage',
}

export default config
