function changelang(){
	myform = document.getElementById('langform');
	myform.submit();
}

function isEnglish() {
	var lang = $('#language option:selected').val();
	if (lang == 'en') return true;
	else return false;
}

$(document).ready(function(){
	$(".has-menu").hover(function(){
		// if (true) {};

		$(this).find(".menu").stop().fadeIn()
	},function(){
		$(this).find(".menu").stop().fadeOut()
	})



	// $("#industry-solu").mouseout(function(){
	// 	$(".menu").hide();
	// })
	// $(".menu").hover(function(){
	// 	$(".menu").fadeToggle();
	// })
	// $(".menu").mouseout(function(){
	// 	$(".menu").fadeOut();
	// })
})