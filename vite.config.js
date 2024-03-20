import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import vue from "@vitejs/plugin-vue"; //add this line

export default defineConfig({
    plugins: [
        vue(), // write this
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
                }
            },
            // Fin Importamos Bootstrap 5
        }),
    ],
});
