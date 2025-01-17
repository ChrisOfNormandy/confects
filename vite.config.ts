import { defineConfig, loadEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import { viteConfigAliases } from '@chrisofnormandy/confetti/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: UserConfig) => {
    process.env = mode && {
        ...process.env,
        ...loadEnv(mode, process.cwd())
    } || process.env;

    const { DEV } = process.env;

    return defineConfig({
        plugins: [react(), tsconfigPaths()],
        server: {
            port: 3000
        },
        resolve: {
            alias: {
                ...viteConfigAliases()
            }
        },
        build: {
            copyPublicDir: false,
            emptyOutDir: false,
            lib: {
                entry: [
                    'buttons',
                    'containers',
                    'decorations',
                    'dialogs',
                    'editors',
                    'helpers',
                    'inputs',
                    'managed',
                    'markdown',
                    'menu',
                    'overlay',
                    'router',
                    'selectors',
                    'tables',
                    'types'
                ].map((exp) => resolve(`./lib/${exp}.ts`)),
                name: 'confects',
                formats: ['es']
            },
            rollupOptions: {
                external: ['react', 'react-dom', 'react-router', 'react-router-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-router': 'ReactRouter',
                        'react-router-dom': 'ReactRouterDOM'
                    }
                }
            }
        },
        esbuild: {
            legalComments: 'none',
            drop: !DEV && ['console', 'debugger'] || undefined
        }
    });
};