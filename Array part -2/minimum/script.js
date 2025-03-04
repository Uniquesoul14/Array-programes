


let numbers = [15,85,566,25,20,4,89,100,23,34]
let min; 
min = numbers[0]; 

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i] < min)
    {
        min = numbers[i]
    }
}
document.write("The minimum number in array is :-  " +  min);