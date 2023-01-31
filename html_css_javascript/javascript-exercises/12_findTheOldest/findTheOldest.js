const findTheOldest = function(arr) {
    const currentYear = 2023;
    const ages = arr.map(person => typeof person.yearOfDeath == "undefined" ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth);
    let oldest = 0;
    let oldest_arrPos = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest_arrPos = i;
            oldest = ages[i];
        }
    }  
    return arr[oldest_arrPos];
};

// Do not edit below this line
module.exports = findTheOldest;
