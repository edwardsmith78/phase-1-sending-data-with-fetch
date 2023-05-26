/* API's sending data w/ fetch (POST)

1. Write a function called submitData that takes a name and email.
2. Inside submitData, return a call to fetch().
3. Inside fetch(), POST the inputted name and email to http://localhost:3000/users.
4. Upon successful requests, append the newly created user ID to the DOM.
5. Upon unsuccessful requests, append the generated error message to the DOM.

NOTES

Headers are information about the body
Body is actual data we are sending and it's going to be a json string which is a standardized way to send data
JSON.stringify()  converts javascript objects to strings
line 23: 1st name is asking for a name and 2nd name is to input someone's name same goes with email
.then (response => response.json())
a promise means it will always give you something

*/

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email
    })
}).then(response => response.json())
.then(newUser => {
    // Get ID of newly created user.
    const id = newUser.id;
    // Append the user ID to the DOM.
    const heading = document.createElement("h2")
    heading.textContent = "Just created User #" + id + "1";
    document.body.append(heading);
}).catch(error => {
    // Get generated error message.
    const message = error.message;
    // Append error message to the DOM.
    const heading = document.createElement("h2")
    heading.textContent = message;
    document.body.append(heading);
})
}