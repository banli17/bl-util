import {debounce} from '../src/util/debounce'

describe('debounce', () => {
    test('debounce', done => {
        let a = 1
        let callback = debounce(() => { // 创建一个 debounce
            a = 2
        }, 1000)
        callback()
        expect(a).toBe(1)
        setTimeout(() => {
            callback()
            expect(a).toBe(1)
        }, 500)
        setTimeout(() => {
            expect(a).toBe(1)
        }, 1000)
        setTimeout(() => {
            expect(a).toBe(2)
            done()
        }, 2500)
    })
})
