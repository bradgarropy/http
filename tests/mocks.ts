type Post = {
    id: number
    userId: number
    title: string
    body: string
}

const mockPosts: Post[] = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\n" +
            "suscipit recusandae consequuntur expedita et cum\n" +
            "reprehenderit molestiae ut ut quas totam\n" +
            "nostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\n" +
            "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
            "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
            "qui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\n" +
            "voluptatem occaecati omnis eligendi aut ad\n" +
            "voluptatem doloribus vel accusantium quis pariatur\n" +
            "molestiae porro eius odio et labore et velit aut",
    },
]

type NewPostRequest = Pick<Post, "userId" | "title" | "body">

const mockNewPostRequest: NewPostRequest = {
    title: "foo",
    body: "bar",
    userId: 1,
}

type NewPostResponse = Pick<Post, "id">

const mockNewPostResponse: NewPostResponse = {id: 101}

export {
    mockNewPostRequest,
    mockNewPostResponse,
    mockPosts,
    NewPostRequest,
    NewPostResponse,
    Post,
}
