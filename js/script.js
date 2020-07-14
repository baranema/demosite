$(document).ready(function() {  
    $(document).ready(function() {
        var leftHeight = $('.header-content-2').height();
        $('.header-content-1').css({'height':leftHeight});
    });

    $(document).ready(function() {
        var leftHeight = $('.header-content-2').height();
        $('.header-content-2').css({'height':leftHeight});
    });

    $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
        for (var i = 0; i < 4; i++) {
            $('#list').append("<li>" + data[i].title +  "</li"); 
        } 
    }); 
});