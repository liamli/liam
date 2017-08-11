


console.log("123");// from 为当前页，to 为下一页



/* 3+1 产品 */
function cal3p1(){

	var p3p1_price = $("#3p1_price").val() ;
	var p3p1_shoufu = $("#3p1_shoufu").val() ;


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


	$("#3y_price").val( p3p1_price );
	$("#3y_shoufu").val( p3p1_shoufu );
	$("#1px_price").val( p3p1_price );
	$("#1px_shoufu").val( p3p1_shoufu );
}




/* 三年期产品 */
function cal3y(){

	var p3y_price = $("#3y_price").val() ;
	var p3y_shoufu = $("#3y_shoufu").val() ;

	if ( !(p3y_price>0) ) {
		console.log( "未输入交易价格" );
		return;
	}

	if ( !(p3y_shoufu>0) ) {
		console.log( "未输入首付金额" );
		return;
	}

	var p3y_one = (p3y_price - p3y_shoufu) * 0.0347 ;

	$(".3y_one").text( Math.round( p3y_one ) );


	$("#3p1_price").val( p3y_price );
	$("#3p1_shoufu").val( p3y_shoufu );
	$("#1px_price").val( p3y_price );
	$("#1px_shoufu").val( p3y_shoufu );

}


$("#cal3p1").bind("click", function(event) { 
	cal3p1();
	cal3y();
});


$("#cal3y").bind("click", function(event) {
	cal3p1();
	cal3y();
});