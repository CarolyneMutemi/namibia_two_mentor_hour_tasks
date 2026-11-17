async function fetchWithRetry(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Succeeded on attempt ${attempt}`);
      return data;
    } catch (error) {
      console.log(`Attempt ${attempt} failed`);
      if (attempt === retries) {
        console.log('All attempts failed');
        throw error;
      }
    }
  }
}

async function handleLoadButtonClick() {
  console.log("Loading..."); 
  
  try {
    
    const result = await fetchWithRetry('https://jsonplaceholder.typicode.com/users/1');
    console.log("Done!", result); 
  } catch (error) {
    console.log("Error loading data:", error);
  }
}

handleLoadButtonClick();