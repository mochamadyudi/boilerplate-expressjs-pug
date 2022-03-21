import { Router } from 'express'
import settings from "./settings";


export default ()=> {
    const app = Router();

    settings(app)

    return app
}
