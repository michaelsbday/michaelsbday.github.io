$(document).ready(function(){
    $('p').hide();
    var flag = 1;
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn();
        $(this).css(
            "box-shadow" , "5px 5px 5px #888"
        );
    }).mouseout(function(){
        $(this).find("[id^='detail-']").stop().fadeOut()
        $(this).stop().css(
            "box-shadow" , "0px 0px 0px #888"
        );
    })
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn()
    }).mouseout(function(){
        $(this).find("img[id^='img-]").stop().fadeIn()
        $(this).find("[id^='detail-']").stop().fadeOut()
    })

    // Spesifikasikan per div!!
    $("#spotify").click(function(){
        var url = "https://open.spotify.com/playlist/5Ku71TNCBP6QN5cnpbBBmX";
        window.open(url, '_blank');
    })

    $("#instagram").click(function(){
        var url = "https://www.instagram.com/michaels22memories/";
        window.open(url, '_blank');
    })

    $("#animals").click(function(){
        var url = "https://www.pinterest.com/jessaurellia/cotton-balls/";
        window.open(url, '_blank');
    })

    $("#places").click(function(){
        var url = "https://www.pinterest.com/jessaurellia/to-go/";
        window.open(url, '_blank');
    })

    $("#pickuplines").click(function(){
        var url = "https://quizlet.com/id/614434815/pick-up-lines-flash-cards/";
        window.open(url, '_blank');
    })

})