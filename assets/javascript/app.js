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

	$(".writers, .results").hide();
	$("#buttonF").hide();
	//$(".container").fadeIn(3000);
}

	$(".btn").click(function(){
		$(".writers, #buttonF").show();
//		setTimeout(function(){ $("#startTime").append(30); }, 1000);
//		setTimeout(1000)
//		$("#startTime").append(seconds);
//		seconds -1;
});
var count = 30
	function myFunction(){

setInterval(function(){ $("#startTime").html(count); count--; if(count < 0){
 		$("#startTime").html(0);
 		$(".writers, .jumbotron").fadeOut(3000);
 		
 	}}, 1000);
 	
 		
clearInterval(myFunction);
	 }
var right = 0;
var wrong = 0; 
	 $("#buttonF").click(function(){
		$("#startTime").hide();
		var chicken = document.getElementById("writersOx").getElementsByTagName("input");
		for(var i=0; i<chicken.length; i++){
			console.log(chicken);
			if (chicken[i].value == "c"){
				right++;
				document.getElementById("right").innerHTML = ("correct: " + right);
			}else if (chicken[i].value != "c"){
				wrong++;
				document.getElementById("wrong").innerHTML = ("wrong: " + wrong);
			}
//			radios[i].parentNode.parentNode.className = '';}}
	}
$(".results").fadeIn(1000);
			
		 


//var x=document.getElementById("reZults").value;
//reZults

//		var ansCor = " ";
//			$("input").each(function (){
//				if($(this).is(":checked")) {
//			$(this).attr("value");
//				console.log(ansCor);
//				}
//			});
//	var x =document.getElementById("startTime");
//	setTimeout(function(){x.value=1}, 1000);
});
//HERE HER HERE HERE HERE HERE HERE HERE HERE HERE
// function validate() {
//		var radios = document.getElementById("resultsTitle").getElementsByTagName("INPUT");
//	var right = 0;
//	var wrong = 0; 

//	for(var i=0, i<radios.length ; i++) {  
//		if(radios[i].value == "x") {    
//			if(radios[i].checked == true){      
//				right++;      
//			radios[i].parentNode.parentNode.className = 'rightans';    }
//			else{      
//				wrong++;      
//				radios[i].parentNode.parentNode.className = 'wrongans';    }  }} 
	
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