// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(job = "go to the office") {
    return `This Monday, I will ${job}.`;
}

function wrapAdjective(flair = "*") {
    return function(describe = "special") {
        return `You are ${flair}${describe}${flair}!`;
    }
}