# 项目开发中的常用方法工具库

## 安装

```
npm install bl-util --save-dev
```

## 方法

### url方法

```javascript
var str = 'name=zs&age=12';
var strObj = parse(str);  // {name:'zs',age:12}
```

### 时间方法

- util.dateToRemain(seconds)  将秒转成剩余时间

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
