import { isString } from "../util/type";

/**
 * 将时间戳转成日期
 * @param da 时间戳
 * @returns {string}
 */
export const formatDate1 = (da) => {
    let d = new Date(parseInt(da * 1000))
    let c = new Date().getFullYear() - d.getFullYear();
    let mc = new Date().getMonth() - d.getMonth();
    let dc = new Date().getDate() - d.getDate();
    let year = c < 4 ? ['', '去年', '前年', '大前年'][c] : (String(d.getFullYear()).substring(2) + '年')
    let day = (mc == 0 && dc < 4) ? (['', '昨天', '前天', '大前天'][dc] || '') : ((d.getMonth() + 1) + '月' + d.getDate() + '日');
    return year + day + d.getHours() + '点' + (d.getMinutes() == 0 ? '' : d.getMinutes() + '分');
}

/**
 * 将日期转时间戳
 * 1. 2018-01-01
 * 2. 2018年01月01日
 * 3. 20180101
 * 4. Date类型
 * @param date
 */
export const toTimestamp = (date) => {
    let res

    // 如果是字符串，转成2018/01/01（2018-01-01不兼容，需要使用/），再转时间戳
    if (typeof date == 'string') {
        res = new Date(date.replace(/(\d{4}).*(\d{2}).*(\d{2})/g, '$1/$2/$3'))
    } else {
        res = date
    }
    return res.getTime() / 1000
}

export const addZero = (i) => {
    i = Number(i)
    return i < 10 ? ('0' + i) : i
}


/**
 * 将秒转成倒计时时间格式
 * @param seconds
 * @returns {*}
 *
 * 60s -> 1分
 */
export const dateToRemain = seconds => {
    const days = parseInt(seconds / 3600 / 24)
    const hours = parseInt((seconds - days * 3600 * 24) / 3600)
    const mins = parseInt((seconds - days * 3600 * 24 - hours * 3600) / 60)
    const secs = seconds - (days * 3600 * 24 + hours * 3600 + mins * 60)

    const desc = '天时分秒'
    const res = [days, hours, mins, secs].reduce((a, b, i) => {
        // console.log('a',a, 'b',b, i)
        return b == 0 ? a : a + b + desc.charAt(i)
    }, '')

    return res
}

/**
 * 将时间戳转成聊天、朋友圈形式的格式，如 昨天 15:22
 * @param timestamp 时间戳
 * @returns {string}
 */
export const formatWorkDate = (timestamp) => {
    let d = null;
    if (timestamp.toString().length != 10) {
        d = new Date(parseInt(timestamp))
    } else {
        d = new Date(parseInt(timestamp * 1000))
    }

    let c = new Date().getFullYear() - d.getFullYear();
    let mc = new Date().getMonth() - d.getMonth();
    let dc = new Date().getDate() - d.getDate();
    let year = c < 4 ? ['', '去年', '前年', '大前年'][c] : (String(d.getFullYear()).substring(2) + '年')
    let day = (mc == 0 && dc < 4) ? ['', '昨天', '前天', '大前天'][dc] : ((d.getMonth() + 1) + '月' + d.getDate() + '日')
    return year
        + day
        + addZero(d.getHours()) + '点'
        + (d.getMinutes() == 0 ? '' : addZero(d.getMinutes()) + '分');
}

/**
 * 获取当前日期是星期几
 * @param date 2018-10-01
 */
export function dateToDay(date) {
    return new Date(`${date}`.replace(/-/g, '/')).getDay()
}

/**
 *
 * @param monthDayNum
 * @returns {number}
 */
export const getCountDays = (month) => {
    var curDate = new Date(`${month}/01`.replace(/-/g, '/'));
    /* 获取当前月份 */
    var curMonth = curDate.getMonth();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
    curDate.setDate(0);
    /* 返回当月的天数 */
    return curDate.getDate();
}

function getRelativeMonth(timestamp, relative) {
    const year = new Date(timestamp).getFullYear()
    const month = new Date(timestamp).getMonth() + Number(relative)

    return datejs(new Date(year, month).getTime())
}

function getRelativeSeconds(timestamp, relative) {
    return formatDate(
        timestamp + relative * 1000,
        'y-m-d h:i:s',
        'ms'
    )
}

function getRelativeMinutes(timestamp, relative) {
    return getRelativeSeconds(timestamp, relative * 60)
}

/**
 * 根据差额获取日期，比如
 * @param date
 */
function getRelativeDate(timestamp, relative) {
    return getRelativeSeconds(timestamp, relative * 24 * 60 * 60)
}

/**
 * 将时间戳等转成 'y-m-d h:i:s' 等格式
 * @param timestampType: s秒 ms毫秒，默认是s
 * @param type: 格式
 *  - y-m-d h:i:s
 *  - m-d h:i
 *  - week 转成星期几
 * @returns {string} 返回如2018-10-11 08:08:08
 */
export const formatDate = (
    timestamp = new Date().getTime(),
    format = 'y-m-d h:i:s',
    timestampType = 's',
) => {
    // 用于处理timestamp 为 '2018-09-09 09:09:00' 格式
    if (isNaN(Number(timestamp))) {
        // 将-转成/
        try {
            if (timestamp.length < 8) return timestamp
            timestamp = timestamp.replace(/-/g, '/')  // 有时 - 不兼容，需要改成/
            return formatDate(new Date(timestamp).getTime(), format, 'ms')
        } catch (e) { console.warn(e) }
    }

    // 没有横杠形式 20190101
    if (timestamp.length == 8) {
        return timestamp.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
    }

    // php的时间戳是以秒为单位，js是以毫秒为单位
    let d = new Date(timestampType == 's' ? timestamp * 1000 : timestamp)

    let time = {
        y: d.getFullYear(),
        yy: String(d.getFullYear()).substring(2),  // 短的
        m: addZero(d.getMonth() + 1),
        mm: d.getMonth() + 1,
        d: addZero(d.getDate()),
        dd: d.getDate(),
        h: addZero(d.getHours()),
        i: addZero(d.getMinutes()),
        s: addZero(d.getSeconds())
    }

    // 返回数字：周几
    if (format == 'week') {
        return dateToDay(`${time.y}/${time.m}/${time.d}`)
    }

    // 返回中文：周几
    if (format == 'week_cn') {
        const weeks = '日一二三四五六七'
        return weeks[dateToDay(`${time.y}/${time.m}/${time.d}`)]
    }

    try {
        let formatArr = /^\w+$/.test(format) ? format.split('') : format.split(/\b/)
        return formatArr.map(f => /\w/.test(f) ? time[f] : f).join('')
    } catch (e) {
        console.error('params format is need same as "yy-mm-dd hh:mm:ss"')
    }

}


function getDaysCount(timestamp) {
    const date = new Date(timestamp)
    date.setMonth(date.getMonth() + 1);
    date.setDate(0)
    return date.getDate();
}

function normalizeDate(date) {
    if (/NaN/.test(date)) {
        return new Date().getTime()
    }

    // 2019-03-01 但是不是2019-03-23T03:21:00.691Z 或 Sat Mar 23 2019 11:27:52 GMT+0800 (中国标准时间)
    if (/-/.test(date) && !/T/.test(date)) {
        date = date.replace(/-/g, '/');
    }
    // 如果是 2019/03 格式，修改为2019/03/01形式
    if (/^\d{4}[\s\S]?\d{1,2}$/.test(date)) {
        return date + '/01'
    }
    return date
}



/**
 * 获取日期区间内的月份
 * 如 2019-03 到 2019-05 返回数组 ['2019-03','2019-04','2019-05']
 */
function rangeYMArray(startTime = '', endTime = '') {
    const reg = /[-\/]/
    const [startY, startM] = startTime.split(reg)
    const [endY, endM] = endTime.split(reg)
    const arr = []

    for (let i = startY; i <= endY; i++) {
        const start = i == startY ? startM : 1
        const end = i < endY ? 12 : endM
        for (let j = start; j <= end; j++) {
            arr.push(i + '-' + addZero(j))
        }
    }
    return arr
}

/**
 * 返回日期各种格式化的对象
 * @param {日期转换} date和可传入Date()的格式一致
 */
export function datejs(date = new Date().getTime()) {
    // 处理兼容性
    date = new Date(normalizeDate(date))
    const timestamp = date.getTime()

    return {
        timestamp,   // 毫秒
        year: date.getFullYear().toString(),
        month: addZero(date.getMonth() + 1).toString(),
        date: date.getDate().toString(),
        day: date.getDay(),
        daysCount: getDaysCount(timestamp),  // 这里要防止date被重写
        day_cn: '日一二三四五六'[date.getDay()],
        ymd: formatDate(timestamp, 'y-m-d', 'ms'),
        ymdhi: formatDate(timestamp, 'y-m-d h:i', 'ms'),
        ymdhis: formatDate(timestamp, 'y-m-d h:i:s', 'ms'),
        ym: formatDate(timestamp, 'y-m', 'ms'),
        md: formatDate(timestamp, 'm-d', 'ms'),
        getRelativeMonth(relative) {
            return getRelativeMonth(timestamp, relative)
        },
        getRelativeMinutes(relative) {
            return getRelativeMinutes(timestamp, relative)
        },
        getRelativeDate: function (relative) {
            return getRelativeDate(timestamp, relative)
        },
        format(format) {
            return formatDate(timestamp, format, 'ms')
        },
        formatWorkDate() {
            return formatWorkDate.bind(null, timestamp)
        },
        rangeYMArray
    }
}
