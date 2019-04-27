import { parse } from '../src/url/parse'

describe("test parse", () => {
    test("parse", () => {
        expect(parse('ab=1')).toEqual({ ab: "1" })
        expect(parse('ab=1&c=2')).toEqual({ ab: "1", c: "2" })
        expect(parse('?ab=1&c=2')).toEqual({ ab: "1", c: "2" })
        expect(parse('?ab=1&c=2')).toEqual({ ab: "1", c: "2" })
    })

})
