import fetch from "cross-fetch"

import type {Method, Options} from "./types"
import {createBody, createHeaders, createUrl} from "./utils"

const httpRequest = async <ResponseType>(
    url: string,
    method: Method,
    options?: Options,
): Promise<ResponseType> => {
    if (options?.params) {
        url = createUrl(url, options.params)
    }

    const headers = createHeaders({
        headers: options?.headers,
        type: options?.type,
    })

    let body = null

    if (method !== "GET") {
        body = createBody({body: options?.body, type: options?.type})
    }

    const response = await fetch(url, {
        method,
        headers,
        body,
    })

    const json: ResponseType = await response.json()
    return json
}

export {httpRequest}
