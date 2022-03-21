export default class ArticleController {
    constructor(props = {}) {
        this.config = {
            ...props?.config
        }
    }

    static list(){

    }
    static search(query){

    }
    static single(){
        return {
            //any return
        }
    }
}
