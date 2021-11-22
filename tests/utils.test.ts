import {Headers} from "cross-fetch"

import {createBody, createHeaders, createUrl} from "../src/utils"

describe("createUrl", () => {
    test("handles empty params", () => {
        const url = createUrl("https://bradgarropy.com", {})
        expect(url).toEqual("https://bradgarropy.com")
    })

    test("handles one param", () => {
        const url = createUrl("https://bradgarropy.com", {
            first: "Brad",
        })

        expect(url).toEqual("https://bradgarropy.com?first=Brad")
    })

    test("handles params", () => {
        const url = createUrl("https://bradgarropy.com", {
            first: "Brad",
            cool: true,
            age: 34,
        })

        expect(url).toEqual(
            "https://bradgarropy.com?first=Brad&cool=true&age=34",
        )
    })
})

describe("createHeaders", () => {
    test("creates default headers", () => {
        const headers = createHeaders({})

        expect(headers).toEqual(
            new Headers({"content-type": "application/json"}),
        )
    })

    test("creates json headers", () => {
        const headers = createHeaders({type: "json"})

        expect(headers).toEqual(
            new Headers({"content-type": "application/json"}),
        )
    })

    test("creates form headers", () => {
        const headers = createHeaders({type: "form"})

        expect(headers).toEqual(new Headers())
    })
})

describe("createBody", () => {
    test("creates default body", () => {
        const body = createBody({})
        expect(body).toEqual(JSON.stringify({}))
    })

    test("creates json body", () => {
        const body = createBody({
            body: {
                first: "Brad",
                last: "Garropy",
            },
            type: "json",
        })

        expect(body).toEqual(
            JSON.stringify({
                first: "Brad",
                last: "Garropy",
            }),
        )
    })

    test("creates form body", () => {
        const body = createBody({
            body: {
                first: "Brad",
                last: "Garropy",
            },
            type: "form",
        })

        expect(body).toBeDefined()
    })
})
