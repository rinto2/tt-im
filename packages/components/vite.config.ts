import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(
    {   
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ['vue'],
                input: ['index.ts'],
                output: [
                    {   
                        format: 'es',
                        entryFileNames: '[name].js',
                        // 让打包目录和我们目录对应
                        preserveModules: true,
                        exports: 'named',
                        dir: resolve(__dirname, '../../dist/es'),
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        preserveModules: true,
                        dir: resolve(__dirname, '../../dist/lib'),
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                name: 'tt-im'
            }
        },
        plugins: [
            vue(),
            dts({
                entryRoot: 'src',
                outputDir: [
                    resolve(__dirname, '../../dist/es'),
                    resolve(__dirname, '../../dist/lib')
                ],
                tsConfigFilePath: '../../tsconfig.json'
            })
        ]
    }
)
