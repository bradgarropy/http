import {httpRequest} from "./request"
import type {Options} from "./types"

const httpGet = async <ResponseType>(
    url: string,
    options?: Options,
): Promise<ResponseType> => {
    const response = await httpRequest<ResponseType>(url, "GET", options)
    return response
}

export {httpGet}
