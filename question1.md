question1: the errors in the following program.



function find(arr) {
    const frequencyMap = {};
    arr.forEach((element) => {
            if (frequencyMap[element]) {
                    frequencyMap[element] = frequencyMap.element + 1;

            }

            frequencyMap[element] = 1;

    });

    return frequencyMap;

}

 
find(['hello', 'world', 'hello', 'india', 'world']) // Output: {hello:2, world:2, india:1}
-------------------------------------------------------------------------------------------------------------------------------------------

solution: There are mainly two errors in the above code 

1) frequencyMap.element :   
                        frequencyMap.element==frequencyMap['element'] there is no any key present in frequencyMap with the name of (element) so it it is try to access the property name (element) which is not present, so frequencyMap.element returns undefined and undefined +1 retuns NaN value. Instead of frequencyMap.element we have to use frequencyMap[element]


2) missing of else block:
                        we  write frequencyMap[element] = 1; this line of code without using the else block that would lead to ovewriting the every key value to 1 which means this code statement runs every time and overwrite the frequencyMap key value, so we have to use the else block and write this code of statement inside the else block 

revised version of code is :

function find(arr) {
  const frequencyMap = {};

  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element] = frequencyMap[element] + 1;
    } else {
      frequencyMap[element] = 1;
    }
  });

  return frequencyMap;
}

console.log(find(['hello', 'world', 'hello', 'india', 'world']));
// Output: { hello: 2, world: 2, india: 1 }



