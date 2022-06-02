const daysOfWeek = ["Sunday", "Monday", `Tuesday`, "Wednesday", "Thursday", "Friday", "Saturday"]
function getEventWeekday(eventDayFromToday) {
 const day = new Date();
 var today = day.getDay();
var event = [(today + eventDayFromToday)%daysOfWeek.length];

return daysOfWeek[event];

}
console.log(getEventWeekday(7))