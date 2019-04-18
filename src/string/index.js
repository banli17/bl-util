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



export function toCamelCase(str = '') {
    return str.replace(/(?:_)([a-zA-Z])/g, (a, b) => {
        return b.toUpperCase()
    })
}

export function toPascalCase(str = '') {
    return str.replace(/(?:\b|_)([a-zA-Z])/g, (a, b) => {
        return b.toUpperCase()
    })
}


export function charCodeAt(str = '', index = 0) {
    let chars = []
    for (let i of str) {
        chars.push(str.codePointAt(i).toString(16))
    }
    return chars[index]
}