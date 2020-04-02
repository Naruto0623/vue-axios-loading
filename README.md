# vue-axios-loading
> 全局loading插件

## Installing

```bash
$ npm install vue-axios-loading --save
```

## Useing
#### introduce in the main.js

```bash
import myLoading from '@/libs/loading'
//loading图存储目录，依据打包后dist文件夹层级结构设置相对路径
const src = './static/image/loading.gif';
Vue.use(myLoading, src);
```

## Invoking method 

```bash
this.$loading.show()
this.$loading.hide()
```
具体用法参见：https://juejin.im/post/5e8465c7f265da47a927e4c9

