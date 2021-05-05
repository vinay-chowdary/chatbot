export function search(object, key) {
  // console.log(object, key);

  let searchResult = {
    value: [],
    links: [],
    reqMail: false,
    description: "",
  };
  let hasOptions = false;

  if (object === key) {
    searchResult.value = object.options;
    return searchResult;
  }
  Object.keys(object).some(function (k) {
    // console.log("k = ", k, " ,key = ", key);
    if (["options", "requireMail", "link", "description"].includes(String(k)))
      return false;
    if (k === key) {
      if (typeof object[k] === "object") {
        searchResult.reqMail = object[k].hasOwnProperty("requireMail");
        hasOptions = object[k].hasOwnProperty("options");
        const link = object[k].hasOwnProperty("link");
        if (link) searchResult.links.push(object[k].link);
        const hasDescription = object[k].hasOwnProperty("description");
        if (hasDescription) searchResult.description = object[k].description;

        if (hasOptions) {
          searchResult.value = object[k].options;
          searchResult.addListener = true;
        }
        if (object[k].hasOwnProperty("link")) {
          searchResult.links.push(object[k].link);
        }
      }

      return true;
    }
    if (object[k] && typeof object[k] === "object") {
      searchResult = search(object[k], key);
      return searchResult.value.length !== 0;
    }
  });
  return searchResult;
}
