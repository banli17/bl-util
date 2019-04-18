import { dateToRemain, toTimestamp, formatDate, getRelativeDate, datejs } from "../src/date/index"

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
        expect(formatDate(1514822400, 'y-m-d')).toBe("2018-01-02")
    })

    test("2018-02-03 08:34:22 == 02-03 08:34", () => {
        expect(formatDate('2018-02-03 08:34:22', 'm-d h:i')).toBe("02-03 08:34")
    })

    test("1514822400 == 18-01-02", () => {
        expect(formatDate(1514822400, 'yy-mm-dd')).toBe("18-1-2")
    })

    test("1514822400 == 2018-01-02 00:00:00", () => {
        expect(formatDate(1514822400, 'm-d h:i')).toBe("01-02 00:00")
    })

    test("1514822400 == 1月2日", () => {
        expect(formatDate(1514822400, 'mm月dd日')).toBe("1月2日")
    })

    test("1514822400 == 星期二", () => {
        expect(formatDate(1514822400, 'week')).toBe(2)
    })

    test("1514822400 == 星期二", () => {
        expect(formatDate(1514822400, 'week_cn')).toBe("二")
    })

    test("2019-01-13 06:30 == 2019-01-13", () => {
        expect(formatDate("2019-01-13 06:30", 'y年m月d日')).toBe("2019年01月13日")
    })

    test("2019-01-13 06:30 == 2019-01-13", () => {
        expect(formatDate("2019-1-13 06:30", 'y-m-d')).toBe("2019-01-13")
    })

    test("2019-1-13 -> 2019-01-13", () => {
        expect(formatDate("2019-1-13", 'y-m-d')).toBe("2019-01-13")
    })
    test("1-13 -> 1-13", () => {
        expect(formatDate("1-13", 'y-m-d')).toBe("1-13")
    })
    test("20190113 -> 2019-01-13", () => {
        expect(formatDate("20190113", 'y-m-d')).toBe("2019-01-13")
    })
    test("2019-1-01 -> 2019-01-13", () => {
        expect(formatDate("2019-1-01", 'y-m-d')).toBe("2019-01-01")
    })

    test("2019-1-01 -> 2019-01-13", () => {
        expect(formatDate("2019-1-01", 'ymd')).toBe("20190101")
    })

    test("2019-1-01 -> 2019-01-13", () => {
        expect(formatDate(1547602644000, 'y-m-d', 'ms')).toBe("2019-01-16")
    })
})


// describe("test getRelativeDate", () => {
//     test("2018-12-05 +1  = 2018-12-06", () => {
//         expect(getRelativeDate("2018-12-05", 1)).toBe("2018-12-06")
//     })

//     test("2018-12-05 -1  = 2018-12-04", () => {
//         expect(getRelativeDate("2018-12-05", -1)).toBe("2018-12-04")
//     })
// })


describe("test datejs", () => {
    test("1514823459000", () => {
        expect(datejs(1514823459000).ymd).toBe("2018-01-02")
        // expect(datejs(1514823459000).format('y-m-d 00:00:00')).toBe("2018-01-02")
        expect(datejs(1514823459000).getRelativeMonth(1).ym).toBe("2018-02")
        expect(datejs(1514823459000).getRelativeMonth(11).ym).toBe("2018-12")
        expect(datejs(1514823459000).getRelativeMonth(12).ym).toBe("2019-01")
        expect(datejs(1552381369000).getRelativeMonth(1).ym).toBe("2019-04")
        expect(datejs('2019-03').daysCount).toBe(31)

        // expect(datejs().rangeYMArray('2019-03', '2021-05')).toBe([])
        // expect(datejs('2019-03-07')).toBe('四')

        expect(datejs('2019-03-14 00:00:00').getRelativeDate(30)).toBe("2019-04-13 00:00:00")
        expect(datejs('2019-03-14').getRelativeDate(30)).toBe("2019-04-13 00:00:00")
        expect(datejs('2019-03-14 00:00:00').getRelativeMinutes(30)).toBe("2019-03-14 00:30:00")
        expect(datejs('2019-03-14 00:00:00').getRelativeMinutes(-30)).toBe("2019-03-13 23:30:00")
        expect(datejs('2019-03-14 00:00:00').format('y-m-d')).toBe("2019-03-14")
        expect(datejs('2019-03-14 00:00:00').format('ymd')).toBe("20190314")

        expect(datejs('2019-03-14').getRelativeMinutes(30)).toBe("2019-03-14 00:30:00")
        // expect(datejs().format('y-m-d h:i')).toBe('2019-03-27 11:37')
        expect(datejs(datejs('2019-03-14').getRelativeMinutes(-1440)).format('y-m-d h:i')).toBe('2019-03-13 00:00')
    })
})
//2019-04-19