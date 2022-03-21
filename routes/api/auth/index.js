import { Router } from 'express'

const route = Router();
export default (app)=> {
    app.use("/auth",route)

    route.get('/login' , async (req,res,next)=> {
        res.json({message:"Berhasil"}).status(200)
    })
}
