class Handler {

    constructor(props = {}) {
        this.response = {
            ...props,
            error: props?.error ?? false,
            data: props?.data ?? null,
            message: props?.message ?? null,
            status: props?.status ?? 200,
            success: props?.success ?? true
        }
        return this.BodyResponse()
    }
    BodyResponse(){
        try{
            return {
                ...this.response
            }
        }catch(err){
            return {
                ...this.response,
                error:true,
                message:err.message
            }
        }
    }
}
