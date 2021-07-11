const http = require("../.")

const main = async () => {
    const posts = await http.get("https://jsonplaceholder.typicode.com/posts")
    console.log(posts)

    const post = await http.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(post)

    const userPosts = await http.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            params: {userId: 1},
        },
    )

    console.log(userPosts)

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
}

main()
