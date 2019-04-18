/**
 * 验证身份证格式
 * @param {} cardno 身份证号码
 */
export const isCardNo = (cardno) => {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!reg.test(cardno)) {
        return false
    }
    return true
}