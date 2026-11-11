export async function loadUserProfile(userId) {
  
  // fetch user data from the API using the provided userId
  const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // check if the response is successful
    if (!response.ok) {
        throw new Error("User not found");
    }

    const user = await response.json();

    console.log("name:", user.name);
    console.log("email:", user.email);

    return user;
  }