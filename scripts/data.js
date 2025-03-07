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
let allProductPrice = 0 ;
const subTotalArr =  [] ;



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
           <span id = "minas" class ="bg-white px-3 pb-1 text-xl rounded-md cursor-pointer">-</span>
           <span id = "count-val" class = "text-xl font-bold">0</span>
           <span id = "plus" class ="bg-white px-3 text-xl rounded-md cursor-pointer pb-1">+</span>
           </div>
           <button class="bg-sky-600 px-4 py-2 rounded-md text-xl text-white cursor-pointer">Add to Cart</button>
        </div>
        
  </div>
  `
  const minas = newDiv.querySelector("#minas");
  const countVal = newDiv.querySelector("#count-val");
  const plus = newDiv.querySelector("#plus");

  plus.addEventListener("click",()=>{
    count++;
    countVal.innerText = count ;
  });
  minas.addEventListener("click",()=>{
    if(countVal.innerText > 0){
      count -- ;
      countVal.innerText = count ;
    }else{
      countVal.innerText = 0 ;
    }
    
  })
  document.getElementById("cards").append(newDiv);

  

  const addToCartBtn = newDiv.querySelector("button");
  addToCartBtn.addEventListener("click",()=>{
   if(countVal.innerText > 0){
    const totalPrice = product.price * countVal.innerText ;
    const newTr = document.createElement("tr");
    newTr.innerHTML = `
      <tr>
      <td class="border border-gray-200 p-3 text-center"><img class="w-10" src="${product.img_url}" alt=""></td>
      <td class="border border-gray-200 p-3 text-center">${product.name}</td>
      <td class="border border-gray-200 p-3 text-center">${countVal.innerText}</td>
      <td class="border border-gray-200 p-3 text-center">$${product.price}</td>
      <td class="border border-gray-200 p-3 text-center">$${totalPrice} </td>
      <td class="border border-gray-200 p-3 text-center"><button class="bg-sky-500 px-4 py-2 rounded-md cursor-pointer">Buy Now</button></td>
      </tr>
    `;
    
    document.getElementById("table").append(newTr);

    subTotalArr.push(totalPrice);

    const totalAmount = subTotalArr.reduce((accm , currElm)=>{
       return accm = accm + currElm
    },0);

    document.getElementById("subtotalAmount").innerText = totalAmount ;

    
    count = 0 ;
    countVal.innerText = count ;

   const buyNowBtn = newTr.querySelector("button");

   buyNowBtn.addEventListener("click",(event)=>{
      const dltTr = event.target.parentElement.parentElement;
      const dltTotal = event.target.parentElement.previousElementSibling.innerText ;
      const newDltTotal = parseInt(dltTotal.slice(1));

    if(subTotalArr.includes(newDltTotal)){
      let index = subTotalArr.indexOf(newDltTotal);
      subTotalArr.splice(index , 1);
    }
    console.log(subTotalArr);

    const totalAmount = subTotalArr.reduce((accm , currElm)=>{
       return accm = accm + currElm
    },0);
    document.getElementById("subtotalAmount").innerText = totalAmount ;
    dltTr.innerHTML = "";

   })

   }
  
  });

 
}





