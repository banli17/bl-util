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
    if (isString(date)) {
        res = new Date(date.replace(/(\d{4}).*(\d{2}).*(\d{2})/g, '$1/$2/$3'))
    } else {
        res = date
    }
    return res.getTime() / 1000
}

export const addZero = (i) => {
    return i < 10 ? ('0' + i) : i
}

/**
 * 将时间戳等转成 'yy-mm-dd hh:mm:ss' 等格式
 * @param timestampType: s秒 ms毫秒，默认是s
 * @param type: 格式
 *  - yy-mm-dd hh:mm:ss
 *  - mm-dd hh:mm
 * @returns {string} 返回如2018-10-11 08:08:08
 */
export const formatDate = (timestamp = new Date().getTime(), format = 'yy-mm-dd hh:mm:ss', timestampType = 's') => {
    console.log('timestampType', timestampType)
    // php的时间戳是以秒为单位，js是以毫秒为单位
    let d = new Date(timestampType == 's' ? timestamp * 1000 : timestamp)

    let time = {
        yy: d.getFullYear(),
        mm0: addZero(d.getMonth() + 1),
        dd: addZero(d.getDate()),
        hh: addZero(d.getHours()),
        mm: addZero(d.getMinutes()),
        ss: addZero(d.getSeconds())
    }

    try {
        let formatArr = format.split(/\b/)
        return formatArr.map((f, i) => {
            // 如果mm前有yy或者后面有dd，则返回mm0
            if (formatArr[i - 2] == 'yy' || formatArr[i + 2] == 'dd') {
                return time[f + '0']
            }
            if (/\w/.test(f)) {
                return time[f]
            }
            return f
        }).join('')
    } catch (e) {
        console.error('params format is need same as "yy-mm-dd hh:mm:ss"')
    }

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
export const dateToDay = (date) => {
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

/**
 * 根据差额获取日期，比如
 * @param date
 */
export const getRelativeDate = (date, n) => {
    return formatDate({
        timestamp: (new Date(new Date(date.replace(/-/g, '/')).getTime() + n * 24 * 60 * 60 * 1000)) / 1000,
        type: 'd'
    })
}

