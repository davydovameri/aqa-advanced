function myRecursion(num) {
    console.log(num);
    if (num <= 0)
        return 1;
    else
        return myRecursion(num - 1);
}

myRecursion(5);