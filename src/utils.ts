const appendQueryString = (
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: Record<string, any>,
): string => {
    if (!Object.entries(params).length) {
        return url
    }

    const queryParams = new URLSearchParams(params)
    const queryString = queryParams.toString()
    const newUrl = `${url}?${queryString}`

    return newUrl
}

export {appendQueryString}
