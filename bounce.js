var SPEED=10;
var TIMER_SPEED=50;
var squareCount= 50;
//Make a variable that will be how many squares we will have
$(function(){
    //Make a for loop that creates squarecount squares
    for(var i=0;i<squareCount;i++){
        var square =$("<img>", {
            "src":"laughing_man.jpg",
            "alt": "laughing man",
            "class":"square"
          } );
          square.on("mouseover",function(){
            $(this).attr("src", "orochimaru_50x50.jpg");
          })
          square.on("mouseout",function(){
            $(this).attr("src","laughing_man.jpg")
          })
        $("#box").append(square);
    }
    // For each square make it use the laughingman image
    var xPosition=($(".square").parent().width()-$(".square").width())/2+"px";
    var yPosition=($(".square").parent().height()-$(".square").height())/2+"px";
    $(".square").css({
        "top":yPosition,
        "left":xPosition
    });
    $("#box").children().each(function(idx,e){
        var dx =SPEED*(Math.random()*2 -1);
        var dy=SPEED*(Math.random()*2 -1);
        setInterval(function(){
            $(e).css({
                "top":function(idx, old){
                    old=parseInt(old);
                    if(old<0||old>$(this).parent().height()-$(this).height()){
                        dy*=-1;            
                        $(this).css("border-color", newColor());      
                     }
                     return old+dy+"px";
                },
                "left": function(idx, old){
                    old=parseInt(old);
                    if(old<0||old>$(this).parent().width()-$(this).width()){
                        dx*=-1; 
                        $(this).css("border-color", newColor());                  
                     }
                     return old+dx+"px";
                }
            }, TIMER_SPEED);
        } );
    });
});
function newColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+b+","+g+")";
}