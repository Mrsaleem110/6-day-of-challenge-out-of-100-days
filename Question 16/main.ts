// *Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.

// *Explain & TIP:* When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
let guests1: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests1.unshift("Isaac Newton");
guests1.splice(guests.length / 2, 0, "Charles Darwin");
guests1.push("Ada Lovelace");

guests1.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});