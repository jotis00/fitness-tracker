const redirectToWeightLog = document.getElementById('weightLogRedirect');
const mainMenuDiv = document.getElementById('mainMenuDiv')
const weightDiv = document.getElementById("weightHomeDiv")

const weightFormSubmit = document.getElementById("weightFormSubmitButton");

redirectToWeightLog.addEventListener('click', () => {
    mainMenuDiv.style.display = 'none';
    weightDiv.style.display = 'block';
})

const weightForm = document.getElementById("weightForm");
weightForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

weightFormSubmit.addEventListener ('click', () => {
    const weightInput = document.getElementById("weightFormWeight")
    const caloriesInput = document.getElementById("weightFormCaloriesField")
    const dateInput = document.getElementById("weightFormDate");

    const newWeight = {
        "calories": caloriesInput.value,
        "weight": weightInput.value,
        "date": dateInput.value
    }

    axios.post('http://localhost:8080/api/weights',newWeight ).then(res => {
        alert(res.data);
    })
    .catch(err => alert(res))
})


//get table button
//make axios request
//display table with weights
const tableButton = document.getElementById("weightTableButton")
const wightTableDiv = document.getElementById("weightLogTableDiv")
tableButton.addEventListener('click', () => {
    weightDiv.style.display = 'none';
    wightTableDiv.style.display = "block";

    var weights = new Array();
    weights.push(["Weight", "Calories", "Date"]);
    var table = document.createElement("TABLE");
    table.border = "1";

    var row = table.insertRow(-1);
    for (var i = 0; i < 3; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = weights[0][i];
        row.appendChild(headerCell);
    }
    

    axios.get('http://localhost:8080/api/weights').then((res) => {
        console.log(res.data)
        var weightArr = res.data;

        for (var i = 0; i < weightArr.length; i++) {
            row = table.insertRow(-1);
            for (var j = 1; j < 4; j++) {
                var cell = row.insertCell(-1);
                if(j === 1) {
                    cell.innerHTML = weightArr[i].weight;
                }
                else if (j === 2) {
                    cell.innerHTML = weightArr[i].calories;
                }
                else {
                    cell.innerHTML = weightArr[i].date;
                } 
            }
        }
    })
    .catch(err => alert(err))

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
})


//workout div
//post weight 
//get workouttable button
//make axios request
//display table with weights
const redirectToWorkoutLog = document.getElementById('workoutsRedirect');
const workoutDiv = document.getElementById("workoutsHomeDiv")
redirectToWorkoutLog.addEventListener('click', () => {
    mainMenuDiv.style.display = 'none';
    workoutDiv.style.display = 'block';

    console.log(1)
})

const workoutForm = document.getElementById("workoutForm")
const workoutSubmitButton = document.getElementById("workoutFormSubmit")
const displayWorkouts = document.getElementById("displayWorkouts")
const workoutTableButton = document.getElementById("workoutTableButton")

workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

workoutSubmitButton.addEventListener('click', () => {
 
    const workoutNameInput = document.getElementById("workoutNameInput")
    const setNumberInput = document.getElementById("setNumberInput")
    const weightInput = document.getElementById("workoutWeightInput")
    const dateInput = document.getElementById("workoutDateInput")

    const newWorkout = {
        "name" : workoutNameInput.value,
        "date" : dateInput.value,
        "workoutWeight" : weightInput.value,
        "sets" : setNumberInput.value
    }

    axios.post("http://localhost:8080/api/workout", newWorkout).then(res => {
        alert(res.data)
    })
    .catch(err => (alert(err)))

    workoutNameInput.value = '';
    dateInput.value = '';
    weightInput.value = '';
    setNumberInput.value = '';
})

workoutTableButton.addEventListener('click', () => {
    workoutDiv.style.display = 'none';
    displayWorkouts.style.display = 'block'

    var weights = new Array();
    weights.push(["Name", "Sets", "Weight", "Date"]);
    var table1 = document.createElement("TABLE");
    table1.border = "1";

    var row1 = table1.insertRow(-1);
    for (var i = 0; i < 4; i++) {
        var headerCell1 = document.createElement("TH");
        headerCell1.innerHTML = weights[0][i];
        row1.appendChild(headerCell1);
    }

    axios.get('http://localhost:8080/api/workout').then((res) => {
        console.log(res.data)
        var workoutArr = res.data;

        for (var i = 0; i < workoutArr.length; i++) {
            row1 = table1.insertRow(-1);
            for (var j = 1; j < 5; j++) {
                var cell1 = row1.insertCell(-1);
                if(j === 1) {
                    cell1.innerHTML = workoutArr[i].name;
                }
                else if (j === 2) {
                    cell1.innerHTML = workoutArr[i].sets;
                }
                else if(j === 3) {
                    cell1.innerHTML = workoutArr[i].workoutWeight;
                }
                else {
                    cell1.innerHTML = workoutArr[i].date;
                } 
            }
        }
    })
    .catch(err => alert(err))

    var dvTable1 = document.getElementById("dvTable1");
    dvTable1.innerHTML = "";
    dvTable1.appendChild(table1);
})




