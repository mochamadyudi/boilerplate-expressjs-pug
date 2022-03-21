import express from 'express'
const app = express();
import path from 'path';
import "dotenv/config"
import routes from "./routes";


app.set("views", path.join(__dirname,"src"))
app.set("view engine", "pug");

app.use(process.env.WEB_ROUTE,routes())
app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 5002, ()=> {
    console.log(process.env.PORT)
})
