import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { version } from './package.json';

// 获取版本号
const getVersion = version.replace(/\./g, "");

// 自定义静态资源配置
const getAssetFile = (assetInfo: any) => {
    const name = Array.isArray(assetInfo.names) && assetInfo.names.length > 0 ? assetInfo.names[0] : "unknown";
    const fileType = name.split(".").pop();
  
    if (/png|jpe?g|gif|svg|webp/.test(fileType)) {
      return `assets/images/[name].[ext]`;
    }
    if (/css/.test(fileType)) {
      return `assets/styles/[name]-${getVersion}.[ext]`;
    }
    return `assets/[name].[ext]`;
};

export default defineConfig({
    root: '', // 设置项目根目录
    base: './', // 设置公共基础路径
    plugins: [vue()],
    build: {
        outDir: "dist", // 输出目录
        minify: "esbuild", // 压缩代码
        rollupOptions: {
            // input: {"survey": path.resolve(__dirname, 'index.html')},
            input: {"survey": 'src/main.ts'}, // 只打包一个入口文件
            output: {
                entryFileNames: `[name]-${getVersion}.js`,
                assetFileNames: getAssetFile,
            },
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8620,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
