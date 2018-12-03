import { dateToRemain, toTimestamp, formatDate } from "../src/date/index"

describe("test dateToRemain", () => {
    test("8秒 == 8秒", () => {
        expect(dateToRemain(8)).toBe("8秒")
    })
    test("100秒 == 1分40秒", () => {
        expect(dateToRemain(100)).toBe("1分40秒")
    })
    test("300秒 == 5分", () => {
        expect(dateToRemain(300)).toBe("5分")
    })
    test("3601秒 == 1时1秒", () => {
        expect(dateToRemain(3601)).toBe("1时1秒")
    })
    test("129600秒 == 1天12时", () => {
        expect(dateToRemain(129600)).toBe("1天12时")
    })
})

describe("test toTimestamp，将字符串转时间戳", () => {
    test("2018-01-02 == 1514822400", () => {
        expect(toTimestamp("2018-01-02")).toBe(1514822400)
    })
})


describe("test formatDate", () => {
    test("1514822400 == 2018-01-02 00:00:00", () => {
        expect(formatDate(1514822400)).toBe("2018-01-02 00:00:00")
    })

    test("1514822400 == 2018-01-02 00:00:00", () => {
        expect(formatDate(1514822400, 'yy-mm-dd')).toBe("2018-01-02")
    })

    test("1514822400 == 2018-01-02 00:00:00", () => {
        expect(formatDate(1514822400, 'mm-dd hh:mm')).toBe("01-02 00:00")
    })

    test("1514822400 == 1月2日", () => {
        expect(formatDate(1514822400, 'm月d日')).toBe("1月2日")
    })

})