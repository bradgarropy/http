import {httpRequest} from "./request"
import type {Options} from "./types"

const httpPatch = async <ResponseType>(
    url: string,
    options?: Options,
): Promise<ResponseType> => {
    const response = await httpRequest<ResponseType>(url, "PATCH", options)
    return response
}

export {httpPatch}
