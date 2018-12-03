/**
 * Created by qiepeipei on 2018/10/16.
 */
import pinyin from 'pinyin';

//将汉字转为拼音
export const chinese_to_pinyin = (str) => {
    return pinyin(str,{style: pinyin.STYLE_NORMAL});
};

//将汉字转拼音取首字母大写
export const chinese_to_pinyin_big = (str) => {
    let one_str = str.substr(0,1);
    let one_py_arr = chinese_to_pinyin(one_str);
    let one_py = one_py_arr[0][0];
    if(one_py.length > 0){
        one_py = one_py.substr(0,1);
        return one_py.toUpperCase();
    }else{
        return "";
    }
};

//给好友列表添加首字母大写参数
export const add_friend_list_big = (friend_list) => {
    let new_list = [];
    for(let friend_obj of friend_list){
        if(friend_obj){
            let obj = {...friend_obj};
            obj.belong = chinese_to_pinyin_big(obj.nick);
            new_list.push(obj);
        }
    }
    //正序排序
    new_list.sort(function(a,b){
        return a.belong.charCodeAt() - b.belong.charCodeAt();
    });

    return new_list;
};
