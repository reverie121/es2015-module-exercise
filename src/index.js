import foods from "./food";
import { choice, remove } from "./helpers";

const randomFruit = choice(foods);
console.log(`I’d like one ${randomFruit}, please.`);
const removed = remove(randomFruit);
console.log(`Here you go: ${removed}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${foods} left.`);