README
======= 
Prototype URL: [https://www.rxeffex.com](http://www.rxeffex.com)

Git repository URL: [https://github.com/amathur09/imc18f](https://github.com/amathur09/imc18f) 

Prototype Name/Version: **RxEffects** v.0.50

Last update: 7/6/2015

Company: Information Management Consultants, Inc. (IMC)
IMC PROTOTYPE: **RxEffects**
---------------------

IMC agile team has built our prototype for 18F, RxEffects, in the drug adverse events reporting domain. Our prototype uses the FDA dataset for adverse events to expand the current search functionality of the FDA site. It enables the public to search drug adverse events by drug name, significance, and/or serious outcomes, returning graphical results showing the number of records matching the filters chosen. Guided by user community feedback as well as our understanding, we developed this website on the commitment to transparency through effective communication. We envision three main user groups of the website – Consumers, Researchers, and Medical Professionals – each group with unique needs for data types, availability, and presentation.
This prototype focuses on the Consumer as user. The home page welcomes the user with a description of the purpose and function of the website. The user selects the secondary Consumer page and interacts with the user interface to obtain the data of interest, entering the name of the drug to be searched, if applicable, and applying additional filters to learn the most frequent adverse effects by level of significance and serious outcome.
TECHNICAL APPROACH
---------------------

Our team followed The US Digital Playbook to the maximum extent possible and appropriate for this project. We used an agile scrum methodology supported by Atlassian JIRA as the team’s primary collaboration tool for managing the Product Backlog, logging work performed, and recording and tracking issues. The team also used HipChat for communications. We held a launch meeting with the assigned team members, proposal managers, and operations leader to review the objectives of the prototype and established a schedule. We conducted Sprint Planning based on the Product Backlog, selecting User Stories by business value and story points. Our Leader/Agile Coach led Daily Stand Up Meetings and Sprints Reviews for Sprints 1 and 2, adding Sprint 2a to leverage the additional time afforded by the due date extension. We dedicated a War Room to the team for Daily Stand Ups, Sprint Reviews, feedback sessions with the User Community Representative (UCR) and Product Manager, and ad hoc meetings of team members.

IMC engaged a former division chief at the National Institutes of Health with subject matter expertise in drug adverse events as our UCR. Our Product Owner reviewed patientslikeme.com to understand the current state of consumer-reported adverse events on a social media site. Our team conducted a requirements gathering session with the Product Owner and UCR, where they described the functionality of the prototype to the Developers and Architect to ensure its viability. The Analyst worked with the Product Owner to develop User Stories, while the Visual Designer collaborated with the Developers to create mockups of the graphical user interface based on the Style Guide, used by the Developers to design the website. The team collaborated with the UCR by reviewing the prototype and enabling feedback. The prototype was refined routinely with each iteration of feedback from the UCR, Product Owner, and Developers.

Each page of the website was designed with the user in mind, with easy-to-use navigation, menu bars, and text entry. The website is clean and simple in its design, enabling the user to quickly grasp how to interact with the site and retrieve their desired results. Images on the site were selected based on subject relevance and used to add visual continuity to each page.

Our automated delivery process included a basic continuous integration process dependent on the Developers committing objects and software code to the Git repository routinely and frequently. The continuous integration process completed and deployed an automated build for each commit to include automated Selenium testing. Through continuous integration and testing, the team continually improved the quality of the prototype. IMC used Jenkins for continuous integration and automating the execution of test scripts in Selenium.

The Developers used the pair programming technique, working in tandem to build the code for the prototype and serving as code review. They continuously conducted review sessions with the Product Owner and Architect to ensure the prototype met the requirements. They followed the Style Guide and collaborated with the Visual Designer in designing the website to match the mockups created. The Analyst coordinated with both the Developers and Product Owner to ensure the User Stories reflected the prototype as built. The Documentation Specialist worked with team members to document all activities, create the Readme file and other supporting documentation, and ensure documentation was committed to the Git repository. Our Leader/Agile Coach monitored each of these activities, providing coaching and removing obstacles when needed.

The Testers worked with the Developers and Analyst to create Test Cases linked to User Stories for traceability. Unit, functional, system, integration, usability, and regression tests were performed. We used Zephyr, a JIRA plug-in, for test case development and execution. As issues or defects were found, the Testers discussed them with the Developers before entering them in JIRA.

IMC uses an Amazon Web Services (AWS) EC2 instance as the base infrastructure to deploy the prototype. Infrastructure level security controls including FedRAMP and FISMA are satisfied by AWS and IMC ensures application and data level security. The website runs on HTTPS protocol over SSL. Our team used GitHub as the repository to deliver the source code and associated documentation/evidence to 18F.

**Full Stack Pool Evidence**
We describe below how we meet all of the evaluation criteria (a to q) for the Full Stack Pool. Supporting evidence is provided in the GitHub repository via the link provided above. Attachment E provides the direct links to each specific item of evidence, consisting of documents, screen shots, photographs, and videos.
Our team crafted the GitHub repository structure early on, creating five main folders: 

 - WebContent contains the code
 - Documentation contains all the supporting documents and evidence for the work performed
 - Test contains all of the test scripts 
and results
 - Drivers contains Selenium  drivers
 - Lib contains Jenkins variables passed to Selenium.
	 - a, b. We assigned a Certified Scrum Master and Project Management Professional as the Prototype Leader/Agile Coach with full authority, responsibility, and accountability to the IMC Vice President of Technology for the quality of the prototype. We assembled a fully qualified team of 10 resources across 9 labor categories to form a multidisciplinary and collaborative team comprised of a Leader/Agile Coach, Product Manager, Architect, Developers, Testers, Documentation Specialist, Visual Designer, and Analyst. All roles report directly to the Leader/Agile Coach.
	 - c. We included our Product Manager and UCR in information gathering , User Story creation, and the prototype development and design process.
	 - d. Our human-centered designed techniques and tools included:		 - Using JIRA as a collaboration tool for the team to communicate and understand needs, and to log Product Backlog, work performed, and issues found;	 - Gathering requirements for user stories; 
		 - Creating website mockups; 
		 - Using an iterative approach with the Product Manager and UCR for continuous improvement.
	 - e. Our Developers followed the Style Guide developed by our Visual Designer with the user in mind.
	 - f. Usability tests were continuously performed by testers and casual users, independent of the development team. 
	 - g. We followed an agile approach which enabled the Testers, Product Manager, and UCR to provide continuous inputs/feedback to the team throughout the process.
	 - h. The prototype design is responsive and compatible with iPhone and Android mobile devices.and compatible with iPhone and Android mobile devices.
	 - i, q.  We used the following modern, free-of-charge open-source technologies in the prototype:		 - Apache Tomcat
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
	 - j, o. IMC used an AWS EC2 instance as the base infrastructure to deploy the prototype. We leveraged AWS IaaS and used AWS Amazon Machine Image to launch an instance in a Docker container. AWS infrastructure level security controls meet FedRAMP and FISMA requirements. The website runs on HTTPS protocol over SSL.
	 - k, l. Our Developers wrote and executed unit tests for functionality code checking. We used Jenkins and Selenium for continuous integration and automated test execution.
 
	 - m, n. We used GitHub for configuration management. Continuous monitoring and alerts were enabled by AWS tools for CPU utilization and failure of any status check 
	 - p. Our Developer created a document describing the steps to deploy the prototype on another machine.

About IMC
---------

Information Management Consultants (IMC)[http://www.imc.com] (http://www.imc.com), headquartered in Reston, Virginia, has applied information technology to develop, automate, and improve mission critical business processes of our government and private sector clients since our founding in 1981.  IMC has embraced agile methods including Scrum, Kanban, ScrumBan, and Extreme Programming techniques since 2007. We have delivered projects of varying scales using waterfall, agile, or hybrid processes, maturing our processes and delivery options as the industry has evolved. We support client and IMC-hosted environments, and also operate in the public cloud as an AWS consulting partner. 
