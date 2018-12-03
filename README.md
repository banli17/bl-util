# 项目开发中的常用方法工具库

## 安装

```
npm install bl-util --save-dev
```

## API

- [url链接](#url链接)
- [date日期](#Date日期)

### url链接

```javascript
var str = 'name=zs&age=12';
var strObj = parse(str);  // {name:'zs',age:12}
```

### Date日期

- **util.formatDate(timestamp, format, timestampType)**  格式化时间戳
    - timestamp: 时间戳，默认单位为秒
    - format: 转换的格式,默认为`yy-mm-dd hh:mm:ss`
    - timestampType:时间戳格式，默认是's'，可选值：`s|ms` 

```javascript
formatDate(1514822400)  // 2018-01-02 00:00:00
formatDate(1514822400, 'yy-mm-dd')     // 2018-01-02
formatDate(1514822400, 'mm-dd hh:mm')) // 01-02 00:00
formatDate(1514822400, 'm月d日')) //1月2日
```

- **util.dateToRemain(seconds)**  将秒转成剩余时间

```javascript
util.dateToRemain(100)  // 1分40秒
util.dateToRemain(3600)  // 1时1秒
```

### 字符串方法

- util.hideString() 隐藏文字

```javascript
util.hideString('张三')  // *三
util.hideString('王大锤')  // *锤
util.hideString('王大锤',true)  // **锤
```
