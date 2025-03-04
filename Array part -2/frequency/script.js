let name_is = prompt("Enter any Name to check Frequency : ")
let count;

for(let i=0; i<name_is.length; i++)
{
    count = 0;

    for(j=0; j<=name_is.length; j++)
    {
        if(name_is[i] == name_is[j])
        {
            count++;
        }
     }
     document.write(name_is[i] + " - " + count + "<br>");
    
}