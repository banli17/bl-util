import { extend } from '../src/util/extend'


describe('test extend', () => {
    test("extend", () => {
        let a = {}
        let b = extend(a)
        expect(a).toBe(b)
    })
    test("extend1", () => {
        let a = { name: 'zs', age: 12, child: [{ name: 'lisi' }] }
        let b = { name: 'wz', age: 32, child: [{ name: 'zq' }] }
        let c = extend(a,b)
        console.log(b, a)
        expect(a.child).toBe(b.child)
    })
})


