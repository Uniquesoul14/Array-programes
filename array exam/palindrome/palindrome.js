let NameIs =  prompt("Enter any palindron name to check : ")
let New_name = "" ;

for(let i=NameIs.length-1; i>=0; i--)
{
    New_name += NameIs[i]
}

if(New_name==NameIs)
{
    document.write(NameIs + " is a palindron name !");

}
else
{
    document.write(NameIs + " is not a palindron name !"); 
}

 