
$('<i class="fa fa-times" aria-hidden="true"></i>').appendTo('.article');
//up
$('.btn').on('mousedown',function(){

	$('body').scrollTop(0);
});

//close article
$('.fa.fa-times').click(function(event){
	   $(event.target.parentNode).hide();

});
