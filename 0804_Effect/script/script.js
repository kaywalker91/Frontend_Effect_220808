$(document).ready(function(){

    var stat = true;

    $(".box1").click(function(){
        $(this).hide();
    });

    $("#btn2").click(function(){
        if(stat){
            $("#box2").hide();
            stat = false;
        }else{
            $("#box2").show();
            stat = true;
        }
    });

    $("#btn3").click(function(){
        $("#box3").fadeOut(1000);
        $("#box3").fadeIn(1000);
        $("#box3").slideUp(1000);
        $("#box3").slideDown(1000);
        $("#box3").fadeOut();
        $("#box3").show(2000, function(){
            $(this).css("background-color", "green");
        });
    });

    $(".item_title").click(function(){
        $(this).next(".item_cont").slideToggle();
    });

});
