//weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let weekNumbers = ["1","4","6","3","2"];
let weekWords = [];

weekNumbers.forEach(weekNumberstoWords);

function weekNumberstoWords(item, index){

    switch (item) {
        case "1":
          day = "Sunday";
          weekWords.push(day);
          break;
        case "2":
          day = "Monday";
          weekWords.push(day);
          break;
        case "3":
           day = "Tuesday";
           weekWords.push(day);
          break;
        case "4":
          day = "Wednesday";
          weekWords.push(day);
          break;
        case "5":
          day = "Thursday";
          weekWords.push(day);
          break;
        case "6":
          day = "Friday";
          weekWords.push(day);
          break;
        case "7":
        day = "Saturday";
        weekWords.push(day);
      }
}

console.log("The last day of the week is: " + weekWords.toString());

