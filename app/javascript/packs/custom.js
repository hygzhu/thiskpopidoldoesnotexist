$(document).ready(function(){
    
    // $('#try_again_button').hide();
    // $("#message").hide()


    // $('#true_button').click(function() {

    //     $('#true_button').hide();
    //     $('#false_button').hide();

    //    if( $('meta[name=exist]').attr("content") == "true"){
    //         message.innerText = "Correct! This image is real.";
    //    }else{
    //         message.innerText = "Incorrect! This image is fake.";
    //    }

    //     $('#try_again_button').show();
    //     $("#message").show();
    // });


    // $('#false_button').click(function() {

    //     $('#true_button').hide();
    //     $('#false_button').hide();

    //    if( $('meta[name=exist]').attr("content") == "false"){
    //         message.innerText = "Correct! This image is fake.";
    //    }else{
    //         message.innerText = "Incorrect! This image is real.";
    //    }

    //     $('#try_again_button').show();
    //     $("#message").show();
    // });

    $('#try_again_button').click(function() {

        // $('#true_button').show();
        // $('#false_button').show();

        // $('#try_again_button').hide();
        // $("#message").hide();

        
        $('.dynamic').load('/static_pages_controller/refresh_image');
    });
});