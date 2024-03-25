import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import vue from "@vitejs/plugin-vue"; //add this line


// Load environment variables


export default defineConfig({
    plugins: [
        vue({
            template: {
              compilerOptions: {
                isCustomElement: tag => tag.startsWith('x-')
              }
            }
          }), // write this
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,

            // Importamos Bootstrap 5
            resolve:{
                alias:{
                    '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
                    "vue": "@vue/compat/dist/vue.esm-bundler.js"
                }
            },
            // Fin Importamos Bootstrap 5
        }),
    ],
});
