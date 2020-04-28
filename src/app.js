var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    var a = [];
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            chocolates.push(color);
            a.push("red");
        }
    } else {
        return 'Number cannot be zero/negative';
    }
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    const array = [];
    var count = chocolates.length
    if (count < number) {
        return 'Insufficient chocolates in the dispenser';
    }
    if (number <= 0) {
        return 'Number cannot be zero/negative';
    }
    for (let i = 0; i < number; i++) {
        array.push(chocolates.shift());
    }
    return array;
}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    const array1 = [];
    var count = chocolates.length
    if (count < number) {
        return 'Insufficient chocolates in the dispenser';
    }
    if (number <= 0) {
        return 'Number cannot be zero/negative';
    }
    for (let i = 0; i < number; i++) {
        array1.push(chocolates.pop());
    }
    return array1;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    const array2 = [];
    var count = chocolates.length
    if (count < number) {
        return 'Insufficient chocolates in the dispenser';
    }
    if (number <= 0) {
        return 'Number cannot be zero/negative';
    }
    for (let i = 0; i < number; i++) {
        array2.push(chocolates.pop(color));
    }
    return array2;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var a = [];
    // let color = "green"

    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            var count = 1;
            for (let j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++
                    chocolates[j] = 0;
                }
            } a.push(count);
        }
    } return a;

}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let Arr4 = [];
    let arr5 = ['red', 'blue', 'green', 'red'];
    for (let i = 0; i < chocolates.length; i++) {
        var count = 1;
        for (let j = 0; j < arr5.length; j++) {
            if (chocolates[i] == arr5[j]) {
                count++;
                Arr4.push(count)
                // for  (){}
            }
        }
    }
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    // if (chocolates[i] == finalcolor) {
    //     return
    // }
    // var newArr = [];
    if (chocolates.length == 0) {
        return chocolates;
    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
    let count = 0;
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == finalColor) {
            return "Can't replace the same chocolates";
        } if (chocolates[i] == color) {
            // newArr.push(chocolates[i])
            count++;
            if (number == count) {
                for (let j = 0; j < chocolates.length; j++) {
                    chocolates[j] = chocolates[j].replace(color, finalColor);
                }
                return chocolates;
            }
        }
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let c = 0;
    const emptyArr = [];
    const Empty = [];
    if (chocolates.length == 0) {
        Empty.push(c, emptyArr);
        return Empty
    }
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == finalColor) {
            return "Can't replace the same chocolates";
        }
        else if (chocolates[i] == color) {
            chocolates = chocolates.map(chocolates => {
                return chocolates.replace(color, finalColor);
            });
        }
        if (chocolates[i] == finalColor) {
            c++;
            emptyArr.push(chocolates[i])
        }
        Empty.push(c, emptyArr);
        return Empty;
    }
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(color){
    for(let i = 0; i<=chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates[i].shift(color);
        }
    }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
