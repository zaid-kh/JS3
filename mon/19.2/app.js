const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
/** 1. Loop over the array with the forEach method and
    dynamically create an ordered list of the first and last
    names of the objects.
    2. Remove the bullet points of the ordered list with
    JavaScript.
    3. Create a custom data attribute called “data-id” and attach
    the id value to each li.
 */
const usersContainer = document.getElementById("users-container");

const usersList = document.createElement("ol");
usersList.style.listStyleType = "none";
usersContainer.appendChild(usersList);

users.forEach((user) => {
  const li = document.createElement("li");
  li.innerText = user.firstName + " " + user.lastName;
  li.setAttribute("data-id", user.id); // assign new attribute with userid as value
  usersList.appendChild(li);
});
