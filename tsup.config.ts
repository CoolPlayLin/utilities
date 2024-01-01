import {defineConfig} from 'tsup'

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    clean: true,
    dts: false,
    tsconfig: './tsconfig.json',
    format: ['esm', 'cjs']
})