import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success fetch message",
    data: "Hello World!",
  });
});


app.get("/product", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success fetch product",
    data: {
      id: 1,
      name: "Spoon",
      quantity: 200,
      price: "Rp. 50.000",
    },
  });
});

app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
