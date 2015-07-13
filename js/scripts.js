$(document).ready(function(){
    var width = $(this).width();
    $('p.preview').each(function(){
        var preview = this.textContent;
        var size = 200;
        if ((width >= 900) && (preview.length > size)){
            result = (preview.slice(0, size)+'...');
            $(this).text(result);
        }
    });

    if ((width >= 900) && (width < 1199)){
        var secondnews = $("div.news-items div.news-item:odd");
        $('<div class="separator"></div>').insertAfter(secondnews);
    }

    if (width >= 1200){
        var thirdnews = $("div.news-items div.news-item:nth-child(3n)");
        $('<div class="separator"></div>').insertAfter(thirdnews);
    }

});