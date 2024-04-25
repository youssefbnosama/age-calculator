//inputs ||
let day = document.getElementById(`day`)
let month = document.getElementById(`month`)
let year = document.getElementById(`year`)
let calc = document.getElementById(`calc`)
let Err = document.querySelector(`.Error`)
//results
let dayResult = document.getElementById(`r3`)
let monthResult = document.getElementById(`r2`)
let yearResult = document.getElementById(`r1`)
//nowDate
let date = new Date()
//Calculation
calc.addEventListener((`click`), () => {
    //inputValue
    let yearValue = year.value
    let monthValue = month.value
    let dayValue = day.value
    // valid year
    if (yearValue != `` && typeof +yearValue == `number` && -yearValue < 0) {
        //valid month
        if (monthValue != `` && typeof +monthValue == `number` && -monthValue < 0 && +monthValue < 13) {
            //valid day
            if (dayValue != `` && typeof +dayValue == `number` && -dayValue < 0 && +dayValue < 31) {
                      //Usermillsec
                    let valueDate = new Date(`${monthValue}/${dayValue}/${yearValue}`).getTime()
                    let userMillSec = date.getTime() - valueDate
                    //calc Year
                    let userYears = Math.floor((userMillSec / 3600000 / 24 / 365.25))
                    yearResult.innerHTML = userYears
                    //Monts*30 + days
                    let userDays = (userMillSec - (+userYears * 365.25 * 24 * 3600 * 1000)) / 1000 / 3600 / 24
                    //Calc month
                    let userMonth = Math.floor(+userDays / 30.4)
                    monthResult.innerHTML = userMonth
                    //calc days
                    let userDaysWithoutMonth = Math.floor((userDays - (userMonth * 30.4)))
                    dayResult.innerHTML = userDaysWithoutMonth
            } else {
                Err.innerHTML = `Must be a Valid Date!!`
                day.style.border = `1.5px solid hsl(0, 100%, 67%)`
                day.oninput = function () {
                    Err.innerHTML = ``
                    day.style.border = `1px solid burlywood`
                }
            }
        } else {
            Err.innerHTML = `Must be a Valid Date!!`
            month.style.border = `1.5px solid hsl(0, 100%, 67%)`
            month.oninput = function () {
                Err.innerHTML = ``
                month.style.border = `1px solid burlywood`
            }
        }
    } else {
        Err.innerHTML = `Must be a Valid Date!!`
        year.style.border = `1.5px solid hsl(0, 100%, 67%)`
        year.oninput = function () {
            Err.innerHTML = ``
            year.style.border = `1px solid burlywood`
        }
    }
})  
