$(document).ready(function(){
    var expand = $(".expand");

    expand.click(function(){
        $(this).parent().next().slideDown(1000);
        $(this).hide();
    });

    var collapse = $(".collapse");

    collapse.click(function(){
        var toHide = $(this).closest(".opsirno").slideUp(1000);
        var bt = $(".expand", $(this).closest(".usluge"));
        bt.show();        
    });});


