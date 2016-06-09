// Code goes here
$(document).ready(function() {
	$(".error").hide();
	$body = $("body");

	$(document).on({
    	ajaxStart: function() { $body.addClass("loading");},
     	ajaxStop: function() { $body.removeClass("loading");}
	});

	$(".searchInput").keypress(function(e){
    	if(e.keyCode==13) {
    		$(".search").click();
    	}
    })

	$('.search').click(function(e) {
		$.ajax({
		    url: "http://api.giphy.com/v1/gifs/search?q=" + $('.searchInput').val() +  "&api_key=dc6zaTOxFJmzC",
		    type: "GET",
		    success: function(data) {
		    	var random = Math.floor(Math.random() * data.data.length);
		    	$(".display").empty();
		    	data.data.forEach(function(gif, index){
		    		if (random === index) {
		    			$(".display").append("<div class='gif'><img src="+gif.images.fixed_height.url+"></div>");
		    		}
		    		else {
		    			$(".display").append("<div class='gif'><img src="+gif.images.fixed_height_still.url+"></div>");
		    		}
		    	})
		    },
		    error: function() {
			    $(".display").empty();
			    $(".error").show();
		    }
		})
	})
});

