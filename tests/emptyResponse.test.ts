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
                    throw new Error("")
                },
            }
        }),
    }
})

describe("responses", () => {
    test("empty response", async () => {
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
})
