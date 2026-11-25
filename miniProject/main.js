let table = document.querySelector("table tbody")
function afficher(){
    table.innerHTML = ""

    // forEach, forin, forof
    for(let product of products){
        let tableRow = document.createElement("tr")
        tableRow.dataset.id = product.id // data-id=

        let tableDataName = document.createElement("td")
        tableDataName.textContent = product.name

        let tableDataDescription = document.createElement("td")
        tableDataDescription.textContent = product.description

        let tableDataPrice = document.createElement("td")
        tableDataPrice.textContent = product.price

        let tableDataAction = document.createElement("td")
        let DeleteBtn = document.createElement("button")
        DeleteBtn.textContent = "Remove"
        DeleteBtn.addEventListener("click", removeHandler)
        tableDataAction.append(DeleteBtn)


        tableRow.append(tableDataName, tableDataDescription, tableDataPrice, tableDataAction)

        table.appendChild(tableRow)
    }
    somme()
}
afficher()
function removeHandler(event) {
    let id = event.currentTarget.closest("[data-id]").dataset.id;

    products = products.filter(function (product) {
        return product.id != id
    })
    // findIndex, slice

    afficher()
}

function addProduct(name, description, price) {
    const newProduct = {
        id: products.length + 1,
        name: name,
        description: description,
        price: price
    };
    products.push(newProduct);
    afficher();
}
productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = this.name.value;
    const description = this.description.value;
    const price = parseFloat(this.price.value);
    addProduct(name, description, price);
})

function removeHandler2(event) {
    let id = event.currentTarget.closest("[data-id]").dataset.id;

    let index = products.findIndex( (product) =>product.id == id);

    if (index !== -1) {
        products.splice(index, 1);
    }

    afficher();
}

function somme() {
    // let total = 0;

    // for (let number of numbers) {
    //     total += number;
    // }
    totalPrice.textContent = products.reduce((acc, product) => acc + product.price, 0);

    // return total;
}