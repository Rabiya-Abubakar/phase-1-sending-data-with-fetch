function submitData(name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const newId = data.id;
        const body = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.textContent = newId;
        body.appendChild(idElement);
  
        return data;
      })
      .catch(error => {
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        body.appendChild(errorElement);
  
        console.error('Error:', error);
      });
  }
  
  // Example usage
  submitData("Rabz", "rabz@123.com");
  