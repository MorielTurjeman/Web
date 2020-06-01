var timer = setTimeout( setNearStation , 2500 );

function setNearStation()
{
    $("#loader").hide();
    $("#station_button").html("Savidor-Center Tel Aviv");
    $("#station_button").removeClass("bg-light").addClass("bg-success");
    $("#station_button").append('<svg class="bi bi-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>');
    $("#station_button").append("<svg class='bi bi-check2' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/></svg>");
};

 var isFullScreen = 0;
$("#book_button.button_to_full_size").click( function() {
    $(this).html("");
    var d = {};
    if(!isFullScreen)
    {
        $(this).removeClass("btn btn-default bg-light bg-success button-style");
        $(this).addClass("fullscreen");
        $(this).css.margin = "0";
        $(this).css('border' , '0' );
        $(this).css('overflow' , 'scroll')
        d.height = "100%";
        d.width = "100%";
        d.position = "fixed";
        d.top = "9%";
        d.left = "0";
        isFullScreen = true;
        $("#DANAinput").show();
        for(var i = 0 ; i < 10 ; i++)
        {
            $(this).append('<div class="options_list_on_seacrh"></div>');
            //$(this).append('<></>');
            //$(this).append('');
        }
        $(".options_list_on_seacrh").append("<img src=includes/images/bookpic.jpg></img>");
    }
    if(isFullScreen)
    {
    }
    $(this).animate(d);
    $("#DANAonput").show();
        
});