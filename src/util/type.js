const type = (o) => {
    return /\s(\w+)]/.exec(Object.prototype.toString.call(o))[1].toLowerCase()
}

export const isString = (o) => {
    return type(o) === 'string'
}

export const isArray = (o) => {
    return type(o) === 'array'
}

/**
 * 判断是否为数字，排除NaN
 * @param o
 * @returns {boolean}
 */
export const isNumber = (o) => {
    return type(Number(o)) === 'number' && !isNaN(o)
}

export const isPlainObject = (o) => {
    return type(o) === 'object' && !Object.keys(o).length
}

export const isPlainArray = (o) => {
    return type(o) === 'array' && !o.length
}
