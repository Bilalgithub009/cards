var list = document.getElementById("list");
console.log(list)

var fruits = [
  {
    name: "Mango",
    title: "Phalon ka badshah",
    types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
    desc: "garmi ka dushman ",
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Watermelon",
    title: "paani sa bharpor",
    types: ["Green Melon"],
    image:
      "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Peach",
    title: "Juicy Peach",
    types: ["Swat Wala"],
    image:
      "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    image:
      "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
    
  },

  {
    name: "banana",
    title: "protein gainer",
    types: ["sindh ka kela", "bangal ka kela"],
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww",
  },


  {
    name: "strawberry",
    title: "boht hi tasty ",
    types: ["red strawberry"],
    image:
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYWJlcnJ5fGVufDB8fDB8fHww",
  },

  {
    name: "pomegranate",
    title: "boht hi tasty ",
    types: ["red pomegranate"],
    image:
      "https://media.istockphoto.com/id/475373289/photo/pomegranate-seeds.jpg?s=1024x1024&w=is&k=20&c=_vBrHUbTzaydAMFLOK6ttU7lfTKgSvNXVW0b8TZunLM=",
  },

  {
    name: "sapodilla",
    title: "boht hi tasty ",
    types: ["sweet sapodilla"],
    image:
      "https://media.istockphoto.com/id/2149240880/photo/fresh-sapodilla.jpg?s=1024x1024&w=is&k=20&c=rEqGQ54dtOCGpz9EbW80EOGYusXPkXajY_Q_Ht6uZn0=",
  },

  {
    name: "banana",
    title: "protein gainer",
    types: ["sindh ka kela", "bangal ka kela"],
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww",
  },



];



renderData(fruits);




function updateDesc(ele) {
  console.log("ele=>", ele.previousElementSibling);
  console.log("ele parentr=>", ele.parentElement);

  var index = ele.parentElement.id;
  // console.log(index);
  fruits[index].desc = prompt("Desc");
  console.log("fruits-->", fruits);
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class=" lg:w-1/3  sm:w-1/2 p-4">
    <div class="  relative h-[250px]">
    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src=" ${data.image}">
    <div id = ${ind} class="animate__animated animate__backInLeft  px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name}</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button class= "ms-4 px-3 outline-primary bg-blue-500  onclick="updateDesc(this)">update</button>

      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
    renderData(fruits);
    
    
});
}

function renderData(fruits){
  
  list.innerHTML = ""
  fruits.forEach(function (data , ind){
var ele =  `<div class="animate__animated animate__fadeInDown   lg:w-1/3  sm:w-1/2 p-4">
  <div  class="flex relative h-[250px]">
  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-sm" src=" ${data.image}">
  <div id= ${ind} class="animate__animated animate__backInLeft  px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 class="tracking-widest text-3xl title-font font-medium text-indigo-500 mb-1">
      ${data.name}</h2>
      <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
        data.title}</h1>
      <p class="leading-relaxed">${data.types.join(" ")}</p>
      <p class="leading-relaxed">${data.desc} </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" onclick="updateDesc(this)">update</button>
      <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-3" onclick="deleteall(this)">Delete</button>
       
    </div>
  </div>
  </div>`;
list.innerHTML += ele;
// console.log(ele);
  });
}


function deleteall(ele){

fruits.splice(ele.parentElement.id , 1)  
console.log("fruits" ,fruits)
renderData(fruits);
}

