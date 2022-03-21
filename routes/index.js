import api from "./api";
import web from './web'
import {Router} from 'express'

export default ()=> {
    const app = Router();
    api(app)
    web(app)
    return app
}
