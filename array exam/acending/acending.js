let array = [32,45,10,21,78,56,2,1,7,3,9,100,85,25]

for(let i=0; i<=array.length; i++)
{
    for(let j=i+1; j<=array.length; j++)
    {
        if(array[i] > array[j])
        {
             let temp = array[i]
             array[i] = array[j]
             array[j] = temp 
        }
    }
}

document.write("Ascending order is :-   " + "  " + array)