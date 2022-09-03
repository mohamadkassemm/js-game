
window.addEventListener("load", function () {
    
    const start = document.getElementById("start");
    const boundaries = document.getElementsByClassName("boundary");
    const end = this.document.getElementById("end");
    result = document.getElementById("win")
    console.log(result)
    var score=0 ;

    start.addEventListener("pointerover",play );

    function play () {       
        start.style.color="blue";

        for(var i=0; i< boundaries.length; i++){
            boundaries[i].addEventListener("pointerover",lose);
        }
        function lose( ){
            for( var z=0; z<boundaries.length; z++){
                boundaries[z].style.background= "red"  ; 
            }
        }
        end.addEventListener("pointerover",finish);
        function finish () {
            end.style.color="blue";
            result= "Win"
            result.background= "green"
        }
    

        

    
    // start.addEventListener("click",reset);
    // function reset ( ){

    // }
        
  }
});


 