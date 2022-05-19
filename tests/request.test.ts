import fetch, {Headers} from "cross-fetch"

import {httpRequest} from "../src/request"
import {mockUrl} from "./mocks"

jest.mock("cross-fetch", () => {
    const originalCrossFetch = jest.requireActual("cross-fetch")

    return {
        __esModule: true,
        ...originalCrossFetch,
        default: jest.fn(() => {
            return {
                json: () => {
                    return {}
                },
            }
        }),
    }
})

describe("requests", () => {
    test("get", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "GET")

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })

    test("post", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "POST")

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })

    test("patch", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "PATCH")

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "PATCH",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })

    test("delete", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "DELETE")

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "DELETE",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })
})

describe("options", () => {
    test("headers ", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "GET", {
            headers: {
                authorization: "Bearer abc123",
            },
        })

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "GET",
            headers: new Headers({
                "authorization": "Bearer abc123",
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })

    test("params ", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "GET", {
            params: {
                userId: 1,
            },
        })

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts?userId=1`, {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: null,
        })

        expect(result).toEqual({})
    })

    test("body ", async () => {
        const result = await httpRequest(`${mockUrl}/posts`, "POST", {
            body: {
                name: "Brad",
            },
        })

        expect(fetch).toHaveBeenCalledTimes(1)

        expect(fetch).toHaveBeenCalledWith(`${mockUrl}/posts`, {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: JSON.stringify({name: "Brad"}),
        })

        expect(result).toEqual({})
    })
})

// TODO: shift the following tests into here
//       jsonResponse
//       emptyResponse
//       stringResponse
describe("responses", () => {
    test.todo("json response")
    test.todo("string response")
    test.todo("empty response")
})
