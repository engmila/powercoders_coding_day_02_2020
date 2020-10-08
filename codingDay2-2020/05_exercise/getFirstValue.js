
function getFirstValue(){

   let weekDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    weekDay.sort();

    let lastElement = weekDay.pop();

    console.log("The last day of the week is: " + lastElement);
}

