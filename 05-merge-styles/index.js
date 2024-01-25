const fs = require("fs").promises;
const path = require("path");

const pathFolder = path.join(__dirname, "styles");
const pathFile = path.join(__dirname, "project-dist", "bundle.css");

async function mergeStyles() {
    try {
        const files = await fs.readdir(pathFolder);
        const cssFiles = files.filter((file) => path.extname(file) === ".css");

        const output = pathFile;

        for (let cssFile of cssFiles) {
            try {
                const fileContent = await fs.readFile(path.join(pathFolder, cssFile), "utf-8");
                await fs.appendFile(output, fileContent + "\n");
            } catch (err) {
                console.error("Error", err.message);
            }
        }

    } catch (err) {
        console.error("Error", err.message);
    }
}

mergeStyles();