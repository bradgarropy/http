import {ContentType, Headers, Parameters} from "./types"

const appendQueryString = (url: string, params: Parameters): string => {
    if (!Object.entries(params).length) {
        return url
    }

    const queryParams = new URLSearchParams(params)
    const queryString = queryParams.toString()
    const newUrl = `${url}?${queryString}`

    return newUrl
}

const createHeaders = ({
    headers = {},
    type = "json",
}: {
    headers?: Headers
    type?: ContentType
}): Headers => {
    const newHeaders = {...headers}

    switch (type) {
        case "json":
            newHeaders["content-type"] = "application/json"
            break

        case "form":
            newHeaders["content-type"] = "multipart/form-data"
            break

        default:
            newHeaders["content-type"] = "application/json"
            break
    }

    return newHeaders
}

export {appendQueryString, createHeaders}
