import express from "express";
import { add } from "./add";

console.log(add(1, 2));

const server = express();
const port = process.env.PORT || 3000;

// server.listen(port, () => console.log(`Server running on port ${port}...`));