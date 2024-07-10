import { reactViteConfig, typescriptConfig } from './lib/helpers/linter.mjs';

export default [
    ...typescriptConfig(),
    ...reactViteConfig()
]