function fibonacciNum(num) {
    let n1=0;
    let n2=1;
    let sum=n1;
    for(let i=1;i<num;i++){
        console.log(sum)
        sum=n1+n2;
        n1=n2;
        n2=sum;        
    }
    
}
fibonacciNum(64);