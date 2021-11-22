import {Headers} from "cross-fetch"
import FormData from "form-data"

import {Body, ContentType, HeadersType, Parameters} from "./types"

const createUrl = (url: string, params: Parameters): string => {
    if (!Object.entries(params).length) {
        return url
    }

    const queryParams = new URLSearchParams(params)
    const queryString = queryParams.toString()
    const newUrl = `${url}?${queryString}`

    return newUrl
}

const createHeaders = ({
    headers = new Headers(),
    type = "json",
}: {
    headers?: HeadersType
    type?: ContentType
}): Headers => {
    const newHeaders = new Headers(headers)

    switch (type) {
        case "json":
            newHeaders.set("content-type", "application/json")
            break

        case "form":
            break
    }

    return newHeaders
}

const createBody = ({
    body = {},
    type = "json",
}: {
    body?: Body
    type?: ContentType
}): BodyInit => {
    switch (type) {
        case "json": {
            const newBody = JSON.stringify(body)
            return newBody
        }

        case "form": {
            const form = new FormData()

            Object.entries(body).forEach(([key, value]) => {
                form.append(key, value)
            })

            // form-data types do not match actual FormData types
            return form as unknown as globalThis.FormData
        }
    }
}

export {createBody, createHeaders, createUrl}
