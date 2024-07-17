import express from "express";
import morgan from "morgan";

const PORT = 3000;

const app = express();
const loggerMiddleWare = morgan("dev");

const home = (req, res) => {
  return res.send("boo boo weaboo");
};

app.use(loggerMiddleWare);
app.get("/", home);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
