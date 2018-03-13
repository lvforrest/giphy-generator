var topics= ["basketball", "football", "tennis"];
function getGifs(){
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?&api_key=QS4UYuYoU4LBXLI3596DpF14syIF9QKU&limit=10&q=" + topics,
        method:"GET",
    }).then(function(response) {
        var results = response.data;
    
        for (var i = 0; i < results.length; i++) {
            var b =$("<button>");
            b.addClass("button");
            b.attr("data-name", results[i]);
            b.text(results [i]);
            $("#gifs").append(b);
            $("#add").on("click", function(event){
             event.preventDefault();
            var input = $("#user-input").val();
            topics.push(input);
          
            var animated = results[i].images.downsized.url;
            var still =results[i].images.downsized_still.url;
            var gif =results[i];
            var element = $('<div class="image" style="background-image: url(' + still + ')"></div>');
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>");
            element.data('active', false);
            element.data('still', still);
            element.data('animated', animated);

            element.append(p);
            element.append(animated, still);
            $("#gifs").prepend(element);      

        });   
        getGifs();
      
    }
});


   

    function changeGifs(){
        if ( $(this).data('active') ) {
            $(this).data('active', false);
            $(this).css('background-image', 'url(' + $(this).data('still') + ')');
          } else {
            $(this).data('active', true);
            $(this).css('background-image', 'url(' + $(this).data('animated') + ')');
          }
        }
        

    
    $(document).on("click",".image", changeGifs);






    // $('button').on("click", function(){
    //     $(this).addClass("clicked");
    // });
    // $('button.clicked')
       




    }