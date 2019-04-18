/**
 * Function函数扩展
 */

function before(fn, beforeFn) {
    return function () {
        beforeFn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

function after(fn, afterFn) {
    return function () {
        let ret = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return ret
    }
}

