        $(document).ready(function () {
            var menuoff = $("#menuclose");
            menuoff.bind("click", function(){
                $("#menulist").slideToggle(100, function(){
                    $("#menuclose").html()=="收起" ? $("#menuclose").html("展开") : $("#menuclose").html("收起");
                })
            
            })




            $(window).scroll(function () {
                var top = $(document).scrollTop();
                var menu = $("#menu");
                var items = $("#content").find(".item");
                var currentH = "";

/* 导航菜单实现在滚动条滚动的时候自动设置焦点 */
                
                for(var i=0; i<items.length; i++){
                var item = items[i];
                var item_top = item.offsetTop;
                
                if(items[1].offsetTop-200 > top) {
                currentH = "#item1";
                }
                else if( item_top-200 < top  ){
                currentH = "#"+item.id;
                }
                else {
                break;
                }
                }
                
                var menua = menu.find("a");
                /* 以下也可以这样写 */
                /*  var currentLink = menu.find(".current"); 
                 
                    if(currentH && currentLink.attr("href") != currentH){
                        currentLink.removeClass("current");
                        menu.find("[href=" + currentH + "]").addClass("current");
                    }
                 */
                menua.each(function (index) {
                var $this=$(this);
                if($this.class == "current" && $this.attr("href") == currentH){
                    pass;
                }
                else if($this.attr("href") == currentH ){  
                    $this.addClass("current");

                }
                else{
                    $this.removeClass("current");
                }

                });

                /* input 自动提醒 autocomplete 列表  */
                
                var arrItems = $("#content").find(".item");
                var arrItemsId = new Array();
                arrItems.each(function(index){
                
                arrItemsId.push($(this).attr("id"));
                
                });
                
                $("#txtSearch").autocomplete({
                    
                    minChars: 0,
                    source: arrItemsId,
                    formatItem: function (data, i, total) {
                        return data[0];
                    },     
                    formatMatch: function (data, i, total) {
                        return data[0];
                    },
                    formatResult: function (data) {
                        return data[0];
                    }
                        
                        
                        
                    });

            });

        });

