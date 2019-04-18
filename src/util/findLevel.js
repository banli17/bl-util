/**
 * 
 * @param {*} value 值
 * @param {*} levels 级别数组
 * @param {*} key 键
 * value: 15
 * levels:
 * [{
 *  full: 10
 * },{
 *  full: 20
 * }]
 * key: full
 */
export const findLevel = (value, levels, key) => {
    // 首先判断边界
    if (value < levels[0][key]) return -1
    if (value > levels[levels.length - 1][key]) return levels.length - 1

    // 可以改成二分法，找随机法
    let cur = 0
    let pos = 0
    while (levels[cur]) {
        let m = levels[cur][key]
        if (value == m) {
            break
        }
        if (value < m) {
            pos--
            break
        }
        if (value > m) {
            pos++
            cur++
        }
    }
    return pos
}
