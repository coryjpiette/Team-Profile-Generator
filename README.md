TEAM PROFILE GENERATOR

This application allows the user to create a detailed profile of team members. The user can input an unlimited number of employees which includes any combination of engineers and interns, assuming all requirements are met and all tests are passed. When the user has finished inputting team members, the application will generate an HTML file that displays the team roster.

REQUIREMENTS

The allowable classes are: Employee, Manager, Engineer, and Intern.

The primary class of Employee is the parent class that requires the following inputs:

- name (input)
- id (input)
- email (input)
- title (selected from the three options of Manager, Engineer, or Intern)


If "Manager" is selected, the user will be required to enter an office number.

If "Engineer" is selected, the user will be required to enter a github username.

If "Intern" is selected, the user will be required to enter their current school.

USER INPUT 
The application will prompt the user to build their team. The team MUST consist of a manager and any combination of engineers and interns.

OUTPUT
When the roster is completed, an output.html will be generated in the main folder. It will display:

- Name

- Role

- ID

- Office number, Github username, or school for Manager, Engineer, or Intern, respectively.

VIDEO EXAMPLE (the html created by this example can be seen [here](output/sample.html)).

![Alt Text](https://github.com/coryjpiette/Team-Profile-Generator/blob/main/assets/walkthrough.gif)
