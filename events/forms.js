$(document).ready(function(){
    console.log("This is Forms Event")
    // Focus, Blur, Change, Select, Submit
    $("#textbox,#textbox2").focus(function(){
        $(this).css('background-color','lightblue')
    })
    // blur Event
    $("#textbox,#textbox2").blur(function(){
        $(this).css('background-color','')
    })
    // Change Event
    $("#myselect,#mycheck").change(function(){
        $(this).css('background-color','pink')
        $("#myp").html($(this).val())
        $("body").css("background-color","lightblue")
    })
    // Select Event
    $("#textbox,#textbox2").select(function(){
        $(this).css('background-color','lime')
    })
    // Submit Event
    $("#myform").submit(function(){
        alert("This Form is Submitted")
    })
})