README
======= 
Prototype URL: [http://www.rxeffex.com](http://www.rxeffex.com)
Git repository URL: [https://github.com/amathur09/imc18f](https://github.com/amathur09/imc18f) 
Prototype Name: **rxEffex**
Version: 0.25
Last update: 7/1/2015
Company: Information Management Consultants, Inc. (IMC), [http://www.imc.com/](http://www.imc.com/)

IMC PROTOTYPE: **rxEffex**
---------------------

The IMC agile team has built our rxEffex prototype website for 18F in the Adverse Events reporting domain. IMC selected adverse events for our prototype because of our expertise in this area, having developed a Serious Adverse Event Tracking and Reporting System (SAETRS) for the National Institute on Drug Abuse (NIDA). While we drew from that understanding of adverse events for this project, the prototype represents new development of new functionality not present in SAETRS.
The prototype uses the data set for adverse events on the FDA website to expand the current search functionality on the site. It enables consumers to search for the adverse events of drugs by seriousness and/or outcomes and returns results in a horizontal bar graph that displays the number of records matching the drug name and the filters chosen. It allows for future expansion of the functionality to medical professionals and researchers in future sprints.
The home page welcomes the user and provides descriptive text to explain the purpose and function of the website. Once the user has read through it, the user invokes the main menu to select the secondary Consumer page that applies. Under the Consumer page, the user reads the process for obtaining the relevant data and enters the name of the drug to be searched and then applies additional filters to learn the most frequent adverse effects from the drug by seriousness as well as the outcomes from the adverse effect (i.e. death, hospitalization etc.).
The application is built on the MVC architecture using the API from open.fda.gov with JSP as the front end and Java code for the business logic.

TECHNICAL APPROACH
------------------

**Methodology**
The team used an Agile Scrum methodology and the Atlassian JIRA tool in support of agile delivery, to manage the Product Backlog, log work performed and issues found, and to collaborate among the team members. We used pair programming, an agile software development technique, during development. We conducted Sprint Planning for 4 sprints based on the Product Backlog, selecting User Stories by business value of the functionality, as guided by the Product Manager, and story points . The team conducted Daily Stand Up Meetings and Sprints Reviews for Sprints 1 and 2. 
**Design**
IMC engaged our NIDA Client (Consulting Specialist) in our iterative approach in refining the prototype, beginning with requirements gathering through sprint reviews. Our team conducted a requirements gathering session with the Product Owner and our NIDA Client, both with expertise in adverse events. The Product Owner described the functioning of the prototype to the Web Designers and the Technical Architect to ensure it was viable. The Business Analyst worked with the Product Owner to develop User Stories. The Visual Designer collaborated with the Web Designers to create mockups of the graphical user interface. The Web Designers used these mockups to design the website. The team collaborated with the NIDA client by reviewing the prototype and enabling feedback. The prototype was refined daily with each feedback
Each page of the prototype website was designed with the user in mind, with easy-to-use navigation, menu bars, and text entry for visual representation of the data. The website is clean and simple in its design so as not to overwhelm the user and to assure the user gets to the right place in the least amount of time. Wireframes of the design were created using a web builder platform and then provided to the Web Designers for coding and function requirements.  The images  were selected based on subject relevance and used to add some visual continuity to each page. 
**Development**
IMC followed proven DevOps industry best practices to remove the friction between developing and releasing code. Our goal was to deploy a fully tested and fully functional version of each application at a moment’s notice, with the ability to roll quickly back to a previous version.
Our automated delivery process began with continuous integration. We required the Web Designers to integrate code into a shared repository several times a day and enforced the frequency of code check-in. The continuous integration server verified each check-in through an automated build, allowing the team to detect problems early. Following the Agile practice of continuous testing, we also ran a suite of automated regression and unit tests at every build. This allowed us to find regression or integration issues early before they became a technical debt or buried under hundreds of other code changes. Continuous integration and testing not only improved the quality of the system, but also provided the added benefit of informing the Product Owner if a particular version was deployable. IMC used Jenkins and Maven for continuous integration and to automate the execution of test scripts in Selenium. 
The Web Designers used the pair programming technique, working in tandem to build the code for the prototype. They continuously conducted review sessions with the Product Owner and the Technical Architect to make sure the prototype matched the requirements. They involved the Visual Designer while designing the website to match the mockups created. The Business Analyst coordinated with both the Web Designers and Product Owner to make sure the user stories reflected the prototype being built. The Documentation Specialist worked with team members to document all activities. The Documentation Specialist also created the Readme file and other supporting documentation and ensured it was committed into the Git repository. The Agile Coach monitored each of these activities, providing support and removing obstacles when needed.
**Testing**
The Testers worked with the Web Designers and the Business Analyst to create Test Cases from the User Stories. All the Test Cases are linked to the User Stories to maintain traceability. Unit, functional, system, integration and regression tests are performed. Zephyr, a JIRA plug in tool, is used for test case development and execution. The manual tests performed during the sprints are automated with Selenium. The Testers discuss an issues or defects found during testing with the Web Developers and enter them into  JIRA. 
**Implementation**
IMC uses an Amazon Web Services (AWS) EC2 instance as the base infrastructure to deploy the prototype. Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS and IMC ensures application and data level security. The website runs on HTTPS protocol over SSL. For source code control, IMC team used Github as the repository to deliver the code and associated artifacts to GSA. 
**Full Stack Pool Evidence**
We describe below how we have met all of the evaluation criteria (a to q) for the Full Stack Pool. Supporting evidence is provided in the GitHub repository via the link provided above. 
The structure of the GitHub repository evolved with each meeting conducted. We met early on and crafted the structure of the repository and then refined the structure daily. We created three main folders: 

 - WebContent contains the code
 - Documentation contains all the supporting documents and evidence for the work performed
 - Test contains all of the test scripts 
 - Attachment E further provides direct links to each specific item of evidence.
	 - a, b. We assigned a Certified Scrum Master and Project Management Professional as the leader with full authority and responsibility. He is accountable to the Vice President of Technology to the quality of the prototype. We assembled a fully qualified team of 11 resources across 9 of the 13 labor categories to form a multidisciplinary and collaborative team comprised of an Agile Coach, a Product Manager, a Technical Architect, two Testing Specialists, a Senior Documentation Specialist, a Graphics Specialist, two Senior Web Designers, a Senior Web Developer, and a business analyst. 
	 - c. We included our NIDA Client and our Product Manager, an expert in serious adverse events from the IMC Health and Life Sciences group, in information gathering, user story creation, and the prototype development and design process. 
	 - d. Our human-centered designed techniques and tools included:
		 - Establishing a JIRA instance as a collaboration tool for the team to communicate and understand needs, and to log product backlog, work performed, and issues found; 
		 - Gathering requirements for user stories; 
		 - Creating wireframes in WIX; 
		 - Using an iterative approach with the Product Manager and NIDA Client for continuous improvement.
	 - e. Our Web Designers followed the Style Guide developed by our Visual Designer and designed with the user in mind. We created bright, clean, and easy -to -find and use buttons for search filters.
	 - f. Usability tests were continuously performed by testers and casual users, independent of the development team. 
	 - g. We followed an agile approach which enabled the testers, Product Manager, and NIDA Client to provide inputs/feedback to the design and development teams at key points in the process.
	 - h. The prototype design is responsive and compatible with iPhone and Android mobile devices.
	 - i, q. We also used modern, free of charge open-source technologies in the prototype including: 
		 - Apache Tomcat
		 - Selenium
		 - Bootstrap
		 - CSS framework
		 - BootSwatchr.com
		 - D3.js.org
		 - Eclipse
		 - git
		 - jQuery/jQueryUI
		 - Jenkins, and 
		 - OpenSSL
	 - j, o. IMC is using an Amazon Web Services (AWS) EC2 instance as the base infrastructure to deploy the prototype. We leveraged AWS IaaS and used AWS Amazon Machine Image to launch an instance in a container. Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS. The website runs on HTTPS protocol over SSL.
	 - k, l. The Web Developers wrote and executed unit tests for functionality code checking. We used Selenium, Maven, and Jenkins for continuous integration and automated test execution.
	 - m, n. We set up GitHub as the repository for configuration management. Continuous monitoring and alerts were enabled by AWS tools.
	 - p. Missing

About IMC
---------

Information Management Consultants (IMC) was founded in 1981 with headquarters in Reston, Virginia. IMC has proudly served the Federal government and private sector for more than 34 years, applying information technology to develop, automate, and improve mission critical business processes, especially enterprise content management systems, as well as back office support systems. IMC has developed large and small projects using waterfall, agile, or hybrid processes as required by our clients. IMC has provided web development services to the Food and Drug Administration since 2002. IMC has provided Agile development to clients since 2007 using Scrum, Kanban, ScrumBan, and Extreme Programming techniques. We have matured our processes and delivery options as the industry has evolved. We have operated in client and IMC hosted environments, and now also operate in the public cloud as an Amazon Web Services (AWS) consulting partner. 
