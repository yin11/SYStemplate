/*
 * 侧边栏上下滑动
 * */
$(document).ready(function(){
    $(document).on("click",".onelevel-li>a",function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        $(this).parent().siblings().children(".submenu").slideUp();
        $(this).siblings(".submenu").slideToggle();
    }).on("click",".submenu li",function(){
        $(this).addClass("active").siblings().removeClass("active");
    }).on("click",".user-info",function(){
        $(".user-menu").slideToggle();
    });


    //在input file内容改变的时候触发事件
    /*$('.img-file').change(function(){
     var file = $(this).get(0).files[0],
     _this = $(this);

     //创建用来读取此文件的对象
     var reader = new FileReader();
     //使用该对象读取file文件
     reader.readAsDataURL(file);
     //读取文件成功后执行的方法函数
     reader.onload=function(e){
     //读取成功后返回的一个参数e，整个的一个进度事件
     console.log(e);
     //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
     //的base64编码格式的地址
     _this.parents(".upload-box").find('.upload-img img').get(0).src = e.target.result;
     }
     })*/


});


/*操作iframe,在父级弹出框*/
function showLayer(json){
    $(window.top.document).find("body").append(json.src);
    layer.open({
        type: json.type,
        skin: json.skin, //样式类名
        closeBtn: json.closeBtn, //不显示关闭按钮
        shadeClose: true, //开启遮罩关闭
        content: json.content,
        title:json.title,
        area: json.area,
        btn: json.btn,
        yes: function(index, layero){
            json.yes(index, layer) //按钮【按钮一】的回调
        },
        end:function(index, layero){
            json.end(index, layer) || function(){} ;
        }
    });
}

/*文本提示*/
function showLayerMsg(content,callback){
    layer.msg(content,function(){
        callback() || function(){} ;
    })
}


/*五星评分等级*/
function starScore(callback){
    var level_num,
        _hover = true;
    $(".star-item").hover(function(e){
        if(_hover){
            var _num = $(this).index(),
                _parent = $(this).parents(".star");
            level_num = _parent.attr("data-level");
            _parent.find(".star-item").removeClass("star-on");
            for (var i = 0; i <= _num; i++) {
                _parent.find(".star-item").eq(i).addClass("star-on");
            }
        }
    },function(e){
        if(_hover){
            var _num = $(this).index(),
                _parent = $(this).parents(".star");
            level_num = _parent.attr("data-level")-1;
            console.log(level_num)
            _parent.find(".star-item").removeClass("star-on");
            for (var i = 0; i <= level_num; i++) {
                _parent.find(".star-item").eq(i).addClass("star-on");
            }
        }

    }).click(function(){
        _hover = false;
        var _num = $(this).index();
        var _parent = $(this).parents(".star");
        _parent.attr("data-level",_num+1);
        _parent.find(".star-item").removeClass("star-on");
        for (var i = 0; i <= _num; i++) {
            _parent.find(".star-item").eq(i).addClass("star-on");
        }
        callback(_parent.attr("data-ueseid"),_num+1);
        setTimeout(function(){
            _hover = true;
        },100);
    })
}



(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth >= 1920){
                docEl.style.zoom = clientWidth/1920;
            }else if(clientWidth >= 1024 && clientWidth < 1920){
                docEl.style.zoom = clientWidth/1920;
            }else {
                docEl.style.zoom = 1024/1920;
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);