let NameIs =  prompt("Enter any palindron name : ")
let reverse_name = "" ;

for(let i=NameIs.length-1; i>=0; i--)
{
    reverse_name += NameIs[i]
}

if(reverse_name==NameIs)
{
    document.write(NameIs + " is a palindron name !");

}
else
{
    document.write(NameIs + " is not a palindron name !"); 
}

 