$(document).ready(function () {

    $("button").click(function () {
        $("#p01").fadeOut();
        $("#p02").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });


    $("#btnsubmit").click(function () {
       alert("button clicked");
        $("form").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
        alert("button clicked");
        $("txtusername").append("<b>Appended text</b>");
        });
    $("#btnchangetext").click(function () {
        $("#p01").text("normal text").slideDown();

    });

    $("#btnchangehtml").click(function () {

        $("#p02").html("<p>html text</p>")
    });


    $("btnremove").click(function () {
        $("#div1").remove();
    });

    $("btnempty").click(function () {
        $("#div2").empty();
    })


   
});

$(document).ready(function () {
    $("#btncheck").click(function () {
        var fname = $("#txtfname").val();
        var lname = $("#txtlname").val();

        if ((fname == "") && (lname == "")) {
            alert("invalid credentials");
        }
        })

});

   





    $("#p01").focus(function () {
        $(this).css("background-color", "purple");
    });


    

    //$("#btnsubmit").click(function () {
    //    $("#txtusername").append("<h1>sravani</h1>");
    //}) 





     





$(document).ready(MouseEnterEvent);
function MouseEnterEvent()
{
    $("#txtusername").mouseenter(function () {
        alert("plz entr user name");
    });
    
}





