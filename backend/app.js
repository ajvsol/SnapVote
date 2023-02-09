import express from 'express';
import morgan from 'morgan';
import router from './routes/index.js';
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors('*'));
app.use("/api/snap", router);


// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// // });
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
