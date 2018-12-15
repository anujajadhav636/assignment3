var n1,n2,n3,ret
n1=10
n2=20
n3=30
function max(n1,n2,n3):number
{
    if((n1>n2)&&(n1>n3))
    {
        return n1
    }
    else if((n2>n1)&&(n2>n3))
    {
        return n2
    }
    else
    {
        return n3
    }
}
ret=max(n1,n2,n3)
console.log("Max number is:"+ret)