# 项目开发中的常用方法工具库

![travis](https://api.travis-ci.org/banli17/bl-util.svg?branch=master)

## 安装

```
npm install bl-util --save-dev
```

## API

- [url链接](#url链接)
- [date日期](#Date日期)

### url链接

```
var str = 'name=zs&age=12';
var strObj = parse(str);  // {name:'zs',age:12}
```

### Date日期

**util.datejs(date)**

- `date` <Date|timestamp|dateString> 参数与new Date()参数一致
- `returns`: <Object>


### 字符串方法

- util.hideString() 隐藏文字

```js
util.hideString('张三')  // *三
util.hideString('王大锤')  // *锤
util.hideString('王大锤',true)  // **锤
```
