$(document).ready(function() {  
    $(function load_header(){
        $("header").load("header.html");
    });

    $(function load_footer(){
        $("footer").load("footer.html");
    });

    if ($(window).width() > 900) {
        var leftHeight = $('.header-content-2').height();
        $('.header-content-1').css({'height':leftHeight});
    } 
    $(document).ready(function() {
        var leftHeight = $('.header-content-2').height();
        $('.header-content-2').css({'height':leftHeight});
    });

    $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
        for (var i = 0; i < 4; i++) {
            $('#list').append("<li>" + data[i].title +  "</li"); 
        } 
    }); 

    // services page
    $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
      var first = (data.length / 5) / 4;
      var sec = first * 2;
      var third = first * 3;

      $.each(data, function(key) {
            if (key < first ) {
                $('#graphic-list').append("<li><p><strong>" + data[key].id + ". Title: " + data[key].title + "</strong></p><p>" + data[key].body + "</p></li");  
            }
            else if (key < sec ) {
                $('#design-list').append("<li><p><strong>" + data[key].id + ". Title: " + data[key].title + "</strong></p><p>" + data[key].body + "</p></li");  
            }
            else if (key < third ) {
                $('#logo-list').append("<li><p><strong>" + data[key].id + ". Title: " + data[key].title + "</strong></p><p>" + data[key].body + "</p></li");    
            }
            else if (key >= third && key < (data.length / 5)) {
                $('#website-list').append("<li><p><strong>" + data[key].id + ". Title: " + data[key].title + "</strong></p><p>" + data[key].body + "</p></li");  
            }
        }); 
    });


    $('a').on('click', function(e) { 
        var el = $( e.target.getAttribute('href') );
        var elOffset = el.offset().top;
        var elHeight = el.height();
        var windowHeight = $(window).height();
        var offset;
      
        if (elHeight < windowHeight) {
          offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
        }
        else {
          offset = elOffset;
        }
      
        $.smoothScroll({ speed: 700 }, offset);
        return false;
      });

        // direct browser to top right away
    if (window.location.hash)
        scroll(0,0);
    // takes care of some browsers issue
    setTimeout(function(){scroll(0,0);},1);


    $(function(){
    //your current click function
    $('.scroll').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top + 'px'
        },1000,'swing');
    });

    // if we have anchor on the url (calling from other page)
    if(window.location.hash){
        // smooth scroll to the anchor id
        $('html,body').animate({
            scrollTop:$(window.location.hash).offset().top + 'px'
            },1000,'swing');
        }
    });


});