/*
* 可以自己找不同的loading图传入组件
* imagePath在main.js注册时候传入的loading动图
* 如：'./static/image/loading.gif'
* */
const install = ( Vue, imagePath ) => {
  Vue.$loading = Vue.prototype.$loading = {
    //loading状态显示方法
    show(){
      let loadingBox = document.getElementById('loading-box');
      //先判断是否有遮罩层，如果有直接插入loading图，没有则先插入遮罩层
      if (loadingBox) {
        loadingBox.style.display = 'flex';
        loadingBox.innerHTML = `
          <img src=${ imagePath } alt="">
        `;
      } else {
        let box = document.createElement('div');
        box.id = 'loading-box';
        document.getElementById('app').appendChild(box);
        loadingBox = document.getElementById('loading-box');
        if (loadingBox) {
          loadingBox.style.display = 'flex';
          loadingBox.innerHTML = `
          <img src=${ imagePath } alt="">
        `;
        }
      }
    },
    //loading状态隐藏方法
    hide(){
      let loadingBox = document.getElementById('loading-box');
      if (loadingBox) {
        loadingBox.parentNode.removeChild(loadingBox);
      }
    }
  };
};
/*
* 注：对外暴露的函数名必须为install,当用Vue.use全局引用注册的时候会默认调用install方法
* 也可以写成
* const Loading = {
*  install: (Vue, imagePath)=>{
*    Vue.$loading = Vue.prototype.$loading = {
*      //......
*    }
*   }
* };
* export default {
*   Loading
* }
* */
export default {
  install
}
