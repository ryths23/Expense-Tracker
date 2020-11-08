$("button").on("click",function(){
    var option=$('#options').find(":selected").text();
    var inputs=document.querySelectorAll("input");
    var spent=(inputs[0].value);
    var date=(inputs[1].value);
    var amount=(inputs[2].value);
    $("table").append("<tr><td>"+option+"</td><td>"+spent+"</td><td>"+date+"</td><td>"+amount+"</td></tr>");
});
