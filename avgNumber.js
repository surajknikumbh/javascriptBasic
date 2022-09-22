function avgNum(num) {
    let sum=0;
    let avg;
    for(i=1;i<=num;i++){
        sum=sum+i;
    }
    
    avg=sum/num;
    return avg;
}
console.log("Avrage of given Number is")
console.log(avgNum(15));