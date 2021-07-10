import {get, post} from "../src"
import {
    mockNewPostRequest,
    mockNewPostResponse,
    mockPartialNewPostResponse,
    mockPosts,
} from "./mocks"

describe("http get", () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    test("get", async () => {
        const response = await get(url)
        expect(response.slice(0, 3)).toEqual(mockPosts)
    })

    test("get with headers", async () => {
        const options = {
            headers: {"content-type": "application/json"},
        }

        const response = await get(url, options)
        expect(response.slice(0, 3)).toEqual(mockPosts)
    })
})

describe("http post", () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    test("post", async () => {
        const options = {
            headers: {"x-test": "true"},
            body: mockNewPostRequest,
        }

        const response = await post(url, options)
        expect(response).toEqual(mockNewPostResponse)
    })

    test("empty post", async () => {
        const response = await post(url)
        expect(response).toEqual(mockPartialNewPostResponse)
    })

    test("post with headers", async () => {
        const options = {
            headers: {"x-test": "true"},
        }

        const response = await post(url, options)
        expect(response).toEqual(mockPartialNewPostResponse)
    })

    test("post with body", async () => {
        const options = {
            body: mockNewPostRequest,
        }

        const response = await post(url, options)
        expect(response).toEqual(mockNewPostResponse)
    })
})
