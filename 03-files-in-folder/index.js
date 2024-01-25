const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "secret-folder");

fs.readdir(folderPath, { withFileTypes: true }, (error, files) => {
  if (error) {
    console.error("Error", error.message);
  } else {
    files.forEach((file) => {
      const filePath = path.join(folderPath, file.name);

      fs.stat(filePath, (statError, stats) => {
        if (statError) {
          console.error("Error", statError.message)
        } else if (file.isFile()) {
          console.log(`${path.parse(filePath).name} - ${path.extname(filePath).slice(1)} - ${stats.size} bytes`);
        }
      });
    });
  }
}
);