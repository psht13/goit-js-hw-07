const categories = document.querySelectorAll(".item"); //список усіх li

function getAllCategories(element) {
  //витягую довжину зі списку усіх li
  return element.length;
}

function getEachCategoriesValues(element) {
  const data = []; //створюю вихідний масив об'єктів
  element.forEach((item) => {
    const dataTemp = {}; //тимчасовий об'єкт з властивостями
    const categoryTitle = item.querySelector("h2"); //витягую заголовок за селектором тегу

    const categoryElements = item.querySelectorAll("ul li"); //витягую елементи списку за селектором тегу

    dataTemp.title = categoryTitle.textContent;
    dataTemp.elCount = categoryElements.length;
    data.push(dataTemp); //записую тимчасовий об'єкт до масиву
  });
  return data;
}

console.log(`Number of categories: ${getAllCategories(categories)}`);
getEachCategoriesValues(categories).map((el) => {
  console.log(`Category: ${el.title}`);
  console.log(`Elements: ${el.elCount}`);
});
