var yengililar = [
{
  id: 1,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a!",
  sana: "16.06.2021",
},
{
  id: 2,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a!",
  sana: "16.06.2021",
},
{
  id: 3,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a!",
  sana: "16.06.2021",
},
{
  id: 4,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a, orqaga qaytish yo'q !",
  sana: "16.06.2021",
},
{
  id: 5,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a!",
  sana: "16.06.2021",
},
{
  id: 6,
  img: "https://picsum.photos/400/400",
  sarlovha: "Nmani rasimi ?",
  text: "Bugun zo'r kun, bunaqa kun boshqa bo'midi, bugunni qadriga yeting, faqat oldinga qadam tashen, faqat olg'a!",
  sana: "16.06.2021",
},
]

var body = document.querySelector('body');
var newDiv = document.createElement("div");
var newUl = document.createElement("ul");

newDiv.className = "container";
newUl.className = "card";

body.appendChild(newDiv);
newDiv.appendChild(newUl);

for(var i = 0; i < yengililar.length; i++){
  
  var newLI = document.createElement("li");
  var newImg = document.createElement("img");
  var newH = document.createElement("h3");
  var newTextP = document.createElement("p");
  var newSanaP = document.createElement("p");
  
  newImg.src = yengililar[i].img;
  newH.textContent = yengililar[i].sarlovha;
  newTextP.textContent = yengililar[i].text;
  newSanaP.textContent = yengililar[i].sana;
  
  newLI.className = "card__list";
  newImg.className = "card__img";
  newH.className = "card__header";
  newTextP.className = "card__text";
  newSanaP.className = "card__date";
  newUl.appendChild(newLI);
  newLI.appendChild(newImg);
  newLI.appendChild(newH);
  newLI.appendChild(newTextP);
  newLI.appendChild(newSanaP);
}

for (var i = 1; i <= 100; i++) {
if(i%2 !== 0){
  console.log(i)
}
}

for (var i = 0; i <= 100; i++) {
if (i%5 == 0 && i%3 == 0) {
  console.log("Fizz Buzz")
} else if(i%3 == 0){
  console.log("Fizz") 
}else if (i%5 == 0) {
  console.log("Buzz");
}else{
  console.log("Qogani");
}
}
