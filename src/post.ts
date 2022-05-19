import {httpRequest} from "./request"
import type {Options} from "./types"

const httpPost = async <ResponseType>(
    url: string,
    options?: Options,
): Promise<ResponseType> => {
    const response = await httpRequest<ResponseType>(url, "POST", options)
    return response
}

export {httpPost}
