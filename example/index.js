const {http} = require("../.")

const main = async () => {
    console.log("get post")
    const post = await http.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(post)

    console.log("get posts")
    const posts = await http.get("https://jsonplaceholder.typicode.com/posts")
    console.table(posts, ["id", "userId", "title"])

    console.log("filter posts")

    const userPosts = await http.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            params: {userId: 1},
        },
    )

    console.table(userPosts, ["id", "userId", "title"])

    console.log("create post")

    const newPost = await http.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            body: {
                title: "foo",
                body: "bar",
                userId: 1,
            },
        },
    )

    console.log(newPost)

    console.log("update post")

    const updatedPost = await http.patch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            body: {
                title: "foo",
            },
        },
    )

    console.log(updatedPost)

    console.log("delete post")

    const deletedPost = await http.delete(
        "https://jsonplaceholder.typicode.com/posts/1",
    )

    console.log(deletedPost)
}

main()
