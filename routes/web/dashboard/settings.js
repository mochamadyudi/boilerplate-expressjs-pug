import { Router } from 'express'
const route = Router()


export default (app)=> {
    app.use('/settings', route)

    route.get("/password", )
}
