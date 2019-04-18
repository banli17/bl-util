import { parse1 } from '../src/url/parse'

describe("test parse1", () => {
    test("parse1", () => {
        expect(parse1('ab=1')).toEqual({ ab: "1" })
        expect(parse1('ab=1&c=2')).toEqual({ ab: "1", c: "2" })
    })

})
