import express, { Application } from "express";
import { Server } from "./src/index";
import ParserRepository from "./src/repositories/parser.repository"; // Import ParserRepository

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

// Define a function to call the ParserRoute
const callParserRoute = async () => {
  try {
    console.log("Calling getJakpotData...");
    const passwordLabelText = await ParserRepository.getJakpotData(); // Call getJakpotData directly
    console.log("hourly jackpot:", passwordLabelText);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call ParserRoute every 30 seconds
setInterval(callParserRoute, 30000);

app
  .listen(PORT, "localhost", function () {
    console.log(`Server ${server} is running on port ${PORT}.`);
  })
  .on("error", (err: Error) => {
    console.log(err);
  });
