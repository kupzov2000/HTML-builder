const fs = require("fs").promises;
const path = require("path");

const mainCatalog = path.join(__dirname, "files");
const copyCatalog = path.join(__dirname, "files-copy");

async function copyDir(mainCtl, copyCtl) {
    try {
        await fs.mkdir(copyCtl, { recursive: true });

        const files = await fs.readdir(mainCtl);

        files.forEach((file) => {
            const mainFilePath = path.join(mainCtl, file);
            const copyFilePath = path.join(copyCtl, file);

            fs.copyFile(mainFilePath, copyFilePath);
        })
    } catch (error) {
        console.error("Error", error.message);
    }
}

copyDir(mainCatalog, copyCatalog);
