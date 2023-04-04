const StyleDictionaryPackage = require("style-dictionary");

function getStyleDictionaryConfig() {
  return {
    source: [`tokens.json`],
    platforms: {
      "web/js": {
        transformGroup: "tokens-js",
        buildPath: `src/styles/`,
        prefix: "token",
        files: [
          {
            destination: "tokens.js",
            format: "javascript/es6",
          },
        ],
      },
      "web/scss": {
        transformGroup: "tokens-scss",
        buildPath: `src/styles/`,
        prefix: "token",
        files: [
          {
            destination: "tokens.scss",
            format: "scss/variables",
          },
        ],
      },
    },
  };
}

StyleDictionaryPackage.registerTransformGroup({
  name: "tokens-js",
  transforms: ["name/cti/constant", "size/px", "color/hex"],
});

StyleDictionaryPackage.registerTransformGroup({
  name: "tokens-scss",
  // to see the pre-defined "scss" transformation use: console.log(StyleDictionaryPackage.transformGroup['scss']);
  transforms: ["name/cti/kebab", "time/seconds", "size/px", "color/css"],
});

console.log("Transform started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

console.log("\n==============================================");
console.log(`\nProcessing`);

const StyleDictionary = StyleDictionaryPackage.extend(
  getStyleDictionaryConfig()
);

StyleDictionary.buildPlatform("web/js");
StyleDictionary.buildPlatform("web/scss");

console.log("\n==============================================");
console.log("\nTransform completed!");
