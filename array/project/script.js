fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
})
.then((completeData)=>{
    //console.log(completeData);
    let data1="";
    completeData.map((values)=>{
        data1=`<div class= "card">
        <h1 class="title"> ${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>`
    })
    document.getElementById("cards").innerHTML= data1;

    
})

