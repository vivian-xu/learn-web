$(document).ready(function(){
$(window).scroll(function(){
//滚动条发生滚动时，获取相应的值。
var topl = $(document).scrollTop();
var menu = $("#menu");   
var items = $("#content").find(".item");
var currentId = "";
            
items.each(function(){
    var m = $(this); 
    var itemtop = m.offset().top;
    console.log(itemtop+typeof(itemtop));
    // 这里不能写成 itemtop-200px 报错 identifier starts immediately after numeric literal!
    if(topl > itemtop - 200 ){
    currentId = "#" + m.attr("id");                  
    }else{ 
    return false;
}
});
            
//导航菜单在滚动条滚动的时候自动设置焦点
//给相应楼层的a 设置 current，取消其他链接的current
var currentLink = $("#menu").find(".current");
    if(currentId && currentLink.attr("href")!=currentId){
    currentLink.removeClass("current");
    menu.find("[href="+currentId+"]").addClass("current");
    }
    });  
})
     
