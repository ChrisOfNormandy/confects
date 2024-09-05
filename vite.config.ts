import { defineConfig } from 'vite'
import { resolve } from 'path';
import { viteConfigAliases } from '@chrisofnormandy/confetti';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        port: 3000,
        fs: {
            cachedChecks: false
        }
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
                'contents',
                'decorations',
                'editors',
                'helpers',
                'inputs',
                'managed',
                'markdown',
                'navs',
                'pages',
                'routers',
                'tables',
                'types'
            ].map((exp) => resolve(`./lib/${exp}.ts`)),
            name: 'confects',
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'sass', 'react-router', 'react-router-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-router': 'ReactRouter',
                    'react-router-dom': 'ReactRouterDOM'
                }
            }
        }
    },
})
