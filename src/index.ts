import {httpDelete} from "./delete"
import {httpGet} from "./get"
import {httpPatch} from "./patch"
import {httpPost} from "./post"

const http = {
    get: httpGet,
    post: httpPost,
    patch: httpPatch,
    delete: httpDelete,
}

export {http}
