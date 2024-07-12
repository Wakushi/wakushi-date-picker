import * as fs from "fs-extra"
import * as path from "path"

function copyTypes() {
  return {
    name: "copy-types",
    closeBundle() {
      const src = path.resolve(__dirname, "types")
      const dest = path.resolve(__dirname, "dist/types")
      if (fs.existsSync(src)) {
        fs.copySync(src, dest)
      } else {
        console.error("Types folder not found:", src)
      }
    },
  }
}

export default copyTypes
