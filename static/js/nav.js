export const createNav = (list, links = []) => {
  console.log("links ", links);
  const nav = document.createElement("nav");
  nav.classList.add("menu");
  const ul = document.createElement("ul");
  ul.classList.add("menu-list");
  nav.appendChild(ul);
  const listItems = list.map((listItem, index) => {
    const li = document.createElement("li");
    li.classList.add("menu-item");
    const a = document.createElement("a");
    a.classList.add("menu-link");
    if (links.length != 0) a.href = links[index];
    a.setAttribute(
      "id",
      `${listItem.replace(/ /g, "")}-${new Date().getTime()}`
    );
    a.innerText = listItem;
    console.log(a);
    li.appendChild(a);
    return li;
  });
  listItems.forEach((listItem) => {
    ul.appendChild(listItem);
  });
  return nav;
};
