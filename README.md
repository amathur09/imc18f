README 
IMC’s prototype is being delivered as a web portal http://www.rxeffex.com.
Source code and project documentation/evidence are located in a Git repository at https://github.com/amathur09/imc18f 
Name:  rxEffex
Version:  0.25
Last update:  7/1/2015
Company: IMC http://www.imc.com/

IMC Prototype rxEffex
The IMC agile team has built our rxEffex prototype website for 18F in the Adverse Events reporting domain using the API from open.fda.gov. IMC selected adverse events for our prototype because of our expertise in this area, having developed a Serious Adverse Event Tracking and Reporting System (SAETRS) for the National Institute on Drug Abuse (NIDA). While we drew from our understanding of adverse events for this project, the prototype represents new development of new functionality not present in SAETRS.
We engaged our NIDA client in our iterative approach in refining the prototype beginning with requirements gathering through sprint reviews. The prototype uses the data set for adverse events on the FDA website to expand the current search functionality on the site. It enables consumers to search for the adverse events of drugs by seriousness and/or outcomes and returns results in a horizontal bar graph that displays the number of records matching the drug name and the filters chosen. It allows for expansion of the functionality to medical professionals and researchers.
The home page welcomes the user and provides descriptive text to explain the purpose and function of the website. Once the user has read through it, the user invokes the main menu to select the secondary page that applies. Under the consumer page, the user reads the process for obtaining the relevant data and enters the name of the drug they are searching and then applies additional filters to learn the most frequent adverse effects from the drug by seriousness as well as the outcomes from the adverse effect (i.e. death, hospitalization etc.).
The application is built on the MVC architecture with JSP as the front end and Java code for the business logic.
Technical Approach
Methodology
The team used an Agile Scrum methodology and used Atlassian JIRA tool in support of agile delivery, to log product backlog, work performed, issues found and as overall collaboration tool among the team members. Pair programming which is an agile software development technique was used. Sprint Planning for 4 sprints based on Product Backlog, selecting user stories based on story points and business value of the functionality was conducted. The team conducted Daily stand up meetings and sprints reviews for Sprints 1 and 2. 
Design
The team conducted a requirements gathering session with Product Owner and NIDA Client (Consulting Specialist), both with expertise in adverse events. The product owner described the functioning of the prototype to the Web Designers and the Technical Architect to ensure it was viable. The business analyst worked with the product owner to develop user stories. The visual designer collaborated with the developers to create wireframes using WIX. The developers used these wireframes to design the website. The team collaborated with the NIDA client for reviewing the prototype and enabling feedback. The prototype was refined daily with each feedback
Each page was designed with the user in mind, easy-to-use navigation, menu bars and text entry for visual representation of the data.  The website is clean and simple in its design so as not to overwhelm the user and to assure the user gets to the right place in the least amount of time. Wireframes of the design were created using a web builder platform and then provided to the developers for coding and function requirements. The images were selected based on subject relevance and used to add some visual continuity to each page. The user uses the menu bar located at the top of each page to navigate the site. 
Development
IMC follows proven DevOps industry best practices to remove the friction between developing and releasing code. Our goal is to deploy a fully tested and fully functional version of each application at a moment’s notice, with the ability to roll quickly back to a previous version.
Our automated delivery process begins with continuous integration. We require developers to integrate code into a shared repository several times a day and enforce the frequency of code check-in. The continuous integration server verifies each check-in through an automated build, allowing teams to detect problems early. Following the Agile practice of continuous testing, we also run a suite of automated regression and unit tests at every build. This allows us to find regression or integration issues early before they become technical debt or buried under hundreds of other code changes. Continuous integration and testing not only improve the quality of the system, but also provide the added benefit of informing the Product Owner if a particular version is deployable. 
The Web Developers used the pair programming technique and worked as a pair to build the code for the prototype. They constantly conducted review sessions with the Product Owner and the Technical Architect to make sure the prototype matched the requirements. They involved the Visual Designer while designing the website to match the wireframes created.  The Business Analyst coordinated with both, the Web Developers as well as the product owner to make sure the user stories reflected the prototype being built. The Writer worked with all the team members to document all the activities. The writer also created the Readme file and other supporting documentation and made sure all if it went into the Git repository. The Agile Coach monitored each of these activities. 
Testing
An Agile development and test methodology is followed to create Epics from the Use Cases.  The Epics are in turn used to create User Stories. Testers use the User Stories to generate test cases. All the test cases are linked to the user stories to keep traceability. Unit, functional, system, integration and regression testing are performed. Zephyr, a JIRA plug in tool, is used for test case development and execution. The manual tests performed during the sprints are automated with Selenium. Defects are tracked in JIRA.
The Testers worked with the Web Developers and the Business Analyst to create test cases. Selenium scripts were created to automate the process. The testers discussed the bugs detected with the Web Developers and logged them in JIRA.

Implementation
IMC uses an Amazon Web Services (AWS) EC2 instance as base infrastructure to deploy the prototype.  Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS and IMC ensures application and data level security. The website runs on HTTPS protocol over SSL. For source code control, IMC team used Git as the repository to deliver the code and associated artifacts to GSA. To follow IMC’s agile practices, our team used JIRA to log product backlog, work performed, issues found and as overall collaboration tool among the team members. IMC used Zephyr as test management platform and Selenium as test automation tool. IMC is used Jenkins and Maven for continuous integration and to execute automated tests.

Evidence Criteria in the Full Stack Pool
a, b. We assigned a Certified Scrum Master and Project Management Professional as the leader with full authority and responsibility. He is accountable to the Vice President of Technology to the quality of the prototype. We assembled a fully qualified team of 11 resources across 9 of the 13 labor categories to form a multidisciplinary and collaborative team comprised of an Agile Coach, a Product Manager, a Technical Architect, two Testing Specialists, a Senior Documentation Specialist, a Graphics Specialist, two Senior Web Designers, a Senior Web Developer, and a business analyst. 
c. We included our Product Manager and a National Institutes of Health (NIH) adverse event clients who is also an expert in serious adverse events from the IMC Health and Life Sciences group in information gathering, user story creation, and the prototype development and design process. 
d. Our human-centered designed techniques and tools included: 
•	Establishing a JIRA instance as a collaboration tool for the team to communicate and understand needs, and to log product backlog, work performed, and issues found; 
•	Gathering requirements for user stories; 
•	Creating wireframes in WIX; 
•	Using an iterative approach with the Product Manager and NIH client for continuous improvement.
e. Our developers followed the style guide developed by our Visual Designer and designed with the user in mind. We created bright, clean, and easy -to -find and use buttons for search filters.
f. Usability tests were continuously performed by testers and casual users, independent of the development team. 
g. We followed an agile approach which enabled the testers, Product Manager, and NIH client to provide inputs/feedback to the design and development teams at key points in the process.
h. The prototype design is responsive and compatible with iPhone and Android mobile devices.
i, q. We also used modern, free of charge open-source technologies in the prototype including: 
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
j, o. IMC is using an Amazon Web Services (AWS) EC2 instance as the base infrastructure to deploy the prototype. We leveraged AWS IaaS and used AWS Amazon Machine Image to launch an instance in a container. Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS. The website runs on HTTPS protocol over SSL.
k, l. The developers wrote and executed unit tests for functionality code checking. We used Selenium, Maven, and Jenkins for continuous integration and automated test execution.
m, n. We set up GitHub as the repository for configuration management. Continuous monitoring and alerts were enabled by AWS tools. 
p. Missing
The structure of the Git repository evolved with each meeting conducted. We met early on and crafted the structure of the repository and then refined the structure daily. We created three main folders: 
•	WebContent contains the code
•	Documentation contains all the supporting documents and evidence for the work performed
•	Test contains all of the test scripts 

About IMC
•	IMC has provided Agile development to clients since 2007 using Scrum, Kanban, ScrumBan, and Extreme Programming techniques.
•	FDA has been an IMC client since 2002
•	AWS standard level partner since 2013.


