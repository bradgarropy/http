import {appendQueryString} from "../src/utils"

describe("append query string", () => {
    test("handles empty params", () => {
        const url = appendQueryString("https://bradgarropy.com", {})
        expect(url).toEqual("https://bradgarropy.com")
    })

    test("handles one param", () => {
        const url = appendQueryString("https://bradgarropy.com", {
            first: "Brad",
        })

        expect(url).toEqual("https://bradgarropy.com?first=Brad")
    })

    test("handles params", () => {
        const url = appendQueryString("https://bradgarropy.com", {
            first: "Brad",
            cool: true,
            age: 34,
        })

        expect(url).toEqual(
            "https://bradgarropy.com?first=Brad&cool=true&age=34",
        )
    })
})
