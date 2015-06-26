
IMC’s prototype is being delivered as a web portal http://www.rxeffex.com and associated artifacts located in a Git repository at https://github.com/amathur09/imc18f 

Information Management Consultants (IMC) is a large company founded in 1981 with headquarters in Reston, Virginia. IMC has proudly served the Federal government and private sector for more than 34 years, applying information technology to develop, automate, and improve mission critical business processes, especially enterprise content management systems, as well as back office support systems. IMC has developed large and small projects using waterfall, agile, or hybrid processes as required by our clients. We have matured our processes and delivery options as the industry has evolved. 
IMC project management practices are based on PMBOK and are strongly influenced by the requirements of the Capability Maturity Model Integrated and the standards established by the International Organization for Standardization.
IMC follows proven DevOps industry best practices to remove the friction between developing and releasing code. Our automated delivery process begins with continuous integration. We require developers to integrate code into a shared repository several times a day and enforce the frequency of code check-in. Following the Agile practice of continuous testing, we also run a suite of automated regression and unit tests at every build.

IMC used an Amazon Web Services (AWS) EC2 instance as base infrastructure to deploy the prototype. Infrastructure level security controls including FedRAMP and FISMA were satisfied by AWS and IMC ensured application and data level security. The website runs on HTTPS protocol over SSL. For source code control, IMC team used Git as the repository to deliver the code and associated artifacts to GSA. To follow IMC’s agile practices, our team used JIRA to log product backlog, work performed, issues found and as overall collaboration tool among the team members. IMC used Zephyr as test management platform and Selenium as test automation tool. IMC is used Jenkins and Maven for continuous integration and to execute automated tests.
IMC team has built a prototype website for 18F in Adverse Events reporting domain. The website shows a page with a menu of options for consumers. Choosing the option to search for the top 5 most frequent events for a drug provides the user with an auto-complete box in which the user can enter the drug name. On entering the drug name a graph is displayed that shows the top 5 frequent events for that drug. In addition to this, the user has two filters : seriousness and outcome. The user can indicate significance of the event by selecting either serious or non-serious. Next, the user can choose an outcome from the options provided and then click on generate graph. The graph is automatically updated based on the filters chosen. 
The website is clean and simple in its design so as not to overwhelm the user and to assure the user gets to the right place in the least amount of time. Each page was designed with the user in mind, easy-to-use navigation, menu bars and text entry for visual representation of the data.  Wireframes of the design were created using a web builder platform. The images were selected based on subject relevance 

The home page welcomes the user and provides descriptive text to explain the purpose and function of the website.  Once the user has read through it they then use the main menu to select which secondary page applies to them.  Under the consumer page, the user will read text that explains the process for obtaining the data that is relevant to them by asking them to input the name of the drug they are taking and then to apply additional filters to learn the most frequent adverse effects from said drug as well as the outcomes from the adverse effect (i.e. death, hospitalization etc.).  We created bright, clean, and easy -to -use and find buttons for generating content which is a horizontal bar graph that displays the number of records that match the drug name and the filters chosen.

An Agile development and test methodology was followed to create Epics from the Use Cases.  The Epics were used to create User Stories. Testers used the User Stories to generate test cases. All the test cases were linked to the user stories to keep traceability. Unit, functional, system, integration and regression testing were performed. Zephyr, a JIRA plug in tool was used for test case development and execution. The manual tests performed during the sprint were automated with Selenium. Defects were tracked in Jira.

File X shows the assignment of labor categories and responsibility for the prototype. 
File GSA Agile Services RFQ IMC Response Team.doc provides evidence that IMC followed the guidelines in Pool Three 
File X contains evidence for the Interviews, Daily progress reports, WebEx meetings that were conducted to involve people in building the prototype.
Files X and Y show the use of WIX to create wireframes, discussions with NIH adverse event customer and the use of iterative approach.
File X shows the style guide for the user interface that the developers followed
File X shows how the agile approach enabled feedback in subsequent versions.
File X demonstrates the use of HTML5 and JavaScript to create responsive web designs that work on multiple devices. 
File X demonstrates the use of modern and open source technologies like Tomcat, Git, Maven, Java, JavaScript, HTML5 and Selenium.
File X shows how IMC leveraged Amazon Web Services IaaS for the prototype
File X demonstrates the use of continuous integration system, automated test runs and continuous deployment of code to IaaS / PaaS provider
File X demonstrates the use of AWS tools for monitoring and alerts
File X demonstrates the use of AWS Amazon Machine Image to deploy software in a container
File X shows the  agile approach enabled feedback in subsequent versions.
File X shows the creation of documents to support the installation of the prototype on another machine
File X shows the free and open source technologies used
All the files mentioned above can be found at https://github.com/amathur09/imc18f/tree/master/documentation
16 The source code at https://github.com/amathur09/imc18f/tree/master/WebContent demonstrates the use of API from open.fda.giv
13 File X at https://github.com/amathur09/imc18f  demonstrates the use of GitHub for configuration management 
11 File X at https://github.com/amathur09/imc18f/tree/master/tests  contains test scripts that the developers wrote for checking functionality
6 File X at https://github.com/amathur09/imc18f/tree/master/tests demonstrates how usability tests were conducted with people  
