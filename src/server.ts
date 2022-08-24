import app from "./app";
import { PORT } from "./config";

const port = PORT;
const server = app.listen(port);

server.on("listening", () => console.log(`Server running on port ${port}.`));
