import {defineConfig} from 'vite'
import pugPlugin from 'vite-plugin-pug'

const {resolve} = require('path')

export default defineConfig({
    plugins: [
        pugPlugin(
            {
                pretty: true,
            },
            {
                /*pagesUrl: './pages/'*/
            })
    ],

    server: {port: 9001},
    optimizeDeps: {
        // include: ['node_modules/gsap/ScrollTrigger'],
    },

    build: {
        minify: false,
        rollupOptions: {
            input: {
                // need a better way to template
                main: resolve(__dirname, 'index.html'),
                page1: resolve(__dirname, 'page1.html'),
                page2: resolve(__dirname, 'page2.html'),
            },
        },
    },
})