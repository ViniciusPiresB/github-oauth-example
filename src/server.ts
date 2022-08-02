import app from "./app";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, PORT } from "./config";

const port = PORT;
const server = app.listen(port);

server.on("listening", () => console.log(`Server running on port ${port}.`));
