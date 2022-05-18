type Options = {
    headers?: Headers
    params?: Parameters
    body?: Body
    type?: ContentType
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Headers = Record<string, any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters = Record<string, any>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Body = Record<string, any>

type ContentType = "json" | "form"

type Method = "GET" | "POST" | "PATCH" | "DELETE"

export type {Body, ContentType, Headers, Method, Options, Parameters}
