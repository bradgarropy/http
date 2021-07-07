import fetch from "cross-fetch"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async <ResponseType = any>(url: string): Promise<ResponseType> => {
    const response = await fetch(url, {
        method: "GET",
    })

    const json = await response.json()
    return json
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async <ResponseType = any, BodyType = any>(
    url: string,
    body: BodyType,
): Promise<ResponseType> => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
    })

    const json = response.json()
    return json
}

export {get, post}
