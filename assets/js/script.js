/*$("form").on("submit", (event) => {
    event.preventDefault();
    var ser1 = $("form").serialize();
    var ser2 = $("form").serializeArray();
    console.log(ser1);
    console.log(ser2);
});*/

$("form").on("submit", (event) => {
    event.preventDefault();
});

$("#sms").hide();
$("#notification").hide();

