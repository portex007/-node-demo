const fs = require("fs");
const { readFileSync, writeFileSync } = fs;

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/test.txt", "utf-8");

writeFileSync(
  "./content/combination.txt",
  `here is the combination of ${first} and ${second}`,
  { flag: "a" }
);
