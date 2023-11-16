import  { Express } from "express";
import express from "express";
import cors from "cors";
import clientRouter from "./routes/client.routes";


const app = express();
const port = +process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
  res.send("OK");
});
app.use(clientRouter);



app.listen(4000, () => {
  console.log(`Server listening on port ${port}`);
})





export default app;


