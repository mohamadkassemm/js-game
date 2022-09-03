
window.addEventListener("load", function () {
    
    const start = document.getElementById("start");
    const boundaries = document.getElementsByClassName("boundary");
    const end = document.getElementById("end");
    const smallBox = document.getElementsByClassName("example");
    
    var score=0 ;

    start.addEventListener("pointerover",play );

    function play () {       
        start.style.color="blue";
        document.getElementById("status").innerHTML= "Click on 'E' box to win"

        for(var i=0; i< boundaries.length; i++){
            boundaries[i].addEventListener("pointerover",lose);     
        }
        function lose( ){
            for( var z=0; z<boundaries.length; z++){
                boundaries[z].style.background= "red"  ; 
                
            }
            
            smallBox.style.background="white" ;
            

        }
        end.addEventListener("pointerover",finish);
        function finish () {
            end.style.color="blue";
            end.addEventListener("click",alert("CONGRATS YOU WIN "))
            document.getElementById("result").innerHTML= "CONGRATS YOU WON!!"
        }
        start.addEventListener("click",reset);
        function reset ( ){
            start.style.color="black";
            end.style.color="black";
            for( var z=0; z<boundaries.length; z++){
                boundaries[z].style.background= "#eeeeee"  ; 
                document.getElementById("result").innerHTML= "Good luck!"

            }
        }

        

    
    
        
  }
});


 