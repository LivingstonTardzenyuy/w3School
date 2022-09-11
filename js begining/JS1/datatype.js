function add(num1,num2)
{
    document.getElementById("math").innerHTML="";
    for(i=0;i<9;i++)
    {
        num1=prompt("ente a number");
        num2=prompt("enter another number");
    }
    ans=num1+num2 ;
    console.write(ans);
    
    
}