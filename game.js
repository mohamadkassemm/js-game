
window.addEventListener("load", function () {
    const start = document.getElementById("start");

    start.addEventListener("mouseover",play() );

    function play () {
        start.style.color="blue";
     }

    const boundaries = document.getElementsByClassName("boundary");
    for(var i=0; i< boundaries.length; i++){
        boundaries[i].addEventListener("mouseover",lose());
    }
    function lose( ){
        for( var z=0; z<boundaries.length; z++){
            boundaries[z].style.background= "red"  ; 
        }
    }

    const end = this.document.getElementById("end");
    end.addEventListener("mouseover",finish());

    function finish () {
        end.style.color="blue";
     }

    // start.addEventListener("click",reset);
    // function reset ( ){

    // }
        
    
});


 