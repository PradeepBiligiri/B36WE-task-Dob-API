// fetch("https://dog.ceo/api/breeds/list/all")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
  //   console.log(data);
}

start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
<select onchange ="loadByBreed(this.value)">
  <option>Choose a dog breed</option>
  ${Object.keys(breedList)
    .map((breed) => {
      return `<option>${breed}</option>`;
    })
    .join("")}
</select>`;
}

async function loadByBreed(breedDetails) {
  if (breedDetails != "Choose a dog breed") {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedDetails}/images`
    );
    const data = await response.json();
    console.log(data);
    createSlideshow(data.message);
  }
}

function createSlideshow(images) {
  document.getElementById("slideshow").innerHTML = `

  <div class="slide" >
  <img Src="${images[0]}"/>
  </div>
  <div class="slide" >
  <img Src="${images[1]}"/>
  </div>
  `;
  console.log(images);
}

// function createSlideshow(images) {
//   let currentPosition = 0;
//   document.getElementById("slideshow").innerHTML = `

//   <div class="slide" >
//   <img Src="${images[0]}"/>
//   </div>
//   <div class="slide" >
//   <img Src="${images[1]}"/>
//   </div>
//   `;
//   currentPosition += 2;
//   setInterval(nextSlide, 30000);

//   function nextSlide() {
//     document.getElementById("slideshow").insertAdjacentHTML(
//       "beforeend",
//       `<div class="slide" >
//     <img Src="${images[currentPosition]}"/>
//     </div>`
//     );
//     setTimeout(() => {
//       document.querySelector(".slide").remove();
//     }, 1000);
//     if (currentPosition + 1 >= images.lenghth) {
//       currentPosition = 0;
//     } else {
//       currentPosition++;
//     }
//   }
//   console.log(images);
// }
