let products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3.",
    price: 39.99,
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for Product 3.", // Note: Original image has "Product 3." here as well
    price: 39.99,
  },
]

// NodeElement
let table = document.querySelector("table tbody")

function afficher(){
    table.innerHTML = ""
    
    // forEach, forin, forof
    for(let i = 0; i<products.length; i++){
        let tableRow = document.createElement("tr")
        tableRow.dataset.id = products[i].id // data-id=
        
        let tableDataName = document.createElement("td")
        tableDataName.textContent = products[i].name
        
        let tableDataDescription = document.createElement("td")
        tableDataDescription.textContent = products[i].description
        
        let tableDataPrice = document.createElement("td")
        tableDataPrice.textContent = products[i].price
        
        let tableDataAction = document.createElement("td")
        let DeleteBtn = document.createElement("button")
        DeleteBtn.textContent = "Remove"
        DeleteBtn.addEventListener("click", removeHandler)
        tableDataAction.append(DeleteBtn)
        
        
        tableRow.append(tableDataName, tableDataDescription, tableDataPrice, tableDataAction)
        
        table.appendChild(tableRow)
    }
}

afficher()

function removeHandler(event) {
    let id = event.currentTarget.closest("[data-id]").dataset.id;
    
    products = products.filter(function(product){
        return product.id != id
    })
    // findIndex, slice
    
    afficher()
}