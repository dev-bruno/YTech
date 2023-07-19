FRONTEND TRAIL

This is a test project for a frontend position at Ytech company.

It consists of implementing a simple landing page.

To open the project, just clone the repository to a local folder and open the index.html file in your browser. The style files are already configured in the public/style/styles.css file.

For a new compilation of styles using SASS, it is necessary to have it installed using the command:

npm install -g sass

To compile, go to the public/style directory and run the following command: 

sass styles.scss styles.css

To avoid a new compilation all the time, just run the SASS watch so that it runs whenever there is any change in the file: 

sass --watch styles.scss:styles.css