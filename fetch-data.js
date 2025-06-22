 const dataContainer = document.getElementById('api-data');

 async function fetchUserData() {
 const apiUrl =  'https://jsonplaceholder.typicode.com/users';

 try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = ''; // Clear previous data
    
    const userList = document.createElement('ul');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
 }catch (error){
    dataContainer.innerHTML = "Failed to load user data.";
 }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});