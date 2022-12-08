
# Epicode calendar project

## Functional requirements

We are going to describe the funcionalities that the calendar must have in this first version, as user stories.

### In scope for this version of the product

- As a user, I want to see all the days of the current month, so that I can select one.
- As a user, I want to add one or more appointments to a day, so that I don't have to remember them.
- As a user, I want to see the appointments that I added for each day in the calendar, so that I can plan my day accordingly.

### Out of scope

Features that will/could be implemented in future versions:

- As a user, I want to invite other people to my events, etc.
- Adding Reminders etc.
- etc.

### Functional requirements VS Non-functional requirements

* Functional: the functionalities that make the application actually work. Example: in the calendar, adding an appointment for the selected day.
* Non-functional: perfomance requiements (e.g., it needs to be faster than X seconds when loading), look & feel, UI, colors. Everything that is on top of the actual functionalities, but not stricly needed to make the application work.

# Software design

## Structure of the page / HTML

- container for the days (month / calendar view)
- an element for each day (e.g., div)
- input tags for the appointment time and name
- button to save
- list for the appointments for the selected day

## Style / CSS

- A class to make a day selected --> we will apply it to the day
    tag using JS
- Colors, font, etc. (the obvious CSS stuff)

## JavaScript

- We need a place to store/to save the appointments, so that we can visualize just the right ones every time we select a day.
- onclick on day --> we select that day
- onclick on a day --> we visualize the appointments for that day
- onclick on save --> add a new appointment using the input values
