import { defineConfig, loadEnv, UserConfig } from 'vite';
import { resolve } from 'node:path';
import { viteConfigAliases } from '@dead-harbour/scss-rigging/config';
import react from '@vitejs/plugin-react';

const config = ({ mode }: UserConfig) => {
    process.env = mode && {
        ...process.env,
        ...loadEnv(mode, process.cwd())
    } || process.env;

    const { DEV } = process.env;
    const USE_DEV = !!DEV;

    return defineConfig({
        build: {
            copyPublicDir: false,
            emptyOutDir: false,
            lib: {
                entry: [
                    'buttons',
                    'containers',
                    'decorations',
                    'helpers',
                    'inputs',
                    'providers',
                    'selectors',
                    'types'
                ].map((exp) => resolve(`./lib/${exp}.ts`)),
                formats: ['es'],
                name: 'react-elements'
            },
            minify: !USE_DEV,
            rolldownOptions: {
                external: [
                    'react',
                    'react/jsx-runtime',
                    'react-dom'
                ],
                output: {
                    globals: {
                        react: 'React'
                    },
                    minify: {
                        compress: {
                            dropConsole: USE_DEV,
                            dropDebugger: USE_DEV
                        }
                    }
                }
            }
        },
        css: {
            lightningcss: {
                errorRecovery: true
            }
        },
        plugins: [react()],
        resolve: {
            alias: {
                ...viteConfigAliases()
            },
            tsconfigPaths: true
        }
    });
};

export default config;