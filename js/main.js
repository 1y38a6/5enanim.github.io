$(".menu-toggle").click(menuToggle);
$(function(){
    $(".mb-menu").slideToggle();

    // Струткура: кликабельный блок>эллементы
    var reviews = $(".review-listener");

    for(var a = 0; a<reviews.length; a++){
        $(reviews[a]).addClass("r-" + a);
        $(reviews[a]).find(".review-image").addClass("r-img-" + a);
        $(reviews[a]).find(".review-text").addClass("r-txt-" + a);
        $(reviews[a]).find(".review-age").addClass("r-age-" + a);
        
        reviews[a].addEventListener("click", OpenReview);

        CloseReview(reviews[a]);
    }


    // Блог

    var articles = $(".blog-listener");

    for(var a = 0; a<articles.length; a++){
        
        articles[a].addEventListener("click", OpenArticle);

        CloseArticle(articles[a]);
    }

    var sliders = $(".slider");
    for(var a = 0; a<sliders.length; a++){
        sliders[a].addEventListener("click", SlideToNext);
    }
});

window.onscroll = function() {
    if(window.scrollY > 40){
        if(!$(".menu-toggle").hasClass("fixed")){
            $(".menu-toggle").addClass("fixed");
        }
    }else{
        if($(".menu-toggle").hasClass("fixed")){
            $(".menu-toggle").removeClass("fixed");
        }
    }
    
}

function OpenReview(){
    
    if(screen.width > 768){
        return
    }
    var str = "";
    if(this.className != undefined){
        str = this.className;
        
        if($(this).find(".review-image").hasClass("review-image-left")){
            $(this).find(".review-image").removeClass("review-image-left");
            str = this.className;
            str = str.substring(str.length-1);
            $( ".r-age-" +str).addClass("invisible");
        }else{
            str = str.substring(str.length-1);
            $( ".r-age-" +str).removeClass("invisible");
            $(this).find(".review-image").addClass("review-image-left");
        }
    }
    
    $( ".r-txt-" +str).slideToggle( "slow" );
}

function CloseReview(elem){
    if(screen.width > 768){
        return
    }
    var str = "";
    if(elem.className != undefined){
        str = elem.className;
        if($(elem).find(".review-image").hasClass("review-image-left")){
            $(elem).find(".review-image").removeClass("review-image-left");
            str = elem.className;
            str = str.substring(str.length-1);
            $( ".r-age-" +str).addClass("invisible");
        }else{
            str = str.substring(str.length-1);
            $( ".r-age-" +str).removeClass("invisible");
            $(elem).find(".review-image").addClass("review-image-left");
        }
    }
    
    $( ".r-txt-" +str).slideToggle( "slow" );
}

function menuToggle(){
    if($(".line1").hasClass("line1-active")){
        $(".line1").removeClass("line1-active");
        $(".line2").removeClass("line2-active");
        $(".line3").removeClass("line2-active");
    }else{
        $(".line1").addClass("line1-active");
        $(".line2").addClass("line2-active");
        $(".line3").addClass("line2-active");
    }
    
    $(".mb-menu").slideToggle( "slow" );
}

function OpenArticle(){
    if(this.className != undefined){
        
        if($(this).find(".blog-image").hasClass("blog-image-deactive")){
            $(this).find(".blog-image").removeClass("blog-image-deactive");
            $(this).find(".blog-title").removeClass("blog-title-deactive");
        }else{
            $(this).find(".blog-title").addClass("blog-title-deactive");
            $(this).find(".blog-image").addClass("blog-image-deactive");
        }

        $(this).find(".blog-text").slideToggle( "slow" );
    }
}

function CloseArticle(elem){
    if(elem.className != undefined){
        
        if($(elem).find(".blog-image").hasClass("blog-image-deactive")){
            $(elem).find(".blog-image").removeClass("blog-image-deactive");
            $(elem).find(".blog-title").removeClass("blog-title-deactive");
        }else{
            $(elem).find(".blog-title").addClass("blog-title-deactive");
            $(elem).find(".blog-image").addClass("blog-image-deactive");
        }

        $(elem).find(".blog-text").slideToggle( "slow" );
    }
}

function SlideToNext(){
    var sections = $(this).nextAll("section");

    $('html, body').animate({
        scrollTop: $(sections[1]).offset().top
    }, 1000);
}