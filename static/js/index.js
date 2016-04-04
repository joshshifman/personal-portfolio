$(document).ready(function(){
	console.log($(window).width())
	if($(window).width() >= 768){

	    $(".typed").typed({
	    	// console.Log("FUNCTION WORKING")
	        strings: ["Hi I'm Josh.", "It's nice to meet you.", "Click around to learn more about me."],
	        typeSpeed: 80
	    });
	}
	else  {
		$(".typed").typed({
	    	// console.Log("FUNCTION WORKING")
	        strings: ["Hello there", "I'm Josh.", "Nice phone."],
	        typeSpeed: 80
	    });
	}
});