/**
 * 将序列化字符串转成对象
 * @param str
 *
 * '?a=1&b=2' -> {a: "1", b: "2"}
 * 'fdaf?a=1&b=2' -> {fdaf?a: "1", b: "2"}
 */
export const parse = (str) => {
    const obj = {}
    try {
        const params = new URLSearchParams(str)
        for (let key of params) {
            obj[key[0]] = key[1]
        }
    } catch (e) {
        const reg = /([^=&?#]*)=([^=&?#]*)/g
        str.replace(reg, function () {
            obj[arguments[1]] = arguments[2]
        })
    }

    return obj
}

