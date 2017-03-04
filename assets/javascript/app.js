//var pos=0
//var questions = [
//	["Anxiety is the hand maiden of __________ ", ""],
//	[],
//	[],
//	[]
//];

//function _(x){
//	return document.getElementById(x);
//}
//function theQ(){

//}
//var seconds=30;
//var counter=setInterval( 1000);

//function timer(){
//	count=count-1;
//	if(count<0){
//		clearInterval(counter);
//		return;
//	}
//	$("#startTime").html(" secs");
//}


function funLoad(){

	$(".writers").hide();
	$(".results").hide();
	//$(".container").fadeIn(3000);
}

	$(".btn").click(function(){
		$(".writers").show();
//		setTimeout(function(){ $("#startTime").append(30); }, 1000);
//		setTimeout(1000)
//		$("#startTime").append(seconds);
//		seconds -1;
});
var count = 2
	function myFunction(){

setInterval(function(){ $("#startTime").html(count); count--; if(count < 0){
 		$("#startTime").html(0);
 		$(".writers, .jumbotron").fadeOut(3000);
 		$(".results").fadeIn(2000);
 	}}, 1000);
 	
 		
clearInterval(myFunction);
	 }

//	var x =document.getElementById("startTime");
//	setTimeout(function(){x.value=1}, 1000);

 
	
	
// $("#startTime").html(count);

//function myFunction() {
//    setTimeout(function(){ $("#startTime").append(seconds); }, 1000);
//}
//	var startTime = document.getElementById("startTime");
		
	 
//id status

//function timer(){
//	count=count-1;
//	if(count<0){
//		clearInterval(counter);
//		return;
//	}
//	$("#startTime").html(count);
//}
	

	 



//		setTimeout(30000);

//	function startTime();{
//		var seconds = $("#seconds").val();
//		if (seconds
//	}
 
//startTime  (id)

//onclick="start30()"

//function start30(){
//	var x =document.getElementById("startTime");
//	setTimeout(function(){x.value=1}, 1000);

//}

// Update the count down every 1 second
//var x = setInterval(function() {
//var seconds = 30;
// Display the result in the element with id="demo"
//  document.getElementById("countDown").innerHTML = seconds;

// If the count down is finished, write some text 
//  if (distance < 0) {
//    clearInterval(x);
//    document.getElementById("countDown").innerHTML = "EXPIRED";
//  }
//}, 1000);

//}

//$(function(){
//	$("#s_timer").countdowntimer({
//		seconds : 30‚
//                size : "lg"
//	});
//});

//////////////////////////////////////////////////////////////

//  window.onload = countDown(30);

//   var myVar;
//   function countDown(val)
 //  {
//	  var counter=val;
	
//	  myVar= setInterval(function()
//	  { 
//	    if(counter>=0)
//		{
//		  document.getElementById("countDown").innerHTML=counter;
//		}
//	    if(counter<0)
//		{
//		  document.getElementById("countDown").innerHTML="End";
//		}
		
//		counter--;		
//	  }, 1000)
	
//    }

  // function set_count()
 //  {
//	  clearInterval(myVar);
//	  var count_val=document.getElementById("counter_val").value;
//	  countdown(count_val);
   //}