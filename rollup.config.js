import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // extract css into separate file, better performance
            css: css => {
                css.write('public/build/bundle.css');
            }
        }),

        // external dependencies
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),

        // in dev mode, call 'npm run start' once the bundle has been generated
        !production && serve(),

        // watch the 'public' directory and refresh browser for changes
        !production && livereload('public'),

        // minify for production builds
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    }
}