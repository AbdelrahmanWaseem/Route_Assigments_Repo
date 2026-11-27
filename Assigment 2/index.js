const fs = require("node:fs");
// const fs = reqire("node:fs/promises");
const path = require("node:path");
const { EventEmitter } = require("node:stream");
const os = require("node:os");
const { log } = require("node:console");

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

//Q18: const stream = fs.createReadStream("./big.txt", {
//   highWaterMark: 100,
//   encoding: "utf-8",
// });
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

// stream.on("end", () => {
//   console.log("end");
// });
// ---------------------------------------------------------------------------------------------

//Q19: const readStream = fs.createReadStream("./source.txt", {
//   encoding: "utf-8",
//   autoClose: false,
//   emitClose: false,
// });

// const writeStream = fs.createWriteStream("./dest.txt");

// readStream.pipe(writeStream);

// writeStream.on("finish", () => {
//   console.log("finish");
// });
// --------------------------------------------------------------------------------------------

//Q20: const zlib = require("zlib");
// const { pipeline } = require("stream");

// const readStream = fs.createReadStream("./data.txt", {
//   encoding: "utf-8",
// });

// const gzip = zlib.createGzip();
// const writeStreamGzip = fs.createWriteStream("./dataWrite.gz");

// pipeline(readStream, gzip, writeStreamGzip, (err) => {
//   if (err) {
//     console.log("pipeline failed:", err);
//   }
// });
// ----------------------------------------------------------------------------------------------
// CRUD OPERATIONS QUESTIONS:

// Q1: const user = {
//   id: 1,
//   name: "waseem",
//   email: "abcdef@gmail.com",
// };

// const http = require("node:http");

// const port = 8000;

// const server = http.createServer((req, res) => {
//   const { url, method } = req;

//   if (url === "/user" && method === "POST") {
//     let data = "";

//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     req.on("end", () => {
//       const newUser = JSON.parse(data);

//       const fileData = fs.readFileSync("./users.json", "utf-8");
//       const users = JSON.parse(fileData);

//       const emailExists = users.some((user) => user.email === newUser.email);

//       res.setHeader("Content-Type", "application/json");

//       if (emailExists) {
//         res.statusCode = 400; // Bad Request
//         return res.end(JSON.stringify({ message: "Email already exists." }));
//       }

//       users.push(newUser);
//       fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

//       res.statusCode = 201; 
//       res.end(JSON.stringify({ message: "User added successfully." }));
//     });
//   } else {
//     res.statusCode = 404;
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });

// server.listen(port, () => {
//   console.log("server is running.........");
// });
// -------------------------------------------------------------    
// // const http = require("node:http");
// const fs = require("node:fs");

// const port = 8000;

// const server = http.createServer((req, res) => {
//   const { url, method } = req;
//   res.setHeader("Content-Type", "application/json");

//   if (url === "/user" && method === "POST") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     req.on("end", () => {
//       const newUser = JSON.parse(data);
//       const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

//       const emailExists = users.some((user) => user.email === newUser.email);
//       if (emailExists) {
//         res.statusCode = 400;
//         return res.end(JSON.stringify({ message: "Email already exists." }));
//       }

//       const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
//       users.push({ id, ...newUser });
//       fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

//       res.statusCode = 201;
//       res.end(JSON.stringify({ message: "User added successfully." }));
//     });
//   } else if (url.startsWith("/user/") && method === "PATCH") {
//     const id = parseInt(url.split("/")[2]);
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     req.on("end", () => {
//       const updates = JSON.parse(data);
//       const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//       const userIndex = users.findIndex((user) => user.id === id);

//       if (userIndex === -1) {
//         res.statusCode = 404;
//         return res.end(JSON.stringify({ message: "User ID not found." }));
//       }

//       users[userIndex] = { ...users[userIndex], ...updates };
//       fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

//       const updatedField = Object.keys(updates)[0];
//       res.statusCode = 200;
//       res.end(
//         JSON.stringify({
//           message: `User ${updatedField} updated successfully.`,
//         })
//       );
//     });
//   } else if (url.startsWith("/user/") && method === "DELETE") {
//     const id = parseInt(url.split("/")[2]);
//     const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//     const userIndex = users.findIndex((user) => user.id === id);

//     if (userIndex === -1) {
//       res.statusCode = 404;
//       return res.end(JSON.stringify({ message: "User ID not found." }));
//     }

//     users.splice(userIndex, 1);
//     fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

//     res.statusCode = 200;
//     res.end(JSON.stringify({ message: "User deleted successfully." }));
//   } else if (url === "/user" && method === "GET") {
//     const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//     res.statusCode = 200;
//     res.end(JSON.stringify(users));
//   } else if (url.startsWith("/user/") && method === "GET") {
//     const id = parseInt(url.split("/")[2]);
//     const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//     const user = users.find((user) => user.id === id);

//     if (!user) {
//       res.statusCode = 404;
//       return res.end(JSON.stringify({ message: "User not found." }));
//     }

//     res.statusCode = 200;
//     res.end(JSON.stringify(user));
//   } else {
//     res.statusCode = 404;
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });

// server.listen(port, () => {
//   console.log("server is running.........");
// });