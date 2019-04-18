import { hideString, toCamelCase, toPascalCase } from '../src/string'


describe('test hideString', () => {
    test("张三 to *三", () => {
        expect(hideString('张三')).toBe("*三")
    })

    test("王大锤 to **锤", () => {
        expect(hideString('王大锤')).toBe("*锤")
    })

    test("王大锤 to **锤", () => {
        expect(hideString('王大锤', true)).toBe("**锤")
    })
})


describe('test toCamelCase', () => {
    test("hello_world_please", () => {
        expect(toCamelCase('hello_world_please')).toBe("helloWorldPlease")
    })
})


describe('test toPascalCase', () => {
    test("hello_world_please", () => {
        expect(toPascalCase('hello_world_please')).toBe("HelloWorldPlease")
    })
})

