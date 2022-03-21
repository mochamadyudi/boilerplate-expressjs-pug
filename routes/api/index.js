import {Router} from 'express'
import "dotenv/config"
import auth from "./auth";

export default (app)=> {
    app.use(process.env.API_ROUTE,app)
    auth(app)
    return app
}
