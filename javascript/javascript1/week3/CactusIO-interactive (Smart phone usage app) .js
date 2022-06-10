
// we make array beacuse we can push in all typeof

let activities =[]

function addActivity (date, activity, duration) {
    return typeof date == "string" && typeof activity == 'string' && typeof duration == "number" 
    ? activities.push({date , activity, duration}) : console.log("error its is not possible");
};

addActivity("23/7-18" , "youtube" ,30)
addActivity("10/6-22" , "js" ,120)
addActivity("10/9-22" , "take shower" ,20)
//addActivity("19/3-22" , "make food" ,40)
//addActivity("10/1-22" , 12 ,40)
addActivity()

console.log(activities);

function showStatus(activities){
    let activitySum = 0;
    for (let i = 0; i < activities.length; i++) {
        activitySum += activities[i].duration;
    }
    return activities.length == 0 
    ? console.log('please add an activity') : activitySum <= 170 
    ? console.log('You have added ' + activities.length + ' activities. The amount is ' + activitySum + ' min. of usage') 
    : console.log('You have reached your limit of being on your\'e phone >:)');
}
showStatus(activities);
