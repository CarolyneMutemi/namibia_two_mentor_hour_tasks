async function loadDashboard(userId) {
  try {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json());

    const albumsPromise = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(res => res.json());

    const [user, albums] = await Promise.all([userPromise, albumsPromise]);

    console.log("User:", user);
    console.log("Albums:", albums);

  } catch (error) {
    console.error("Error:", error);
  }
}

loadDashboard(1);