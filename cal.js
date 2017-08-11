


console.log("123");// from 为当前页，to 为下一页



$("#cal3p1").bind("click", function(event) { 


	var p3p1_price = $("#3p1_price").val() ;
	var p3p1_shoufu = $("#3p1_shoufu").val() ;

	console.log( p3p1_price );

	if ( !(p3p1_price>0) ) {
		console.log( "未输入交易价格" );
		return;
	}

	if ( !(p3p1_shoufu>0) ) {
		console.log( "未输入首付金额" );
		return;
	}

	var p3p1_one = (p3p1_price - p3p1_shoufu) * 0.02913 ;
	var p3p1_four = (p3p1_price - p3p1_shoufu) * 0.02257 ;
	var p3p1_last = (p3p1_price - p3p1_shoufu) * 0.25 ;

	$(".3p1_one").text( Math.round( p3p1_one ) );
	$(".3p1_four").text( Math.round( p3p1_four ) );
	$(".3p1_last").text( Math.round( p3p1_last ) );

});