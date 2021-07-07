import {get, post} from "../src"
import {
    mockNewPostRequest,
    mockNewPostResponse,
    mockPosts,
    NewPostRequest,
    NewPostResponse,
    Post,
} from "./mocks"

test("runs get", async () => {
    const response = await get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
    )

    expect(response.slice(0, 3)).toEqual(mockPosts)
})

test("runs post", async () => {
    const response = await post<NewPostResponse, NewPostRequest>(
        "https://jsonplaceholder.typicode.com/posts",
        mockNewPostRequest,
    )

    expect(response).toEqual(mockNewPostResponse)
})
