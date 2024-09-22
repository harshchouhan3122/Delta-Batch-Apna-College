// -> Create a function to find the min num in a array. (minNum.js)

function getMin(nums){
    let minNum = nums.reduce( (res, num )=>{
        if (res > num)
            return num;
        return res;
    })

    return minNum;
}


let arr1 = [10, 20, 35, 40, 50, 7]

console.log(getMin(arr1));


