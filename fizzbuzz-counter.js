
function fizzbuzz(startnum,endnum,fizznum,buzznum){

    
    if(isNaN(startnum) || isNaN(endnum) || isNaN(fizznum) || isNaN(buzznum)){
        alert("You can only input numbers");
        return;
    }

    var output = document.getElementById("fizzbuzz-output-area");
    output.innerHTML="";
    startnum = Number.parseInt(startnum);
    endnum = Number.parseInt(endnum);
    fizznum = Number.parseInt(fizznum);
    buzznum = Number.parseInt(buzznum);

    for(var i = startnum; i <= endnum; i++){
        var word = i;
        if(i % fizznum === 0){
            word = "Fizz";
        } 
        if(i % buzznum === 0){
            word = "Buzz";
        }
        if(i % fizznum === 0 && i % buzznum === 0){
            word = "FizzBuzz";
        }
        output.innerHTML += word+" ";
    }
}