import {httpRequest} from "./request"
import type {Options} from "./types"

const httpDelete = async <ResponseType>(
    url: string,
    options?: Options,
): Promise<ResponseType> => {
    const response = await httpRequest<ResponseType>(url, "DELETE", options)
    return response
}

export {httpDelete}
