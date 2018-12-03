export const currency = function (money) {
    money = `${money}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // 补齐00
    if (!money.includes('.')) {
        money += '.00'
    }

    return `￥${money}`
}