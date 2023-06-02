import foods from "./foods";
import { choice, remove } from "./helpers";

const randomFruit = choice(foods);
console.log(`I’d like one ${randomFruit}, please.`);
let removed = remove(foods,randomFruit);
console.log(`Here you go: ${removed}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${foods} left.`);
const anotherFruit = choice(foods);
console.log(`I'll have a ${anotherFruit}, please.`)
removed = remove(foods,anotherFruit);
console.log(`Here you go: ${removed}`);
console.log(`Yum!`);
console.log(`That's my last ${removed}, but let me know if you would like any of these: ${foods}`);