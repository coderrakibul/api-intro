function loadData(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(data => console.log(data))
};


// akhane funciton ta ke call kora hoyece
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
};

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
};

// akhane function create kore parameter ta ke pathano hoyece
function displayUsers(users){
    const ul = document.getElementById("users-name");
    for(const user of users){
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerText = `Name: ${user.name} Email: ${user.email}`;
    ul.appendChild(li);
    }
}