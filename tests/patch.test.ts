import {httpPatch} from "../src/patch"
import {httpRequest} from "../src/request"
import {mockOptions, mockUrl} from "./mocks"

jest.mock("../src/request")

const mockHttpRequest = jest.mocked(httpRequest)

test("uses correct method", () => {
    httpPatch(mockUrl, mockOptions)

    expect(mockHttpRequest).toHaveBeenCalledTimes(1)
    expect(mockHttpRequest).toHaveBeenCalledWith(mockUrl, "PATCH", mockOptions)
})
