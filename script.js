var namesList = document.getElementById("names");
names = ["Samantha", "Reese", "Kelly", "Erin", "Darciea"];

countNames = (data) => {
  var count = document.getElementById("counter");
  

  if (data) {
    count.innerHTML = "There are a total of " + data + " names:";
  } else {
    count.innerHTML = "No name";
    document.getElementById("name").style.display = "none";
  }
};
// Read: GET
getNames = () => {
  var data = "";
  if (names.length > 0) {
    for (i = 0; i < names.length; i++) {
      data += "<tr>";
      data += "<td>" + names[i] + "</td>";
      data += '<td><button onclick="editName(' + i + ')">Edit</button></td>';
      data +=
        '<td><button onclick="deleteName(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countNames(names.length);
  return (namesList.innerHTML = data);
};
// Create: POST
addName = () => {
  var NameAdded = document.getElementById("add-name");
  // Get the value
  var name = nameAdded.value;

  if (name) {
    // addCountry the new value
    names.push(name.trim());
    // Reset input value
    nameAdded.value = "";
    // Dislay the new list
    getNames();
  }
};
// Update: PUT
editName = (item) => {
  var editName = document.getElementById("edit-name");
  // Display value in the field
  editName.value = names[item];
  // Display fields
  document.getElementById("editForm").style.display = "block";

  document.getElementById("saveEdit").onsubmit = () => {
    // Get value
    var name = editName.value;
    if (name) {
      // editCountry value
      names.splice(item, 1, name.trim());
      // Display the new list
      getNames();
      // Hide fields
      closeInput();
    }
  };
};
// Delete: Delete
deleteName = (item) => {
  // deleteCountry the current row
  names.splice(item, 1);
  // Display the new list
  getNames();
};

getNames();

closeInput = () => {
  document.getElementById("editForm").style.display = "none";
};
