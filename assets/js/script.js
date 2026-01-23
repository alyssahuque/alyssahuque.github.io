$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();
                $("#education_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#education").click(function(){
                    $("#index").fadeOut();
                    $("#education_scroll").fadeIn();
                    $('#education_left').addClass('animated slideInLeft');
                    $('#education_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});