$( function() {

  var $container = $('#container');

  $container.imagesLoaded( function() {
    $container.masonry({
      columnWidth: 20,      
    });
  });
  

  // play audio 

  $('img.play_media').click(function(event){
    $("#resource_audio")
      .attr("src",""+this.id)
      .get(0).play();

      $('img.play_media').mouseleave(function(event){
        $("#resource_audio")
          .attr("src",""+this.id)
          .get(0).pause();
      });
  });

    // play video 

	$('.play_video').click(function(event){
	  	$(this).children()	  		
      		.get(0).play();

  		$(this).mouseleave(function(event){
  		  $(this).children()  		    
  		    .get(0).pause();
  		});
	});
  

});