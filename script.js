const button = document.getElementById("fetchUser");
const userDiv = document.getElementById("user");
const errorDiv = document.getElementById("error");

button.addEventListener("click", async () => {
    userDiv.innerHTML = "";
    errorDiv.innerHTML = "";
    
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`Network response was not ok ${response.status}`);
        }

        const data = await response.json();

        console.log(typeof data);
        console.log(data);
        const user = data.results[0];

        // Build user card
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "User Image";

        const info = document.createElement("div");
        info.innerHTML = `
            <p><strong>Name:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Location:</strong> ${user.location.country}</p>
            <p><strong>Age:</strong> ${user.dob.age}</p>

        `;

        userDiv.append(img, info);
    } catch (err) {
        console.error("Error fetching user:", err);
        errorDiv.textContent = "Error fetching user data. Please try again.";
    }
});


let ajax = new XMLHttpRequest();

ajax.onload = function() {
    console.log(this.responseText);
}

ajax.open("GET", "https://randomuser.me/api/");
ajax.send();