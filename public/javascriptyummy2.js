//For bookmarks
function addBookmark(category, name, link) {
  let accountString = JSON.parse(localStorage.getItem("accs"));
  let bminside = Object.keys(accInside);
  console.log(bminside[0]);
  let accountname = bminside[0];

  const exists = accountString[accountname].bookmarks[category].some(item => item.name === name);
  if (exists) {
    alert("You have already bookmarked this index entry!");
    return;
  }

  accountString[accountname].bookmarks[category].push({ name, link });

  localStorage.setItem("accs", JSON.stringify(accountString));

  alert("Bookmark saved!");
}

document.addEventListener("DOMContentLoaded", function () {
  loadBookmarks();
});

function loadBookmarks() {
  let accountString = JSON.parse(localStorage.getItem("accs"));
  let bminside = Object.keys(accInside);
  console.log(bminside[0]);
  let accountname = bminside[0];

  displayCategory(accountString[accountname].bookmarks.characters, "listcharacters", "characters");
  displayCategory(accountString[accountname].bookmarks.bosses, "listbosses", "bosses");
  displayCategory(accountString[accountname].bookmarks.charms, "listcharms", "charms");
}

function displayCategory(items, listId, category) {
  const ul = document.getElementById(listId);

  ul.innerHTML = "";

  if (!items || items.length === 0) {
    ul.innerHTML = "<li>No bookmarks yet.</li>";
    return;
  }

  items.forEach((item, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = item.name;

    const button = document.createElement("button");
    button.textContent = "Delete Bookmark ❌";
    button.classList.add("delete-btn");
    button.onclick = function () {
      removeBookmark(category, index);
    };

    li.appendChild(link);
    li.appendChild(button);
    ul.appendChild(li);
  });
}

function removeBookmark(category, index) {
  let accountString = JSON.parse(localStorage.getItem("accs"));
  let bminside = Object.keys(accInside);
  let accountname = bminside[0];

  if (!accountString[accountname].bookmarks) return;

  accountString[accountname].bookmarks[category].splice(index, 1);
  localStorage.setItem("accs", JSON.stringify(accountString));

  loadBookmarks();
}