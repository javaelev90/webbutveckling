
function fizzbuzz(startnum, endnum, fizznum, buzznum){
    var output = document.getElementById("text-output-area");
    output.innerHTML="";
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
        console.log(word+" ");
        output.innerHTML += word+" ";
    }
}