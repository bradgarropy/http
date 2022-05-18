import {httpGet} from "../src/get"
import {httpRequest} from "../src/request"
import {mockOptions, mockUrl} from "./mocks"

jest.mock("../src/request")

const mockHttpRequest = jest.mocked(httpRequest)

test("uses correct method", () => {
    httpGet(mockUrl, mockOptions)

    expect(mockHttpRequest).toHaveBeenCalledTimes(1)
    expect(mockHttpRequest).toHaveBeenCalledWith(mockUrl, "GET", mockOptions)
})

// const url = "https://jsonplaceholder.typicode.com/posts"

// test("get all", async () => {
//     const response = await httpGet<Post[]>(url)
//     expect(response.slice(0, 10)).toEqual(mockPosts)
// })

// test("get one", async () => {
//     const response = await httpGet<Post>(`${url}/1`)
//     expect(response).toEqual(mockPosts[0])
// })

// test("get with headers", async () => {
//     const options: Options = {
//         headers: {"content-type": "application/json"},
//     }

//     const response = await httpGet<Post[]>(url, options)
//     expect(response.slice(0, 10)).toEqual(mockPosts)
// })

// test("get with params", async () => {
//     const options: Options = {
//         params: {userId: 1},
//     }

//     const response = await httpGet<Post[]>(url, options)
//     expect(response).toEqual(mockPosts)
// })
