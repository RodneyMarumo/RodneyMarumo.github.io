$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 800;  // How many characters are shown by default
	var showChar1 = 150;
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.p1').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
	
	    $('.text-5').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar1) {
 
            var c = content.substr(0, showChar1);
            var h = content.substr(showChar1, content.length - showChar1);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});