import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


app.use(cors(
    {
    origin : process.env.CORS_ORIGIN,
    credentials : true
}
))

app.use(express.json({
    limit: "30kb",
}));

app.use(express,urlencoded(
    {
        extended : true,
        limit: "16kb",
    }
));

app.use(express.static("public"));

app.use(cookieParser());

//Routes

import { userRouter } from './routes/user.routes.js'; // Correct the path

//declaration

app.use( '/api/v1/users' , userRouter);
//http://localhost/api/v1/users/userRouter

export { app };
