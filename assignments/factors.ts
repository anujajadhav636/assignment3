var num
num=25
function factors(num)
{
    var i=1
    console.log("Factors are")
    while(num>1)
    {
        if((num%i==0)&&(i<num%2))
        {
            console.log(i)
        }
        i++;
    }
}
factors(num)