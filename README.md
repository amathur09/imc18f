# imc18f
# This is the README.md file for imc18f repository
<<<<<<< HEAD
# make all the changes here and make a pull request
=======
Company Introduction
Information Management Consultants (IMC) is a large company founded in 1981 with headquarters in Reston, Virginia. IMC has proudly served the Federal government and private sector for more than 34 years, applying information technology to develop, automate, and improve mission critical business processes, especially enterprise content management systems, as well as back office support systems. IMC has developed large and small projects using waterfall, agile, or hybrid processes as required by our clients. We have matured our processes and delivery options as the industry has evolved. We have operated in client and IMC hosted environments, and now also operate in the public cloud as an Amazon Web Services (AWS) consulting partner. 

Project Management 
The IMC Project Management Methodology is based on the Project Management Institute�s Guide to the Project Management Body of Knowledge, supplemented with specific methodologies defined within our global framework. We employ our methodology whether we are performing software development, network deployment and maintenance, or commercial off the shelf implementations. IMC project management practices are also strongly influenced by the requirements of the Capability Maturity Model Integrated and the standards established by the International Organization for Standardization.
Development Methodology (Agile Methodology)
IMC follows proven DevOps industry best practices to remove the friction between developing and releasing code. Our automated delivery process begins with continuous integration. We require developers to integrate code into a shared repository several times a day and enforce the frequency of code check-in. Following the Agile practice of continuous testing, we also run a suite of automated regression and unit tests at every build. This allows us to find regression or integration issues early before they become technical debt or buried under hundreds of other code changes. Continuous integration and testing not only improve the quality of the system, but also provide the added benefit of informing the Product Owner if a particular version is deployable.

Technology Infrastructure & Architecture 
IMC used an Amazon Web Services (AWS) EC2 instance as base infrastructure to deploy the prototype. Infrastructure level security controls including FedRAMP and FISMA were satisfied by AWS and IMC ensured application and data level security. The website runs on HTTPS protocol over SSL. For source code control, IMC team used Git as the repository to deliver the code and associated artifacts to GSA. To follow IMC�s agile practices, our team used JIRA to log product backlog, work performed, issues found and as overall collaboration tool among the team members. IMC used Zephyr as test management platform and Selenium as test automation tool. IMC is used Jenkins and Maven for continuous integration and to execute automated tests.
User Interface Design
The website is clean and simple in its design so as not to overwhelm the user and to assure the user gets to the right place in the least amount of time. Each page was designed with the user in mind, easy-to-use navigation, menu bars and text entry for visual representation of the data.  Wireframes of the design were created using a web builder platform and then provided to the developers for coding and function requirements. The images were selected based on subject relevance 
The home page welcomes the user and provides descriptive text to explain the purpose and function of the website.  Once the user has read through it they then use the main menu to select which secondary page applies to them.  Under the consumer page, the user will read text that explains the process for obtaining the data that is relevant to them by asking them to input the name of the drug they are taking and then to apply additional filters to learn the most frequent adverse effects from said drug as well as the outcomes from the adverse effect (i.e. death, hospitalization etc.).  We created bright, clean, and easy -to -use and find buttons for generating content which is a horizontal bar graph that displays the number of records that match the drug name and the filters chosen.

Define User Stories
IMC team has built a prototype website for 18F in Adverse Events reporting domain. The website shows a page with a menu of options for consumers. Choosing the option to search for the top 5 most frequent events for a drug provides the user with an auto-complete box in which the user can enter the drug name. On entering the drug name a graph is displayed that shows the top 5 frequent events for that drug. In addition to this, the user has two filters : seriousness and outcome. The user can indicate significance of the event by selecting either serious or non-serious. Next, the user can choose an outcome from the options provided and then click on generate graph. The graph is automatically updated based on the filters chosen. 


Testing 
An Agile development and test methodology was followed to create Epics from the Use Cases.  The Epics were used to create User Stories. Testers used the User Stories to generate test cases. All the test cases were linked to the user stories to keep traceability. Unit, functional, system, integration and regression testing were performed. Zephyr, a JIRA plug in tool was used for test case development and execution. The manual tests performed during the sprint were automated with Selenium. Defects were tracked in Jira.


Delivery
IMC�s prototype is being delivered as a web portal https://www.rxeffex.com and associated artifacts located in a Git repository at https://github.com/amathur09/imc18f 
>>>>>>> 41cb6b14d2fca96fad8424ca2c0a80f19666cd94
