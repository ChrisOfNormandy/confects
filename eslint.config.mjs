import { reactViteConfig, typescriptConfig } from './lib/linter.mjs';

export default [
    ...typescriptConfig(),
    ...reactViteConfig()
]