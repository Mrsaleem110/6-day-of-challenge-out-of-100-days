"use strict";
// *Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// *Explain & TIP:* Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.
let guests = ["Saleem", "kawish", "Naqash", "Hamza"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 1) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
// guests.splice(0, guests.length);
// console.log(guests); // Shows an empty list
