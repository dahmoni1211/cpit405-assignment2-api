async function getUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
  
    const card = `
      <img src="${user.picture.large}" alt="User Image" width="100">
      <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
      <p>Email: ${user.email}</p>
      <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
  
    document.getElementById('user-card').innerHTML = card;
  }
  
  // Load initial user
  getUser();
  