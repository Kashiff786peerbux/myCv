

    


$(document).ready(function(){
    $("nav li a").click(function(){
        myId = $(this).attr("id");
        $(" i.mainIcon, .icon_label").css("color", "gray");
        $("i.mainIcon, .icon_label").removeClass("active");
        $(this).children().addClass("active");
        if(myId == "aboutme"){
            color = "rgb(18, 107, 129)";
            $("#myLogo").css("filter", "none");
        }else if(myId == "contact"){
            $("#myLogo").css("filter", "hue-rotate(100deg)");
            color = "hsl(285, 100%, 41%)";
        }else if(myId == "skills"){
            $("#myLogo").css("filter", "hue-rotate(285deg)");
            color = "hsl(133, 100%, 24%)";
        }else{
            $("#myLogo").css("filter", "hue-rotate(240deg)");
           color = "hsl(67, 100%, 34%)";
        }
        $(".active").css("color", color);
        $('head').append('<style>nav:before{background: linear-gradient(hsl(201, 100%, 4%) 0%,'+color+'50%, hsl(201, 100%, 4%)100% )}</style>');
        $(function () {
            $("nav li").hover(function(){
                $(this).children().children().css("color", color);
            }, function () {
                // change to any color that was previously used.
                $(this).children().children().css("color", "gray");
                $(".active").css("color", color);
            });
        });

    });

    $("section").mouseover(function(){
        myId = $(this).attr("id");
        $(" i.mainIcon, .icon_label").css("color", "gray");
        $("i.mainIcon, .icon_label").removeClass("active");
        if(myId == "aboutme_section"){
            color = "rgb(18, 107, 129)";
            $("#myLogo").css("filter", "none");
            $("#aboutme_label_id, #icon_aboutme").addClass("active");
        }else if(myId == "contact_section"){
            $("#myLogo").css("filter", "hue-rotate(100deg)");
            color = "hsl(285, 100%, 41%)";
            $("#contact_label_id, #icon_contact").addClass("active");
        }else if(myId == "skills_section"){
            $("#myLogo").css("filter", "hue-rotate(285deg)");
            color = "hsl(133, 100%, 24%)";
            $("#skills_label_id, #icon_skills").addClass("active");
        }else{
            $("#myLogo").css("filter", "hue-rotate(240deg)");
           color = "hsl(67, 100%, 34%)";
           $("#projects_label_id, #icon_projects").addClass("active");
        }
        $(".active").css("color", color);
        $('head').append('<style>nav:before{background: linear-gradient(hsl(201, 100%, 4%) 0%,'+color+'50%, hsl(201, 100%, 4%)100% )}</style>');

        $(function () {
            $("nav li").hover(function(){
                $(this).children().children().css("color", color);
            }, function () {
                // change to any color that was previously used.
                $(this).children().children().css("color", "gray");
                $(".active").css("color", color);
            });
        });

    });

    $(".show-button").click(function(){
        $(".form-button").attr("disabled", false).removeClass("disable_button");
        $(this).attr("disabled", true).addClass("disable_button");
        $("form").css("display",  "block");
    });

    $(".hide-button").click(function(){
        $(".form-button").attr("disabled", false).removeClass("disable_button");
        $(this).attr("disabled", true).addClass("disable_button");
        $("form").css("display",  "none");
    });


    
});