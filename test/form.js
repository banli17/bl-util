import * as valid from '../src/form/valid'

describe('test form valid', () => {
    test('test valid isCardNo', () => {
        expect(valid.isCardNo('429005198810020012')).toBe(true)
        expect(valid.isCardNo('52242619811105565X')).toBe(true)
        expect(valid.isCardNo('49005198810020012')).toBe(false)
        expect(valid.isCardNo('4900519881002001X')).toBe(false)
        expect(valid.isCardNo('4900519')).toBe(false)
        expect(valid.isCardNo('4900519321321312312321')).toBe(false)
    })
})