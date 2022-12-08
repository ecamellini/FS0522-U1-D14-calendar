// GLOBAL VARIABLES - THE MEMORY OF OUR CALENDAR

// An appointment is an object with time & title properties
let exampleAppointment = { time: "9:00", title: "Epicode lecture" };

// A day can have many appointments, so an array of appointments
let exampleAppointmentsForDay = [
  { time: "9:00", title: "Epicode lecture" },
  { time: "12:30", title: "Lunch" },
];

// A month, a calendar, has many days. So we need a list
// of appointments for each day.
let appointments = [
  [
    { time: "9:00", title: "Epicode lecture" },
    { time: "12:30", title: "Lunch" },
  ], // Day 1
  [], // Day 2
  [], // Day 3
  [{ time: "12:00", title: "Lunch in the city center" }], // Day 4
  [], // .... up to 30
];

// ANOTHER WAY TO DO IT:
// let appointments = [
//   { time: "9:00", title: "Epicode lecture", day: "10/12" },
//   { time: "9:00", title: "Epicode lecture", day: "11/12" },
//   { time: "9:00", title: "Epicode lecture", day: "12/12" },
// ];
// Advantages: it looks simpler, easier to read, just one list of things.
// Disadvantages: every time we need to display the appointments,
//    we need a for loop to go throughs all this list of appoinments,
//    and get only the ones for the current day.
// ---------------------------------------------

function visualizeAppointments() {
  // First thing we do to visualize the appointments for the day:
  // we just clear the appointments ul tag content, so that
  // we have a clean area where to visualize the new appointments.
  document.getElementById("appointments-list").innerHTML = "";

  let selectedDay = document.querySelector(".selected").innerText;
  let selectedDayNumber = parseInt(selectedDay);
  let index = selectedDayNumber - 1; // Days start from 1, but arrays count from 0
  let appointmentsForSelectedDay = appointments[index];

  for (let appointment of appointmentsForSelectedDay) {
    // 1) We create the appointment tag
    let appointmentLi = document.createElement("li");

    // 2) We customize it
    // We format the data inside the object as we want to display it:
    appointmentLi.innerText = `${appointment.time} -- ${appointment.title}`;
    // ANOTHER WAY TO DO THE SAME THING:
    // appointmentLi.innerText = appointment.time + " -- " + appointment.title;

    // 3) We append it somewhere in the DOM
    document.getElementById("appointments-list").appendChild(appointmentLi);
  }
  // This is just a nicer way to iterate through an array.
  // We could have just used a normal for/while loop.
}

function selectDay(event) {
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

function onDayClick(event) {
  // ^ ^  This is an event listener, we know it will receive as parameter the event data object

  selectDay(event);
  visualizeAppointments();
}

function saveAppointment() {
  // 1) we get the two input values
  let inputTime = document.getElementById("appointment-time").value;
  let inputTitle = document.getElementById("appointment-title").value;

  let appointmentObject = {
    // We put the two values in a new object.
    time: inputTime,
    title: inputTitle,
  };

  // We are ready to store this appointment object in our list of appointments

  let selectedDay = document.querySelector(".selected").innerText;
  let selectedDayNumber = parseInt(selectedDay);
  let index = selectedDayNumber - 1; // Days start from 1, but arrays count from 0
  let appointmentsForSelectedDay = appointments[index];

  appointmentsForSelectedDay.push(appointmentObject);

  // After adding this new element, we need to visualize again
  // the list of appointments for the day.
  visualizeAppointments();
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
