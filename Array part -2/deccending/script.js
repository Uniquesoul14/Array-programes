let nums = [15,58,23,1,10,42,59,63,99,100,29,74]

for(let i=0; i<=nums.length; i++)
{
    for(let j=i+1; j<=nums.length; j++)
    {
        if(nums[i] < nums[j])
        {
             let temp = nums[i]
             nums[i] = nums[j]
             nums[j] = temp 
        }
    }
}

document.write("Decending order is :-   " + "  " + nums)