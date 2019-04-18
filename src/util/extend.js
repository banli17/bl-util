import { isObject, isArray } from './type'
function allKeys(obj) {
    if (obj == null) return []
    if (isObject(obj)) {
        return Object.keys(obj)
    }
    if (isArray(obj)) {
        return obj
    }
}

function createAssigner(keyFunc) {
    return function (obj) {
        const len = arguments.length
        if (len < 2) return obj

        for (let index = 1; index < len; index++) {
            const source = arguments[index]
            const keys = allKeys(source)
            for (let i = 0, klen = keys.length; i < klen; i++) {
                const key = keys[i]
                obj[key] = source[key]
            }
        }
    }
}

export const extend = createAssigner(allKeys)
