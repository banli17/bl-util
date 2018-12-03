import {md5} from './src/md5'
import {currency} from './src/currency'
import * as datefn from './src/date'
import * as strfn from './src/str'
import * as pinyin from './src/pinyin'
import * as type from './src/util/type'

export const blUtil = {
    ...datefn,
    ...strfn,
    ...pinyin,
    ...type,
    currency,
    md5,
    /**
     * 将 byte 转成 kb 或 Mb
     * @param byte 字节长度
     * @returns {string} mb或kb
     */
    covertByte(byte) {
        let k = Math.floor(byte / 1024)
        let m = Math.floor(byte / 1024 / 1024)
        return k < 1024 ? (k + 'kb') : (m + 'mb')
    },
    validNoEmpty(value) {
        if (/^\s*$/.test(value) || !value) {
            return false
        }
        return true
    },
    /**
     * 表单验证方法
     * [
     *   {
     *      name: 'phone',
     *      value: '17607055128',
     *      type: 'phone'
     *   },
     *   {
     *      name: 'idcard',
     *      value: '17607055128',
     *      type: 'idcard'
     *   }
     * ]
     */
    validForm(fields, tip) {
        console.log('value', fields)
        for (let i = 0; i < fields.length; i++) {
            let {regExp, type, value, title, required} = fields[i]


            // 默认必填，如果指定非必填则跳过
            if (typeof required == 'boolean' && !required) {
                continue
            }

            if (regExp) {
                if (!regExp.test(value)) {
                    tip(`${title}格式不正确`)
                    return false
                }
            }

            // 如果是base64,说明是默认图片
            if (type === 'image') {
                console.log('image', /data:image/.test(value))
                if (/data:image/.test(value)) {
                    tip(`请输入${title}`)
                    return false
                }
            }

            // 验证是否有值
            if (/^\s*$/.test(value) || value == null) {
                tip(`请输入${title}`)
                return false
            }

            // 验证值的有效性
            if (type === 'phone') {
                if (!/^(\d{11}|\d{3}\s\d{4}\s\d{4})$/.test(value)) {
                    tip(`${title}格式不正确`)
                    return false
                }
            }

            if (type === 'password') {
                if (!(value.length > 3 && value.length < 15)) {
                    tip(`${title}长度大于3个字符，小于15个字符`)
                    return false
                }
            }

            if (type === 'city') {
                if (!value[0]) {
                    tip(`请输入${title}`)
                    return false
                }
            }
        }

        return true
    },
    /**
     * 分享
     */
    toCamelCase(str) {
        return str.charAt(0) + str.substring(1).replace(/[-_](\w)/g, (a, b) => {
            return b.toUpperCase()
        })
    },
    isArray(obj) {
        try {
            return Object.prototype.toString.call(obj) === '[object Array]'
        } catch (e) {
            return false
        }
    },
    // 比较2个数据是否相等, 包含基本类型、数组
    isAllRequal(o1, o2) {
        try {
            return o1.toString() === o2.toString()
        } catch (e) {
            return false
        }
    },
    isEmptyObject(obj) {
        try {
            return !Object.keys(obj).length
        } catch (e) {
            return false
        }
    },
    /**
     * 判断一个对象是否有某个属性
     * 比如 obj: [{a: 1}]， hasProp(obj[0], 'a')
     */
    hasProp(obj, prop) {
        try {
            return obj.hasOwnProperty(prop)
        } catch (e) {
            return false
        }
    },
    arrayToObject(ary, key) {
        let res = {}
        ary.map(item => {
            res[item[key]] = item
        })
        return res
    }
}


