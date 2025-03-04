let array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]
let names_are = array;

document.write("Defined Array is :-  "+ names_are + " <hr> ")

//.Push
{
    let first = array.push("student ");
    document.write("Array using .Push :-  "  + array + "<hr>")
}


//.pop 
{
     array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]
   

    let second = array.pop()
    document.write("Array using .Pop :-  "  + second + "<hr>")
}


 
//.shift
{
    array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]


    let third = array.shift()
    document.write("Array using .Shift :-  "  + third + "<hr>")
}



//.unshift
{
    array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]
    

    let fourth = array.unshift("home")
    document.write("Array using .Unshift :-  "  +  + "<hr>")
}


//.Join
{
    array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]

    let fifth = array.join(" *_* ")
    document.write("Array using .Join :-  "  + fifth + "<hr>")

}


//.Sort
{
    array  = ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]
    nums = [112 , 20 ,30 ,100, 52 ,60 ,70 ,10 ,90 ]
  

    let sixth = array.sort()
    document.write("Array using .Sort :-  "  + sixth + "<hr>")
    
    let sixth_ = nums.sort()
    document.write("Array using .Sort :-  "  + sixth_ + "<hr>") 

}


//.at
{
    array =  ["peacock","horse","rat","jerry",10,"house","school","soumya","dhiraj",89,23]
   

    let seven = array.at(6)
    document.write("Array using .at :-  "  + seven + "<hr>")

}


 