import './style.css';


const text = document.getElementById("goal")
const addGoalButton = document.getElementById("add")

const list = document.getElementById("list")

addGoalButton.addEventListener("click", () => {
  const goal = document.createElement("li");
  

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.classList.add("removeButton")

  const check = document.createElement("input")
  check.type = "checkbox";
  check.classList.add("check");

  const goalName = document.createElement("div");
  goalName.classList.add("name");
  goalName.innerHTML = text.value;

  

  const date = document.createElement("input")
  date.type = "date";
  date.classList.add("date");
   



  check.addEventListener("change", () => {
    if (check.checked) {
      goalName.style.textDecoration = "line-through";
      goalName.style.textDecorationColor = "red";
      goalName.style.textDecorationThickness = "3px";
    }
    else {
      goalName.style.textDecoration = "none";
    }
  })
   
  removeButton.addEventListener("click", () => {
    goal.remove();
    saveData();
  })
 
 if (text.value === "") {
       alert("You need to type your Goal")
  }else { 
     list.append(goal);
     goal.append(check,goalName,date,removeButton);
  }


text.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    list.append(goal);
     goal.append(check,goalName,date,removeButton);
  }
});

  text.value = "";
  saveData();
 

})
 function saveData() {
  localStorage.setItem("data", list.innerHTML )
}


function showTask() {
  list.innerHTML = localStorage.getItem("data");

  const check = document.createElement("input")
  check.type = "checkbox";
  check.classList.add("check"); 
  const removeButtons = document.querySelectorAll(".removeButton");
  const goalName = document.createElement("div");
  goalName.classList.add("name");
  goalName.innerHTML = text.value;

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      removeButton.parentElement.remove();
      saveData();
    });
  });

    check.addEventListener("change", () => {
      if (check.checked) {
        goalName.style.textDecoration = "line-through";
        goalName.style.textDecorationColor = "red";
        goalName.style.textDecorationThickness = "3px";
      } else {
        goalName.style.textDecoration = "none";
      }
      saveData(); 
  
  });

  

}
  document.addEventListener("DOMContentLoaded", function() {
  showTask();
})
