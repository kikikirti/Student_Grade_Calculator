# Student Grade Calculator

This project is a simple web-based application that allows users to calculate the grades of a student based on the marks entered for five subjects. The application calculates the total marks, percentage, and assigns a grade based on the percentage.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for the application.
- **JavaScript**: Logic for calculating grades and displaying the result.

## Project Structure

The project consists of three main files:

1. **index.html**: The main file that contains the structure of the page and the input fields for entering marks.
2. **script.js**: The JavaScript file that contains the logic for calculating total marks, percentage, and grade.
3. **style.css**: The CSS file that provides styling to the web page.

## Features

- Allows users to input marks for the following subjects:
  - Chemistry
  - Physics
  - Maths
  - English
  - Computer Science
- Calculates the total marks out of 500.
- Calculates the percentage based on the total marks.
- Displays the grade based on the percentage:
  - **A**: 80% and above
  - **B**: 60% to 79%
  - **C**: 40% to 59%
  - **F**: Below 40%
- Displays whether the student has passed or failed based on the calculated percentage.
  
## Grade Calculation Logic

The total marks are calculated by summing the marks for all five subjects. The percentage is then calculated by dividing the total marks by 500 and multiplying by 100. Based on the percentage, the following grades are assigned:

- **A**: 80% - 100%
- **B**: 60% - 79%
- **C**: 40% - 59%
- **F**: Below 40%

If any of the fields are left empty, the app will prompt the user to enter all the marks.

## How to Use

1. Open `index.html` in your browser.
2. Enter the marks for all five subjects in the respective input fields.
3. Click the **"Show Percentage"** button to calculate the total marks, percentage, and grade.
4. The result will be displayed below the form, indicating whether the student has passed or failed.
