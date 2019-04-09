$(".menu-toggle").click(menuToggle);
$(function(){
    var reviews = $(".review-image");

    for(var a = 0; a<reviews.length; a++){
        $(reviews[a]).addClass("r-img-" + a);
        $(reviews[a]).nextAll(".review-text").addClass("r-txt-" + a);
        $(reviews[a]).nextAll(".review-age").addClass("r-age-" + a);
        
        reviews[a].addEventListener("click", OpenReview);

        CloseReview(reviews[a]);
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
        if($(this).hasClass("review-image-left")){
            $(this).removeClass("review-image-left");
            str = this.className;
            str = str.substring(str.length-1);
            $( ".r-age-" +str).addClass("invisible");
            //str = str.substring(str.length-18, str.length-17);
        }else{
            str = str.substring(str.length-1);
            $( ".r-age-" +str).removeClass("invisible");
            $(this).addClass("review-image-left");
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
        if($(elem).hasClass("review-image-left")){
            $(elem).removeClass("review-image-left");
            str = elem.className;
            str = str.substring(str.length-1);
            $( ".r-age-" +str).addClass("invisible");
            //str = str.substring(str.length-18, str.length-17);
        }else{
            str = str.substring(str.length-1);
            $( ".r-age-" +str).removeClass("invisible");
            $(elem).addClass("review-image-left");
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