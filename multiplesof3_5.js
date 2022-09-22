function multiples(n1,n2){
    let num=10;
    let sum=0;
    for (let i = 1; i < num; i++){
        if(i%n1==0 || i%n2==0){
            sum=sum+i;
        }
        
    }
    return sum;
}
console.log(multiples(3,5));