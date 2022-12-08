function onDayClick(event) {
  // ^ ^  This is an event listener, we know it will receive as parameter the event data object

  // We remove the class selected from the previously selected day

  let previouslySelectedDay = document.querySelector(".selected"); // Get the first node matching the .selected selector
  // SAME AS DOING THE FOLLOWING:
  // let previouslySelectedDay = document.getElementsByClassName('selected')[0]
  if (previouslySelectedDay !== null) {
    previouslySelectedDay.classList.remove("selected");
  }

  // We clicked a day!
  // How do we know which is the day we clicked?
  let clickedDayNode = event.target; // The tag that triggered the event.
  clickedDayNode.classList.add("selected");
}

function onLoadActions() {
  // The function that will be called right after the page loads correctly.
  // We do here everything we want to do as soon as the page loads.

  // 1) We visualize the days.
  // ASSUMPTION: let's display 30 days, always.
  // TODO actually render the number of days of the current month.

  for (let day = 1; day <= 30; day++) {
    // 1) We create a div for the day
    let dayNode = document.createElement("div");

    // 2) We customize it as needed
    dayNode.classList.add("day");
    dayNode.innerText = day;
    dayNode.addEventListener("click", onDayClick); // Without ()

    // 3) Append it / add it somewhere in the DOM
    document.getElementById("days-container").appendChild(dayNode);
  }
}

window.onload = onLoadActions;
