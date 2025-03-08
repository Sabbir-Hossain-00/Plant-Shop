const products = [
    {
      name: "Small Scindapsus Aureum - Devil’s Ivy- Pothos",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/Scindapsus_ff99fc67-bace-4efc-9e8b-d0811e2e131e.png?v=1636054528&width=1100",
      price: 1815,
      id: 0,
    },
    {
      name: "Ficus Benjamina &quot;The Weeping Fig&quot; - Plant Store",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/Ficus_Benjamina_weepingfig.jpg?v=1526704111&width=1100",
      price: 1816,
      id: 1,
    },
    {
      name: "Medium Monstera deliciosa- Swiss Cheese Plant - 60cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/monstera.png?v=1641565765&width=1100",
      price: 2472,
      id: 2,
    },
    {
      name: "Schefflera arboricola - Umbrella Tree 160cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/files/schefflera_59f3db59-d5e2-490c-9307-6f00fdb3537c.png?v=1736774137&width=1100",
      price: 1958,
      id: 3,
    },
    {
      name: "Pachira Aquatica - Plant Store",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/Pachira_aquatica.jpg?v=1621338511&width=1100",
      price: 1989,
      id: 4,
    },
    {
      name: "Boston Fern",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/bostonfern.png?v=1641324387&width=1100",
      price: 3220,
      id: 5,
    },
    {
      name: "The ZZ Plant",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/zzz.png?v=1641318828&width=1100",
      price: 2591,
      id: 6,
    },
    {
      name: "Large Scindapsus- Devil&",
      img_url:
        "https://www.plantstore.ie/cdn/shop/files/4SCAUHA19.png?v=1708437156&width=1100",
      price: 3341,
      id: 7,
    },
    {
      name: "Create Your Own Succulent Terrarium Kit (Large)",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/DIYTerrariumKitPic1.png?v=1615035621&width=1100",
      price: 3049,
      id: 8,
    },
    {
      name: "Peace Lily - Spathiphyllum",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/SPATHIPHYLLUM.png?v=1641321814&width=1100",
      price: 1219,
      id: 9,
    },
    {
      name: "Areca Palm- Medium - 130cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/areca.png?v=1641562923&width=1100",
      price: 1438,
      id: 10,
    },
    {
      name: "Silver Cloud - Epipremnum pictum",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/scindapsus2.png?v=1641567449&width=1100",
      price: 1497,
      id: 11,
    },
    {
      name: "Kentia Palm- Large - 160cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/4HOFOTU25.png?v=1591531476&width=1100",
      price: 2590,
      id: 12,
    },
    {
      name: "Large Pachira Aquatica",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/4PAAQGS31.png?v=1591531745&width=1100",
      price: 2878,
      id: 13,
    },
    {
      name: "Large Monstera deliciosa- Swiss Cheese Plant- 90cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/monstera80cm.png?v=1641315327&width=1100",
      price: 1978,
      id: 14,
    },
    {
      name: "Calathea Medallion - 30cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/calathea_15c9761d-237c-4b4d-afcb-3effff40f914.png?v=1641323633&width=1100",
      price: 2300,
      id: 15,
    },
    {
      name: "Crassula Ovata Major - Plant Store",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/Crassula_Ovata_Major.jpg?v=1526704104&width=1100",
      price: 3594,
      id: 16,
    },
    {
      name: "Aglaonema",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/aglaonema1.png?v=1641321623&width=1100",
      price: 2136,
      id: 17,
    },
    {
      name: "Kentia Palm- Medium - 130cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/KentiaPalm140cm.png?v=1601977758&width=1100",
      price: 2702,
      id: 18,
    },
    {
      name: "Create Your Own Succulent Terrarium Kit (Small)",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/DIYTerrariumKitPic1_99bb430e-f1fb-42a5-9cc1-ae9a60c1a097.png?v=1604414439&width=1100",
      price: 3139,
      id: 19,
    },
    {
      name: "Ficus lyrata - Fiddle Leaf Fig- 110cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/ficussy.png?v=1641316360&width=1100",
      price: 2977,
      id: 20,
    },
    {
      name: "Areca Palm - Large - 160cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/ARECAPALM.png?v=1640008013&width=1100",
      price: 3201,
      id: 21,
    },
    {
      name: "Small Asparagus Fern - 20cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/asparagus.png?v=1641578326&width=1100",
      price: 3410,
      id: 22,
    },
    {
      name: "Large Snake Plant - 70cm",
      img_url:
        "https://www.plantstore.ie/cdn/shop/products/snakeplant.png?v=1658233661&width=1100",
      price: 2001,
      id: 23,
    },
  ];

  


let count = 0 ;





const plusBtn = (countVal)=>{
  count++;
  countVal.innerText = count ;
}
const minasBtn = (countVal)=>{
  if(countVal.innerText > 0){
    count -- ;
    countVal.innerText = count ;
  }else{
    countVal.innerText = 0 ;
  }
}



// const subTotalArr =  [] ;
// const subTotalAmount = (totalPrice)=>{
//   subTotalArr.push(totalPrice)
//   const subTotal = subTotalArr.reduce((accm , currElm)=>{
//       return accm = accm + currElm ;
//   },0);

//   document.getElementById("subtotalAmount").innerText = subTotal ;
// }




const removeFromCart = (event)=>{
  const dltTr = event.target.parentElement.parentElement;
  const dltTotal = event.target.parentElement.previousElementSibling.innerText ;
  const newDltTotal = parseInt(dltTotal.slice(1));

  let updatedCart = JSON.parse(localStorage.getItem("localName")) || [];
  updatedCart = updatedCart.filter((currElm)=>{
   return currElm[4] !== newDltTotal ;
  });

localStorage.setItem("localName",JSON.stringify(updatedCart))
 
recalculate();
dltTr.innerHTML = "";

}

const recalculate = ()=>{
  let updatedCart = JSON.parse(localStorage.getItem("localName")) || [];
 let total = updatedCart.reduce((accum , currElm)=>{
 return accum = accum + currElm[4] ;
 },0)
 document.getElementById("subtotalAmount").innerText = total;
}





const nameArr = JSON.parse(localStorage.getItem("localName")) || [];

const setLocalName = (newTr , index)=>{
  const item = nameArr[index];
   newTr.innerHTML = `
      <td class="border border-gray-200 p-3 text-center"><img class="w-10" src="${item[0]}" alt=""></td>
      <td class="border border-gray-200 p-3 text-center">${item[1]}</td>
      <td class="border border-gray-200 p-3 text-center">${item[2]}</td>
      <td class="border border-gray-200 p-3 text-center">$${item[3]}</td>
      <td class="border border-gray-200 p-3 text-center">$${item[4]} </td>
      <td id="butNowBtn" class="border border-gray-200 p-3 text-center"><button class="bg-sky-500 px-4 py-2 rounded-md cursor-pointer">Buy Now</button></td>
    `
    newTr.querySelector("#butNowBtn").addEventListener("click",(event)=>{
      removeFromCart(event);
    });
}




const addToCart = (price , img , name , countVal)=>{
  if(countVal.innerText > 0){
    const countValue = countVal.innerText ;
    const totalPrice = countValue * price ;
    const newTr = document.createElement("tr");
    newTr.innerHTML = `
     
      <td class="border border-gray-200 p-3 text-center"><img class="w-10" src="${img}" alt=""></td>
      <td class="border border-gray-200 p-3 text-center">${name}</td>
      <td class="border border-gray-200 p-3 text-center">${countValue}</td>
      <td class="border border-gray-200 p-3 text-center">$${price}</td>
      <td class="border border-gray-200 p-3 text-center">$${totalPrice} </td>
      <td id="butNowBtn" class="border border-gray-200 p-3 text-center"><button class="bg-sky-500 px-4 py-2 rounded-md cursor-pointer">Buy Now</button></td>
     
    `;

    
    nameArr.push( [ img,name ,countValue , price , totalPrice ]);
    localStorage.setItem("localName",JSON.stringify(nameArr));
    setLocalName(newTr , nameArr.length-1);
    recalculate();




    newTr.querySelector("#butNowBtn").addEventListener("click",(event)=>{
      removeFromCart(event);
    });


    recalculate();
    count = 0 ;
    countVal.innerText = 0;
    document.getElementById("table").append(newTr);
  }
  
}



window.addEventListener("load",()=>{
  const storedCart = JSON.parse(localStorage.getItem("localName")) || [];
  storedCart.forEach((item, index) => {
    console.log(item ,index)
    const newTr = document.createElement("tr");
    setLocalName(newTr, index);
    document.getElementById("table").append(newTr);
  });
  recalculate();
})


for(let product of products){
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <div class=" flex flex-col gap-2 justify-center items-center py-8 px-5 rounded-lg border border-gray-200">
        <div class="w-[250px] h-[330px]">
            <img class="w-full object-fill" src="${product.img_url}" alt="">
        </div>
        <h1 class="text-2xl text-center">${product.name}</h1>
        <p class="text-lg">Price : <span>$ ${product.price}</span></p>
        <div class = "flex items-center justify-center gap-3 ">
           <div class ="bg-red-200 px-4 py-2 rounded-lg space-x-4">
           <span id="minas" class ="bg-white px-3 pb-1 text-xl rounded-md cursor-pointer">-</span>
           <span id="val" class = "text-xl font-bold">0</span>
           <span id="plus" class="bg-white px-3 text-xl rounded-md cursor-pointer pb-1">+</span>
           </div>
           <button id="addBtn" class="bg-sky-600 px-4 py-2 rounded-md text-xl text-white cursor-pointer">Add to Cart</button>
        </div>
        
  </div>
  `
  document.getElementById("cards").append(newDiv);
  const countVal = newDiv.querySelector("#val");
 






  newDiv.querySelector("#addBtn").addEventListener("click",()=>{
    addToCart(product.price , product.img_url , product.name , countVal);
  })
  newDiv.querySelector("#minas").addEventListener("click", ()=>{
    minasBtn(countVal)
  });
  newDiv.querySelector("#plus").addEventListener("click", ()=>{
    plusBtn(countVal)
  });

  };





  










//   // Initialize count variable
// let count = 0;

// // Function to get cart data from localStorage
// const getCartFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("localName")) || [];
// };

// // Retrieve stored cart items
// const nameArr = getCartFromLocalStorage();

// // Function to increase count
// const plusBtn = (countVal) => {
//   count++;
//   countVal.innerText = count;
// };

// // Function to decrease count (does not go below 0)
// const minasBtn = (countVal) => {
//   if (count > 0) {
//     count--;
//     countVal.innerText = count;
//   }
// };

// // Subtotal Calculation
// const subTotalArr = [];
// const subTotalAmount = (totalPrice) => {
//   subTotalArr.push(totalPrice);
//   const subTotal = subTotalArr.reduce((acc, curr) => acc + curr, 0);
//   document.getElementById("subtotalAmount").innerText = subTotal;
// };

// // Function to remove item from cart and update localStorage
// const removeFromCart = (event) => {
//   const dltTr = event.target.parentElement.parentElement;
//   const dltTotal = parseInt(event.target.parentElement.previousElementSibling.innerText.slice(1));
//   let updatedCart = JSON.parse(localStorage.getItem("localName")) || [];
//   updatedCart = updatedCart.filter(item => item[4] !== dltTotal);
//   localStorage.setItem("localName", JSON.stringify(updatedCart));
//   recalculateSubtotal();
//   dltTr.remove();
// };

// // Function to recalculate subtotal after removal
// const recalculateSubtotal = () => {
//   const storedCart = JSON.parse(localStorage.getItem("localName")) || [];
//   let total = storedCart.reduce((sum, item) => sum + item[4], 0);
//   document.getElementById("subtotalAmount").innerText = total;
// };

// // Function to set cart item from local storage into table
// const setLocalName = (newTr, index) => {
//   const item = nameArr[index];
//   newTr.innerHTML = `
//     <td class="border p-3 text-center"><img class="w-10" src="${item[0]}" alt=""></td>
//     <td class="border p-3 text-center">${item[1]}</td>
//     <td class="border p-3 text-center">${item[2]}</td>
//     <td class="border p-3 text-center">$${item[3]}</td>
//     <td class="border p-3 text-center">$${item[4]}</td>
//     <td class="border p-3 text-center"><button class="bg-red-500 px-4 py-2 removeBtn">Remove</button></td>
//   `;
//   newTr.querySelector(".removeBtn").addEventListener("click", removeFromCart);
// };

// // Function to add item to cart
// const addToCart = (price, img, name, countVal) => {
//   if (countVal.innerText > 0) {
//     const countValue = parseInt(countVal.innerText);
//     const totalPrice = countValue * price;
//     const newTr = document.createElement("tr");
//     nameArr.push([img, name, countValue, price, totalPrice]);
//     localStorage.setItem("localName", JSON.stringify(nameArr));
//     setLocalName(newTr, nameArr.length - 1);
//     document.getElementById("table").append(newTr);
//     subTotalAmount(totalPrice);
//     count = 0;
//     countVal.innerText = 0;
//   }
// };

// // Load cart items from localStorage on page load
// window.addEventListener("load", () => {
//   const storedCart = JSON.parse(localStorage.getItem("localName")) || [];
//   storedCart.forEach((item, index) => {
//     const newTr = document.createElement("tr");
//     setLocalName(newTr, index);
//     document.getElementById("table").append(newTr);
//   });
//   recalculateSubtotal();
// });

// // Creating product cards dynamically
// for (let product of products) {
//   const newDiv = document.createElement("div");
//   newDiv.innerHTML = `
//     <div class="flex flex-col items-center py-8 px-5 border rounded-lg">
//       <img class="w-40" src="${product.img_url}" alt="">
//       <h1 class="text-xl">${product.name}</h1>
//       <p>Price: <span>$${product.price}</span></p>
//       <div class="flex gap-3">
//         <div class="bg-red-200 px-4 py-2 rounded-lg">
//           <span class="bg-white px-3 rounded-md cursor-pointer minas">-</span>
//           <span class="text-xl font-bold val">0</span>
//           <span class="bg-white px-3 rounded-md cursor-pointer plus">+</span>
//         </div>
//         <button class="bg-blue-600 px-4 py-2 text-white addBtn">Add to Cart</button>
//       </div>
//     </div>
//   `;
//   document.getElementById("cards").append(newDiv);
//   const countVal = newDiv.querySelector(".val");
//   newDiv.querySelector(".addBtn").addEventListener("click", () => addToCart(product.price, product.img_url, product.name, countVal));
//   newDiv.querySelector(".minas").addEventListener("click", () => minasBtn(countVal));
//   newDiv.querySelector(".plus").addEventListener("click", () => plusBtn(countVal));
// }
