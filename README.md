## A blog app with database system that stores the following information.

#	Blog description: 
It includes blog content, date and time for blog, author of blog etc.

#	User details:
It includes user name, password, email-id, blogs etc.

##	Product Functions
This product can be useful in the replacing the newspaper articles to save the nature.

-	Login module 
-	Registration module 
-	Show Blogs list
-	Create / edit / update / delete blogs
-	Search blogs based on title, author or dates
-	Markdown syntax for blog content

##	User Classes and Characteristics
-	Users:
	Users can access the blogs.
	Users can sign up for new account.
	Users can create, delete, update posts(blogs).

##	Operating Environment
This website will work on any platform which have integrated browser and internet support.
It works on major browsers like chrome, Firefox, safari, edge etc. Works with many operating systems like windows, Linux and macOS.

##	Design and Implementation Constraints
Blog app is a Web application, so user needs to use any kind of browsers and also need internet. When users or merchants use legacy browser then the UI of website sometime does not work. Software maintenance will be available from our side without any charges.

##	Assumptions and Dependencies
While developing this product we assumed following factors. 
• User will have any kind of smart device like laptop, pc or smartphone. 
• All these devices are capable to run modern browsers. 
• User will have internet connection. The project could be affected if any of these assumptions are incorrect.

##	External Interface Requirements
###	User Interfaces
Since Blogging system is a web application, it comes with user friendly and easy to use user interface. It comes with easy navigation without any learning curve.

-	Front-end software: Angular, Html, CSS, JavaScript
-	Back-end software: Mongo DB, Node js

###	Hardware Interfaces
-	A browser which supports HTML & JavaScript.
-	As a hardware we need smart devices which can easily run any modern web browsers. To communicate with data in the system user need good internet connection

###	Software Interfaces
Following are the software used for the blogging system.
Operating system - Linux, windows or macOS.
Database - To save the blogs content, passengers records we have chosen Mongo database.
For the communication of the data user must require internet connection.

###	Communications Interfaces
This project supports all types of web browsers. We are using simple forms for the login, signup etc.

####	System Features
Blog Site provides services to add, remove and updating of the post with access control. The site saves the time of author by giving the lots of feature on hand.
#	Functional Requirement
#	Show Blogs list
	Input: button click
	output: List of posts with the link to respective post page.
	description: To list down all the post on the home page of the site. 
	precondition: There is no need to log in to as blogs must be available to all users.
	
#	Search blogs

input: search query as a string. 
output: Success or Failure. 
process: search based on user query and show matching blogs.
	precondition: There is no need to log in to as blogs must be available to all users.
	
	
#	Login
	input: Username and Password. 
	output: Success or Failure. 
	description: User can use this page to login to the system by entering personal credentials (username and password) and will be redirected to a home page based on role to use the features of the website. 
	process: Check the username and matching password in the database. If found in the database then redirect the user to his/her home page. 
	precondition: User must be registered on the website. 
	postcondition: User is logged in to the website and a new session is associated with the client connection.
	
#	Registration
	input: User needs to fill up the registration form. 
	output: Success or Failure based on availability. 
	process: If data are valid, make changes to database otherwise handle appropriately. 
	postcondition: User is logged in to the website and a new session is associated with the client connection.

#	Add Blog

input: User needs to fill up the from containing info like title, description, content etc. 
output: Success or Failure. 
description: This feature is used to add new blog. 
precondition: User must be login on the website.
process: If validation is successful, make changes to database otherwise handle appropriately. 
postcondition: An alert is displayed based on success or failure. If success, post will be added.

#	Update Blog

input: User needs to fill up the from containing info like title, description, content etc. 
output: Success or Failure. 
description: This feature is used to add new post by the user.
precondition: User must be login on the website
process: If validation is successful, make changes to database otherwise handle appropriately. 
postcondition: An alert is displayed based on success or failure. If success, post will be updated.

#	Delete Blog

input: User click. 
output: Success or Failure. 
precondition: User must be login on the website.
process: If validation is successful, make changes to database otherwise handle appropriately.
postcondition: An alert is displayed based on success or failure. If success, post will be removed.	

#	Logout

input: button click. 
output: Success or Failure. 
process: Session is destroyed and user is redirected to home page. 
precondition: User must be logged in the website

