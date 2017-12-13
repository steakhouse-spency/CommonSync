# CommonSync
## Notes: Run code using **app.js**. 
### User Experience
Users should be greeted with our splash page upon visiting our site and be given various options to navigate the page.
Upon signing up or logging in with a previously set up account, users are redirected to our main page 'home.jade' through javascript.
The signin and login pages both use javascript to test and make sure that data entered by the user is valid data for the type of field expected.
Our site keeps track of user sessions via using cookies with javascript.
This page should have an option to search for projects that are already in the database via tags associated with that project.
Originally, we had this functionality split off into its own page, but later decided that because of the idea behind our site, it should be a prominent feature on the home page.
A user can search for any project, regardless of which user created it.
At the top of our home.jade page, users will be able to use a nav bar to navigate various other pages in our site.
If the user chooses to visit the create project page, they will be able to create a project by entering a project owner name, a project description, project tags, as well as a list of project tags.
Upon submitting this form, the data is saved into the database and users can then go back to the home page and search their project.
If the user decides to visit our settings.jade page, they will be able to see their 
If the user decides to visit our profile.jade page, they will be able to see various information about their account that is pulled from cookies and the database using javascript.