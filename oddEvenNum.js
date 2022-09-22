let num;
function oddNum(num) {
    console.log("Odd Number is....")
    for (let i = 0; i <= num; i++) {
        if(i%2!=0){
            console.log(i);
        }
    }
    
}

function evenNum(num) {
    console.log("Even Number is....")
    for (let i = 0; i <= num; i++) {
        if(i%2==0){
            console.log(i);
        }
    }
    
}
evenNum(100);
oddNum(100);

