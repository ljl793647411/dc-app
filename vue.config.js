
"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
const name = "醉徽湘";
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@/components": resolve("src/components"),
        "@/common": resolve("src/common"),
        "@/store": resolve("src/common"),
        "@": resolve("src"),
      },
    },
  },
}