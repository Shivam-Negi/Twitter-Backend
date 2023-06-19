import express  from "express";
import { connect } from "./config/database.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

app.listen(3000, async () => {
    console.log(`Server listening on port : ${3000}`);
    connect();
    console.log('mongoose connected');
})