async function loadUserProfile(userId) {

    // Fetch from 
    const response = await fetch(
  `https://jsonplaceholder.typicode.com/users/${userId}`
);

     // Log the user's name and email if successful

     if (!response.ok) {
        throw new Error ("User's email not found");
     }

     const user = await response.json();


     console.log("name:", user.name);
     console.log("email:", user.email);
  
}
 loadUserProfile(1);

