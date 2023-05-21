const fs = require("fs");
const { readFile, writeFile } = fs;

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/subfolder/test.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./content/asyncCOMB.txt",
      `here is the mixed version of both files : ${second} and ${first}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  });
});
