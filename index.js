// Your code here
function createEmployeeRecord(arr){
    let employeeObj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [] ,
        timeOutEvents: [] ,
    }
    return employeeObj
}


function createEmployeeRecords(arr){
    let employeeArr = []
    arr.forEach(e => {
        employeeArr.push(createEmployeeRecord(e))
    });
    return employeeArr
}

function createTimeInEvent(obj, string){
    let dateArr = string.split(' ')
    let hour = dateArr.pop()
    let date = dateArr.shift()
    obj.timeInEvents = [{
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date,
    }]
    // console.log(obj)
    return obj
}

function createTimeOutEvent(obj, string){
    let dateArr = string.split(' ')
    let hour = dateArr.pop()
    let date = dateArr.shift()
    obj.timeOutEvents = [{
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    }]
    // console.log(obj)
    return obj
}

function hoursWorkedOnDate(obj, date){
    if (date === obj.timeInEvents[0].date){
        let hours = obj.timeInEvents[0].hour - obj.timeOutEvents[0].hour
        
        let hoursWorked = Math.abs(hours) / 100
        return hoursWorked
    }
}

function wagesEarnedOnDate(obj, date){
    let hoursWorked = hoursWorkedOnDate(obj, date)
    let wageOwed = hoursWorked * obj.payPerHour
    return wageOwed
}
