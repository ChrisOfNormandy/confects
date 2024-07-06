import { defineConfig } from 'vite'
import { resolve } from 'path';
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
            '~styles': '@chrisofnormandy/confetti/_pack.scss',
            '~themes': '@chrisofnormandy/confetti/_themes.scss'
        }
    },
    build: {
        emptyOutDir: false,
        lib: {
            entry: resolve('./lib/main.ts'),
            name: 'confects',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'sass'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
})
