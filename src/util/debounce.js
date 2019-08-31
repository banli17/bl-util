export const debounce = (callback, time = 500) => {
    let timer = null

    return (...args) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            callback && callback(...args)
        }, time)
    }
}