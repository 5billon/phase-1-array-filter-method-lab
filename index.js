function findMatching(drivers, name) {
    const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
}
function fuzzyMatch(drivers, partialString) {
    return drivers.filter(driver => driver.startsWith(partialString));

}
function matchName(drivers, name){

    const result = drivers.filter(driver => driver.name === name);
    
    return result;
}