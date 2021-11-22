import fetch from "cross-fetch"

import {Body, ContentType, Headers, Parameters} from "./types"
import {createBody, createHeaders, createUrl} from "./utils"

type GetOptions = {
    headers?: Headers
    params?: Parameters
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async (url: string, options?: GetOptions): Promise<any> => {
    if (options?.params) {
        url = createUrl(url, options.params)
    }

    const response = await fetch(url, {
        method: "GET",
        headers: options?.headers,
    })

    const json = await response.json()
    return json
}

type PostOptions = {
    headers?: Headers
    params?: Parameters
    body?: Body
    type?: ContentType
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async (url: string, options?: PostOptions): Promise<any> => {
    if (options?.params) {
        url = createUrl(url, options.params)
    }

    const headers = createHeaders({
        headers: options?.headers,
        type: options?.type,
    })

    const body = createBody({body: options?.body, type: options?.type})

    const response = await fetch(url, {
        method: "POST",
        headers,
        body,
    })

    const json = await response.json()
    return json
}

export {get, post}
export type {GetOptions, PostOptions}
