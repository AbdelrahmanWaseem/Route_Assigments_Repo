// const fs = require("node:fs");
// const fs = reqire("node:fs/promises");
const path = require("node:path");
const { EventEmitter } = require("node:stream");
const os = require("node:os");

//Q1: const filePath =
//   "D:/01 - Development/Git Repositories/Route_Assigments_Repo/Assigment 2";

//   console.log(__dirname);
//   console.log(__filename);

//   --------------------------------------------------------------------------

// Q2:
// const file = () =>{
// const filePath =
//    "D:/01 - Development/Git Repositories/Route_Assigments_Repo/Assigment 2";
// console.log(path.basename(filePath));
// }
// file();
// -----------------------------------------------------------------------------
// Q3:
// const file = () => {
// const filePath = path.format({
//   dir: "C:/Users/Waseem/project",
//   name: "index",
//   ext: ".js",
// console.log(filePath);
// });
// file();
// -----------------------------------------------------------------------------
// Q4: const file = () => {
//   const filePath =
//     "D:/01 - Development/Git Repositories/Route_Assigments_Repo/Assigment 2/index.js";

//   console.log(path.extname(filePath));
// };

// file();
// -----------------------------------------------------------------------------

// Q5:const filePath =
//   "D:/01 - Development/Git Repositories/Route_Assigments_Repo/Assigment 2/index.js";

// console.log(path.parse(filePath));
// -------------------------------------------------------------------------------

//Q6: const file = () => {
//   console.log(path.isAbsolute("C:/Users/Waseem/index.js"));
//   console.log(path.isAbsolute("./index.js"));
// };

// file();
// -------------------------------------------------------------------------------

// Q7: const file = () => {

//   console.log(path.join("src", "component", "App.js"));
// };

// file();
// ---------------------------------------------------------------------------------

// Q8: const file = () => {
//   console.log(path.resolve("./index.js"));
// };

// file();
// ---------------------------------------------------------------------------------

// Q9: const file = () => {
//   console.log(path.join("/folder1","folder2/file.txt"));
// };

// file();
// ---------------------------------------------------------------------------------

// Q10: async function deletefile() {
//   Fs.unlink("./file.txt", (err) => {
//     if (err) {
//       console.log("error occured");
//     } else console.log("file deleted succesfully");
//   });
// }

// deletefile();
// ---------------------------------------------------------------------------------

// Q11: const makeFile = () => {
//   Fs.mkdirSync("./files/file.txt", { recursive: true });
//   console.log("file created Succesfully");
// };
// makeFile();
// -------------------------------------------------------------------------------------
// Q12: const myEmitter = new EventEmitter();
// myEmitter.on("Start", () => {
//   console.log("Welcome event triggered!");
// });

// myEmitter.emit("Start");
// // ---------------------------------------------------------------------------------------
// Q13: const myEmitter = new EventEmitter();
// myEmitter.on("logged in", (name, age, email) => {
//   console.log(`User logged in: ${name} ${age} ${email}`);
// });

// myEmitter.emit("logged in", "Waseem", "21years", "abc@gmail.com");
// ------------------------------------------------------------------------------------------

//Q14: function readData() {
//   const data = Fs.readFileSync("./edit.txt", { encoding: "utf-8" });
//   console.log(`file content: ${data}`);
// }

// readData();

// ---------------------------------------------------------------------------------------------

//Q15: async function readData() {
//   try {
//     const data = await fs.writeFile("./async.txt", "Async save", {
//       encoding: "utf-8",
//     });
//   } catch (error) {
//     console.log({ error });
//   }
// }

// readData();
// -----------------------------------------------------------------------------------------------

//Q16: function fileExists() {
//   fs.exists("./edit.txt", (flag) => {
//     if (flag) {
//       console.log("true");
//     } else console.log("flase");
//   });
// }

// fileExists();
// ---------------------------------------------------------------------------------------------

//Q17: function deviceSpecs() {
//   console.log("arch: " + os.arch(), "Platform: " + os.platform());
// }

// deviceSpecs();
// ---------------------------------------------------------------------------------------------

