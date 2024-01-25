const readline = require("readline");
const fs = require("fs");
const path = require("path");

let rl = readline.createInterface(process.stdin, process.stdout);

const filePath = path.join(__dirname, "text.txt");

rl.setPrompt("Введите ваши данные:\n");
rl.prompt();

function writeToFile(text) {
    fs.appendFile(
        filePath,
        text + "\n",
        (err) => {
            if (err) {
                console.log("Error", err.message)
            } else {
                console.log("Текст добавлен в файл.");
                rl.prompt();
            }
        }
    );
}

rl.on("line", (data) => {
    if (data === "exit") {
        console.log("Программа завершена.");
        rl.close();
    } else {
        writeToFile(data);
    }
});

rl.on("SIGINT", () => {
    rl.close();
    console.log("Программа завершена.");
});