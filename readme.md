# 📻 http

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_📻 http request library heavily inspired by [axios][axios]._

Most of the time, `fetch` is used to interact with a JSON API. This library is a thin wrapper around `fetch` that converts the request and response body to JSON by default.

<p align="center">
    <a href="https://www.npmjs.com/package/@bradgarropy/http">
        <img alt="http" src="./images/github.png" width="500">
    </a>
</p>

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/http
```

## 🥑 Usage

This library's API is very similar to [axios][axios]. You can issue HTTP requests which are assumed to be JSON by default. It returns a `Promise` with the response data.

```javascript
import {http} from "@bradgarropy/http"

// get all posts
const posts = await http.get("https://jsonplaceholder.typicode.com/posts")

// get posts by user
const posts = await http.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
        userId: 1,
    },
})

// get one post
const post = await http.get("https://jsonplaceholder.typicode.com/posts/1")

// create a post
const newPost = await http.post("https://jsonplaceholder.typicode.com/posts", {
    body: {
        title: "My post title",
        body: "This is my post body.",
        userId: 1,
    },
})

// update a post
const newPost = await http.patch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        body: {
            title: "My new post title",
            body: "This is my new post body.",
            userId: 1,
        },
    },
)

// delete a post
const oldPost = await http.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
)
```

## 📖 API Reference

### `options`

All methods support an `options` object. Here are the set of supported options.

| Name      | Required | Default | Example                              | Description                                                      |
| --------- | -------- | ------- | ------------------------------------ | ---------------------------------------------------------------- |
| `headers` | `false`  | `{}`    | `{"authorization": "Bearer abc123"}` | Headers object, similar to `fetch`.                              |
| `params`  | `false`  | `{}`    | `{userId: 1}`                        | Query parameters object.                                         |
| `body`    | `false`  | `{}`    | `{first: "Brad", last: "Garropy"}`   | Body to send to the API. Define the `Content-Type` using `type`. |
| `type`    | `false`  | `json`  | `form`                               | Content type of the body. (`json` \| `form`)                     |

### `get(url, options)`

| Name      | Required | Default | Example                                      | Description                  |
| --------- | -------- | ------- | -------------------------------------------- | ---------------------------- |
| `url`     | `true`   |         | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.      |
| `options` | `false`  | `{}`    | `{params: {userId: 1}}`                      | Request [options](#options). |

Perform an HTTP GET request. The response is automatically converted to JSON.

```javascript
// get without options
http.get("https://jsonplaceholder.typicode.com/posts")

// get with  options
http.get("https://jsonplaceholder.typicode.com/posts", {
    headers: {authorization: "Bearer abc123"},
    params: {userId: 1},
    body: {
        first: "Brad",
        last: "Garropy",
    },
    type: "json",
})
```

### `post(url, options)`

| Name      | Required | Default | Example                                      | Description                  |
| --------- | -------- | ------- | -------------------------------------------- | ---------------------------- |
| `url`     | `true`   |         | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.      |
| `options` | `false`  | `{}`    | `{params: {userId: 1}}`                      | Request [options](#options). |

Perform an HTTP POST request. If a `body` is supplied, it's automatically converted to a string before being sent in the request. The response is automatically converted to JSON.

```javascript
// post without options
http.post("https://jsonplaceholder.typicode.com/posts")

// post with options
http.post("https://jsonplaceholder.typicode.com/posts", {
    headers: {authorization: "Bearer abc123"},
    params: {userId: 1},
    body: {
        first: "Brad",
        last: "Garropy",
    },
    type: "json",
})
```

### `patch(url, options)`

| Name      | Required | Default | Example                                      | Description                  |
| --------- | -------- | ------- | -------------------------------------------- | ---------------------------- |
| `url`     | `true`   |         | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.      |
| `options` | `false`  | `{}`    | `{params: {userId: 1}}`                      | Request [options](#options). |

Perform an HTTP PATCH request. If a `body` is supplied, it's automatically converted to a string before being sent in the request. The response is automatically converted to JSON.

```javascript
// patch without options
http.patch("https://jsonplaceholder.typicode.com/posts")

// patch with options
http.patch("https://jsonplaceholder.typicode.com/posts", {
    headers: {authorization: "Bearer abc123"},
    params: {userId: 1},
    body: {
        first: "Brad",
        last: "Garropy",
    },
    type: "json",
})
```

### `delete(url, options)`

| Name      | Required | Default | Example                                      | Description                  |
| --------- | -------- | ------- | -------------------------------------------- | ---------------------------- |
| `url`     | `true`   |         | `https://jsonplaceholder.typicode.com/posts` | Web address of the API.      |
| `options` | `false`  | `{}`    | `{params: {userId: 1}}`                      | Request [options](#options). |

Perform an HTTP DELETE request. If a `body` is supplied, it's automatically converted to a string before being sent in the request. The response is automatically converted to JSON.

```javascript
// delete without options
http.delete("https://jsonplaceholder.typicode.com/posts")

// delete with options
http.delete("https://jsonplaceholder.typicode.com/posts", {
    headers: {authorization: "Bearer abc123"},
    params: {userId: 1},
    body: {
        first: "Brad",
        last: "Garropy",
    },
    type: "json",
})
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/http/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/http/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/http/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/http
[contributing]: https://github.com/bradgarropy/http/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@bradgarropy/http
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/http?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/http.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/http?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/http?style=flat-square
[issues]: https://github.com/bradgarropy/http/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/http
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/http?style=flat-square
[github-actions]: https://github.com/bradgarropy/http/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/http/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fhttp
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/http?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[axios]: https://github.com/axios/axios
