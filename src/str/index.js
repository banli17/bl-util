/**
 * 将名字隐藏为 *
 * @param str
 * @returns {string}
 */
export const hideString = (str = '', full = false) => {
    if (typeof str !== 'string') {
        console.warn(`hideString: not a string${str}`)
        return
    }

    if (full) {
        return str.replace(/^(.+)(.)$/, (a, b, c) => {
            return '*'.repeat(b.length) + c
        })
    }

    return '*' + str.toString().charAt(str.length - 1)
}