import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import fs from "fs"

import pkg from "./package.json"
import { createHtmlPlugin } from "vite-plugin-html"

const distFolder = "build"
const OG_GROOM_FULLNAME = "양성준"
const OG_BRIDE_FULLNAME = "카바야마 사리"
const META_DESCRIPTION = "2026년 3월 9일 월요일 오후 12시 0분 Higashiyama Shinjuku Main Store"

let base = "/"

try {
  const url = new URL(pkg.homepage)
  base = url.pathname
} catch (e) {
  base = pkg.homepage || "/"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          GROOM_FULLNAME: OG_GROOM_FULLNAME,
          BRIDE_FULLNAME: OG_BRIDE_FULLNAME,
          DESCRIPTION: META_DESCRIPTION,
        },
      },
    }),
    {
      name: "manifest-inject",
      writeBundle() {
        const content = fs.readFileSync("public/manifest.json", "utf-8")
        const processed = content
          .replace(/<%= GROOM_FULLNAME %>/g, OG_GROOM_FULLNAME)
          .replace(/<%= BRIDE_FULLNAME %>/g, OG_BRIDE_FULLNAME)
        fs.writeFileSync(`${distFolder}/manifest.json`, processed)
      },
    },
  ],
  server: { port: 3000 },
  build: { outDir: distFolder },
  base,
})
