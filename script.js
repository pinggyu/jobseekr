// Initialize API preset data in the dedicated properties:
// - apiURL
// - apiKey
// - appID (this is specific to Adzuna)

const id = config.APP_ID;
const key = config.API_KEY;

// PSEUDOCODE
// Create an app object (jobApp)

const jobApp = {};

// fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=' + id + '&app_key=' + key + '&what=developer&where=toronto&company=RBC')
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (jsonData) {
//         console.log(jsonData);
//         jobApp.displayJobs(jsonData.results);
//     })

jobApp.displayJobs = (jobs) => {
    jobs.forEach(job => {
        console.log(job);

        const listItem = document.createElement('li');

        const jobTitle = document.createElement('p');
        jobTitle.textContent = job.title;
        const jobLocation = document.createElement('p');
        jobLocation.textContent = job.location.display_name;
        const jobCompany = document.createElement('p');
        jobCompany.textContent = job.company.display_name;

        // append the job text as a child of the list item
        listItem.appendChild(jobTitle);
        listItem.appendChild(jobLocation);
        listItem.appendChild(jobCompany);

        document.getElementById('jobsList').appendChild(listItem);
    })
}

// Create an init method to kick off the setup of the application
// - calls getUserQuery to determine what parameters to request info from the API
// - call getJobs(jobTitle, company and location) to pull information on what jobs available
// - call displayJobs(results) to display all jobs meeting criteria set by user

// jobApp.init = function() {
//     getJobs();
// }

// Create a method (getUserQuery) to update an object (userQuery) with parameters ‘jobTitle’, ‘company’ and ‘location’ based on user input
// jobTitle, company and location are all drop downs
// this method would execute upon the user pressing submit with an event listener on the submit button
// return jobTitle, company and location (these will be used as arguments to call getJobs)


// Create a method (getJobs) which requests information from the API, based on what parameters the user set for jobTitle, company and location
// Retrieve info on each job: jobTitle, company, location and redirect URL (to apply)
// When the API call is successful, create an results list object to store all the jobs and return that object, it will be passed on as argument to displayJobs
// If the API call fails, display an error message 

// getJobs(){

// }

// Create a method (displayJobs) which would display all the jobs returned by the getJobs() method (display the div results)
// loop through the results object and display each job available on a new page (with jobTitle, company, location and redirect URL) with infinite scroll feature
// if no jobs avail meeting criteria, display a message saying so
// have an event listener on a ‘back’ button to return to search parameters page

