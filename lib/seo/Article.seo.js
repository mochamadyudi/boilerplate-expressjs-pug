class ArticleSeo {
    constructor(props = {}) {
        this.meta = {
            ...props?.meta,
            title: props?.meta?.title ?? "",
            description: props?.meta?.description ?? ""
        }
    }

    async getGroupArticles(){
        return ArticleSeo.#groupArticles()
    }

    async getSingleArticle(){

    }

    static async #groupArticles(){
        return {
            title: "Lorem ipsum dolor sit amet",
            description :"Lorem ipsum dolor sit amet"
        }
    }

    async #singleArticle(){

    }






}
