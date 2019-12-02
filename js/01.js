 
function toTop(){
    //位移动画: 3要素
    //总距离
    var scrollTop=
      document.body.scrollTop||document.documentElement.scrollTop;
    //总时间
    var dura=400;
    //总步数
    var steps=20;
    //可以求出
    //每一步走多远=总距离/总步数
    var step=scrollTop/steps;
    //每一步间隔多长时间=总时间/总步数
    //interval不能小于5ms
    var interval=dura/steps;
    //设计定时器: 每隔?时间走多远
    var timer=setInterval(function(){
      window.scrollBy(0,-step)
      //每移动一次，步数-1
      steps--;
      //如果全部步数都移动完
      if(steps==0){
        //就停止定时器
        clearInterval(timer);
      }
    },interval)
  }

window.onscroll=function () {
  var scrollTop=
      document.body.scrollTop||document.documentElement.scrollTop;
      if(scrollTop>=450){
        this.document.getElementById("toTop").style.display="block"
      }else{
        this.document.getElementById("toTop").style.display="none"
      }
}
