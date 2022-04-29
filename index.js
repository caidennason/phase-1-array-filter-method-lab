// Code your solution here
function findMatching(arrayOfNames, name){
    let answer = arrayOfNames.filter(ele => ele === name || ele.toLowerCase() === name.toLowerCase())
    return answer
    }

    function fuzzyMatch(arrayOfNames, name){
        let result = arrayOfNames.filter(ele => ele[0, 1] === name[0, 1])
        return result
    }

    function matchName(objectOfDrivers, string){
        let pain = objectOfDrivers.filter(nameEle => nameEle.name === string)
        return pain
    }