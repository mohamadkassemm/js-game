
window.addEventListener("load", function () {
    
    const start = document.getElementById("start");
    const boundaries = document.getElementsByClassName("boundary");
    const end = document.getElementById("end");
    const smallBox= document.gete
    
    var score=0 ;

    start.addEventListener("mouseover",play );

        function play () {       
        start.style.color="blue";
        document.getElementById("status").innerHTML= "Click on 'E' box to win"

        for(var i=0; i< boundaries.length; i++){
            boundaries[i].addEventListener("mouseover",lose);     
        }
        function lose( ){
            for( var z=0; z<boundaries.length; z++){
                boundaries[z].style.background= "red"  ; 
                end.removeEventListener("click",finish)
            }
            document.getElementById("status").innerHTML= "CLick on S to restart the Game :)"
            document.getElementById("result").innerHTML= "Game Over! :("
            
        }}

        end.addEventListener("click",finish);
        function finish () {
            end.style.color="blue";
            document.getElementById("result").innerHTML= "CONGRATS YOU WON!!"
            for(var m=0; m< boundaries.length; m++){
                boundaries[m].removeEventListener("mouseover",lose);     
            }

        }
        start.addEventListener("click",reset);
        function reset ( ){
            start.style.color="blue";
            end.style.color="black";
            end.addEventListener("click",finish);
            for( var z=0; z<boundaries.length; z++){
                boundaries[z].style.background= "#eeeeee"  ; 
                document.getElementById("result").innerHTML= "Good luck!"

            }
        }

        

    
    
        
  
});


 