import {Router} from 'express'
import "dotenv/config"
import {DashboardController} from "../../controllers";
import dashboard from "./dashboard";

const route = Router();
// const controllers = new DashboardController()
export default (app)=> {
    app.use("/",route)
    route.get("/", async (req,res)=> {

        res.render('views/index',{
            title: "Home"
        })
    })


    /**
     * DASHBOARD
     */
    app.use("/dashboard", dashboard())
    return app
}
