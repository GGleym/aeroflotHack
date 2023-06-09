
export const getFltNums = (fltNums) => {
    let nums = [];

    for (let i = 0; i < fltNums.length; i++) {
        nums[i] = {
            value: fltNums[i],
            label: fltNums[i]
        }
    }
    return nums
};
