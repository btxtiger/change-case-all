import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      dts({
         insertTypesEntry: true,
      }),
   ],
   define: {
      'process.env': {},
   },
   build: {
      outDir: 'dist',
      minify: false,
      lib: {
         entry: resolve(__dirname, 'src/index.ts'),
         name: 'ChangeCaseAll',
         fileName: 'index',
      },
      rollupOptions: {
         external: ['change-case', 'sponge-case', 'swap-case', 'title-case'],
         output: {
            globals: {
               'change-case': 'changeCase',
               'sponge-case': 'spongeCase',
               'swap-case': 'swapCase',
               'title-case': 'titleCase',
            },
         },
      },
   },
});
