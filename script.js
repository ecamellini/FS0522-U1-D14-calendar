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

    // 3) Append it / add it somewhere in the DOM
    document.getElementById("days-container").appendChild(dayNode);
  }
}

window.onload = onLoadActions;
