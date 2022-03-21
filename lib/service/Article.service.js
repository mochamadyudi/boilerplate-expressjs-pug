import Handler from '../handler/index.handler'
class ArticleService {
    constructor(props = {}) {
        this.config = {
            ...props?.config,
            headers: {
                ...props?.config?.headers
            },
            params: {
                ...props?.config?.params,
            }
        }
    }

    async getAll(){
        return await ArticleService.#getArticles();
    }

    static async #getArticles(){
        try{
            return await new Handler({error:false,data: [{id:1,name:"John Doe"}],message: "Berhasil"})

        }catch(err){
            return new Handler({error:true,message:err.message})
        }
    }


}
