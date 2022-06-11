const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function getEventWeekday(eventDayFromToday) {
 const day = new Date();
 let today = day.getDay();
let event = (today + eventDayFromToday)%daysOfWeek.length;

return `${daysOfWeek} ${event}`;
}
console.log(getEventWeekday(7))