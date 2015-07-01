RxEffects
Link: http://www.rxeffex.com
Version 0.25
Last update 6/26/2015
Developer: www.imc.com
Git Repository: https://github.com/amathur09/imc18f

Description of Approach
The IMC agile team has built a prototype website for 18F in the Adverse Events reporting domain. The prototype uses the data set for adverse events on the FDA website to expand the current search functionality on the site. It enables consumers to search for the adverse events of drugs by seriousness and/or outcomes and returns results in a horizontal bar graph that displays the number of records matching the drug name and the filters chosen. It allows for expansion of the functionality to medical professionals and researchers.
The home page welcomes the user and provides descriptive text to explain the purpose and function of the website.  Once the user has read through it, s/he uses the main menu to select the secondary page that applies.  Under the consumer page, the user reads the process for obtaining the relevant data and enters the name of the drug they are searching and then applies additional filters to learn the most frequent adverse effects from the drug by seriousness as well as the outcomes from the adverse effect (i.e. death, hospitalization etc.).

Evidence Criteria in the Design and Development Pools
1, 2. We assigned a Certified Scrum Master as the agile coach and leader of the prototype and assigned 12 skilled resources across 11 of the 13 labor categories (see Attachment C) to form a multidisciplinary and collaborative team. 
3. We included our Product Manager and expert in serious adverse events from the IMC Health and Life Sciences group and one of our National Institutes of Health (NIH) adverse event clients in information gathering, user story creation, and the prototype development and design process. 
4. Our human-centered designed techniques and tools included: 
•	establishing a JIRA instance as a collaboration tool for the team to communicate and understand needs, and to log product backlog, work performed, and issues found; 
•	gathering requirements for user stories; 
•	creating wireframes in WIX; 
•	developing templates ;and, 
•	Using an iterative approach with the Product Manager and NIH client for continuous improvement.
5. Our developers followed the style guide developed and designed with the user in mind. We created bright, clean, and easy -to -find and use buttons for search filters.
6. Usability tests were continuously performed by testers and casual users, independent of the development team. 
7, 17. We followed an agile approach which enabled the testers, Product Manager, and NIH client to provide inputs/feedback to the design and development teams at key points in the process.
8. The prototype design is responsive and compatible with iPhone and Android mobile devices.
9, 19. We also used modern, free of charge open-source technologies in the prototype including: 
•	Apache Tomcat
•	Selenium
•	Bootstrap
•	CSS framework
•	BootSwatchr.com
•	D3.js.org
•	Eclipse
•	GIT
•	jQuery/jQueryUI
•	Maven and Jenkins, and 
•	OpenSSL
10, 15. IMC is using an Amazon Web Services (AWS) EC2 instance as the base infrastructure to deploy the prototype. We leveraged AWS IaaS and used AWS Amazon Machine Image to launch an instance in a container. Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS. 
11, 12. The developers wrote and executed unit tests for functionality code checking. We used Selenium, Maven, and Jenkins for continuous integration and automated test execution.
13, 14. We set up GitHub as the repository for configuration management. Continuous monitoring and alerts were enabled by AWS tools. 
16. We used the API from open.fda.gov.
18. 
The structure of the Git repository evolved with each meeting conducted. We met early on and crafted the structure of the repository and then refined the structure daily. We created three main folders: 
•	WebContent contains the code
•	Documentation contains all the supporting documents and evidence for the work performed
•	Test contains all of the test scripts 



