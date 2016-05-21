$(function(){
    /*响应式*/
    var $navbread=$(".nav-bread");
    var $navbox=$(".nav-box");
    var $maxnav=$(".max-nav");
    $navbread.click(function(){
        $navbox.css({background:"#000"});
        $maxnav.slideToggle();
    });
    /*详情页的响应*/
    var $xqtitle=$("label");
    var $xqlist=$(".xq-list");
    //var flag=true;
    var clientW=document.documentElement.clientWidth;
    window.onresize=function(){
        clientW=document.documentElement.clientWidth;
    }
    $xqtitle.click(function(){
        if(clientW>768){
            return false;
        }
        else{
            $(this).next("ul").slideToggle();
        }
    })
    /*轮播图*/
    var $imgs=$(".banner-box li");
    var $imgw=$imgs.width();
    var $lis=$(".btn-lis li");
    $imgs.eq(0).css({left:0});
    var now=0;
    var next=0;
    var flag=true;
    var t=setInterval(wheel,3000);
    function wheel(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==$imgs.length){
            next=0;
        }
        $imgs.eq(next).css({left:$imgw});
        $imgs.eq(now).animate({left:-$imgw},600);
        $imgs.eq(next).animate({left:0},600,function(){
            flag=true;
        });
        $lis.removeClass("hot").eq(next).addClass("hot");
        now=next;
    }
    /*鼠标移上事件*/
    var $banner=$(".banner");
    $banner.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(wheel,3000);
    })
    /*轮播选项卡*/
    $lis.click(function(){
        var indexLis=$(this).index();
        if(now==indexLis||!flag){
            return;
        }
        flag=false;
        if(now>indexLis){
            $imgs.eq(indexLis).css({left:-$imgw});
            $imgs.eq(now).animate({left:$imgw},600);
        }
        if(now<indexLis){
            $imgs.eq(indexLis).css({left:$imgw});
            $imgs.eq(now).animate({left:-$imgw},600);
        }
        $imgs.eq(indexLis).animate({left:0},600,function(){
            flag=true;
        });
        $lis.removeClass("hot").eq(indexLis).addClass("hot");
        now=next=indexLis;
    })
    /*左右键*/
    var $rbtn=$(".btn-right");
    var $lbtn=$(".btn-left");
    $rbtn.click(function(){
        wheel();
    })
    $lbtn.click(function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=$imgs.length-1;
        }
        $imgs.eq(next).css({left:-$imgw});
        $imgs.eq(now).animate({left:$imgw},600);
        $imgs.eq(next).animate({left:0},600,function(){
            flag=true;
        });
        $lis.removeClass("hot").eq(next).addClass("hot");
        now=next;
    })




























})