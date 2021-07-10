import fetch from "cross-fetch"

type GetOptions = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headers?: Record<string, any>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async (url: string, options?: GetOptions): Promise<any> => {
    const response = await fetch(url, {
        method: "GET",
        headers: options?.headers,
    })

    const json = await response.json()
    return json
}

type PostOptions = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headers?: Record<string, any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: Record<string, any>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async (url: string, options?: PostOptions): Promise<any> => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            ...options?.headers,
        },
        body: JSON.stringify(options?.body),
    })

    const json = await response.json()
    return json
}

export {get, post}
