(function ($){
    $.fn.drop_down = function(prop){
        var options = $.extend({
            width : '14%',
            color : '#fff',
            source:'',
            top: '10%'
        },prop);
        
        var btn = this;
        
        this.focusout(function (e){
            $('.dropDown').fadeOut("medium");
        });
        return this.focus(function (e){
               removeUl();
               addUl();
               addSource();
               addStyles();
        });
        
        function removeUl()
        {
            if(typeof options.selector === 'undefined')
            {
                $('.dropDown').remove();
            }
            else
            {
                $('#'+options.selector).remove();
            }
        }
        
        function addStyles(){
            $('.dropDown').css({
                'background-clip':'padding-box',
                'background-color': options.color,
                'border': '1px solid rgba(0, 0, 0, 0.15)',
                'border-radius':'4px',
                'box-shadow': '0 6px 12px rgba(0, 0, 0, 0.2)',
                'left':'0',
                'list-style':'outside none none',
                'min-width':'160px',
                'padding':'1px 3px',
                'position':'absolute',
                'right':'0',
                'text-align':'left',
                'top': options.top,
                'width': options.width,
                'z-index':'1001'
            });
            
            $('#'+options.selector +' > li > a').css({
                'clear': 'both',
                'color': '#333',
                'display': 'block',
                'font-weight': '400',
                'line-height': '1.42857',
                'padding': '3px 20px',
                'text-align': 'left !important',
                'text-decoration': 'none',
                'white-space': 'nowrap'
            });
            
            
            $('#'+options.selector +' > li').css({
                'cursor': 'pointer'
            });
            
            $('#'+options.selector +' > li').hover(function (){
                $(this).css({
                        'background-color': '#f2f2f2',
                        'border':'medium none !important',
                });
                
            },function (){
                $(this).css({
                        'background-color': 'white',
                        'border':'none',
                });
            });
        }
        
        function addUl(){
            var ul;
            if(typeof options.selector === 'undefined')
                {
                    ul = $('<ul class="dropDown"></ul>');
                }
             else
                {
                    ul = $('<ul class="dropDown"                     id="'+options.selector+'"></ul>');
                } 
            $(ul).appendTo('body');
        }
        
        function addSource(){            
            $.each(options.source, function (i,value){
                var a = $('<a href="#">'+value+'</a>');
                var s = $('<li></li>');
                var ul;
                if(typeof options.selector === 'undefined')
                {                    
                    ul = $('.dropDown');
                }
                else
                {
                    ul = $('#'+options.selector);
                }
                getaText(a,btn);
                $(a).appendTo(s);
                $(s).appendTo(ul);
            });
        }
        
        function getaText(a,btn)
        {
           a.click(function(){ aClick(a,btn); });
        }
        
        function aClick(a)
        {
           $(btn).attr('value',a.text());
        }
        
    };
})(jQuery);


//$(document).ready(function(){
//    $('input').drop_down({
   //     source:['asd','sd'],
  //      selector :'pr'
 //   });
//});