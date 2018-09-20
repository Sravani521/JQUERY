alert("jquerycode is running");

$("body").css("background", "orange");
$(".header").css("color", "white");

$(document).ready(FirstFun);
$(document).ready(secondfun);


function FirstFun()
{
    $("#head").css("background", "cyan");
}


function secondfun()
{
    $(".header").css("background", "violet");
    //paragraph();
}

//function paragraph()
//{
//    alert($(".header").siblings());
//}

//$(document).ready
//    (function ()
//{
//    $("p").click(function ()
//    {
//        $(this).hide();
//    }
//   )
//}
//)
console.log($(".header").siblings());
//$("div").fadeOut();

var myDiv = $("div");
myDiv.find("p");
myDiv.children("p");

$("div p");

$("div").find("p>strong");



