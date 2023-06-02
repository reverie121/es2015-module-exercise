// returns a randomly selected item from array of items
const choice = (items) => {
    return items[Math.floor((Math.random()*items.length))];
}

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
const remove = (items, item) => {
    const idx = items.indexOf(item);
    // if item not found idx will be -1; if so return defined
    if (idx == -1) return undefined;
    // otherwise splice out item from items and return that value
    const val = items.splice(idx, 1);
    return val;
}

export { choice, remove };