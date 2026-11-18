//  step 1: create a list of users
// step 2: implement filter and search functionality

let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
  },
  {
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Emily Davis",
    email: "emily.davis@example.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";

  arr.map((obj) => {
    let { img, name, email } = obj;
    let element = document.createElement("div");
    element.innerHTML = `
    <div class="userItem">
            <img
              src=${img}
              alt="User 1"
            />
         <div>
              <h3>${name}</h3>
              <p>${email}</p>
            </div>
     </div>
  `;

    userContainer.append(element);
  });
}
renderUsers(users); // initial render of all users
function handleSearch(e) {
  let searchValue = e.target.value;
  let filteredUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  renderUsers(filteredUsers);
}

searchInput.addEventListener("input", handleSearch);
