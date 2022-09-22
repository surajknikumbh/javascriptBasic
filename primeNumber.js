function primeNum(num) {
    let i;
    for (i = 2; i < num; i++){
        if(num%i==0)
            break;   
    }
    if(num==i || num%i!=0)
        return "prime Number";
    else
        return "Not a prime Number";

}
console.log(primeNum(59));