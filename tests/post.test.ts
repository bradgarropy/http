import {httpPost} from "../src/post"
import {httpRequest} from "../src/request"
import {mockOptions, mockUrl} from "./mocks"

jest.mock("../src/request")

const mockHttpRequest = jest.mocked(httpRequest)

test("uses correct method", () => {
    httpPost(mockUrl, mockOptions)

    expect(mockHttpRequest).toHaveBeenCalledTimes(1)
    expect(mockHttpRequest).toHaveBeenCalledWith(mockUrl, "POST", mockOptions)
})

// const url = "https://jsonplaceholder.typicode.com/posts"

// test("post", async () => {
//     const options: Options = {
//         headers: {"x-test": "true"},
//         body: mockNewPostRequest,
//     }

//     const response = await httpPost<Post>(url, options)
//     expect(response).toEqual(mockNewPostResponse)
// })

// test("empty post", async () => {
//     const response = await httpPost<Partial<Post>>(url)
//     expect(response).toEqual(mockPartialNewPostResponse)
// })

// test("post with headers", async () => {
//     const options: Options = {
//         headers: {"x-test": "true"},
//     }

//     const response = await httpPost<Partial<Post>>(url, options)
//     expect(response).toEqual(mockPartialNewPostResponse)
// })

// test("post with params", async () => {
//     const options: Options = {
//         params: {userId: 1},
//     }

//     const response = await httpPost<Partial<Post>>(url, options)
//     expect(response).toEqual(mockPartialNewPostResponse)
// })

// test("post with body", async () => {
//     const options: Options = {
//         body: mockNewPostRequest,
//     }

//     const response = await httpPost<Post>(url, options)
//     expect(response).toEqual(mockNewPostResponse)
// })
