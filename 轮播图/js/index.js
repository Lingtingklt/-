// 首先可以将整体封装成一个匿名自运行函数
(function () { 
    // 规定每张图片出狱的位置和状态
var states = [{
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 134,
        opac: 0.2
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 59,
        left: 0,
        opac: 0.5
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 24,
        left: 110,
        opac: 0.7
    },
    {
        ZIndex: 4,
        width: 224,
        height: 288,
        top: 0,
        left: 263,
        opac: 1
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 24,
        left: 470,
        opac: 0.7
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 59,
        left: 620,
        opac: 0.5
    },
    {
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 500,
        opac: 0.2
    }
]
// 将状态和位置赋给li
var lis = $('#box li');
console.log(lis)

function move() {
    lis.each(function (i, ele) {
        var state = states[i]
        // $(ele).css({
        //     "z-index":'states.Zindex',
        //     "width":states.width,
        //     "height":states.height,
        //     "top":states.top,
        //     "left":states.left,
        //     "opacity":states.opacity
        // })
        $(ele).css('z-index', state.ZIndex).finish().animate(state,1000).find("img").css("opacity", state.opac)
    })
}
move()

function next() {
    //    原理:把数组红的最后一个元素移动到数组中的第一个元素
    // 删除最后一个元素,但是可以将其元素取出来
    states.unshift(states.pop())
    move()
  }

  function prev() {
      //    原理:把数组的第一个元素移动到最后一位
states.push(states.shift());
move()
    }

// 下一张

$(".next").click(function () {
    next()
})
// 上一张
$(".prev").click(function () {
prev()
})


// 自动轮播,定时器
var time=setInterval(next,1000);


// 鼠标移动到上一张下一张和每张图片的时候停止轮播
$("section").add("li").hover(function () {
    // 停止定时器
    clearInterval(time)
  },function () { 
    //   继续轮播
   setInterval(next,1000);
   })

//    封装成插件,能够使得只要使用这个插件就能被重复使用效果,或产生什么样的问题?
// 在插件中最好不要使用id,插件是为了能够被重复使用,在一个页面上可能会冲突,并且id具有唯一的特性.
// 变量命名和方法的命名:states time move()  用户使用这个插件的时候可能还会引入自己创建的文件,
// 也有这样的命名,那么就会产生冲突
// 3.标签class的值的问题:prev  next 这些class名太大众化了,大多数编写者都会使用这样的命名,势必会造成冲突
// 4.插件的文件命名问题:index.js  index.css,这些明敏也是比较大众化的,比如:jQuery.slide.js
 })()

//  变量的作用域问题
// 1.全局域[window] 2.函数域[function]
// 2.全局域从页面打开之后到页面关闭之前始终都是存在的
// 2.函数域:存在函数被调用的一瞬间,(也不一定,考虑闭包的存在)
// 闭包作用:可以保留函数的作用域,所以move可以使用当前自运行函数中的states
// 闭包产生的必要条件:函数里面包函数(内层的函数摇使用外层函数的变量)

// 全局变量会产生闭包?
// 不会,因为全局变量存在全局域中


