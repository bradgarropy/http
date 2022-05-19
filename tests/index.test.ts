import {http} from "../src"
import {mockPosts, mockUrl, Post} from "./mocks"

test("get post", async () => {
    const result = await http.get<Post>(`${mockUrl}/posts/1`)
    expect(result).toEqual(mockPosts[0])
})

test("get posts", async () => {
    const result = await http.get<Post[]>(`${mockUrl}/posts`)
    expect(result.slice(0, 10)).toEqual(mockPosts)
})

test("filter posts", async () => {
    const result = await http.get<Post[]>(`${mockUrl}/posts`, {
        params: {
            userId: 1,
        },
    })

    expect(result.slice(0, 10)).toEqual(mockPosts)
})

test("create post", async () => {
    const result = await http.post<Post>(`${mockUrl}/posts`, {
        body: {
            title: "Post title",
            body: "This is the post body.",
            userId: 1,
        },
    })

    expect(result).toEqual({
        id: 101,
        title: "Post title",
        body: "This is the post body.",
        userId: 1,
    })
})

test("update post", async () => {
    const result = await http.patch<Post>(`${mockUrl}/posts/1`, {
        body: {
            title: "New post title",
        },
    })

    expect(result).toEqual({
        ...mockPosts[0],
        title: "New post title",
    })
})

test("delete post", async () => {
    const result = await http.delete(`${mockUrl}/posts/1`)
    expect(result).toEqual({})
})
