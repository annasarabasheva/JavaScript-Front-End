function solve() {
    let tbodyElement = document.querySelector('.table tbody');
    let firstTextArea = document.querySelector('textarea');
    let secondTextArea = document.querySelectorAll('textarea')[1];
    let generateButton = document.querySelector('button');
    let buyButton = document.querySelectorAll('button')[1];
    let inputCheckbox = document.querySelector('input[type=checkbox]');
    inputCheckbox.disabled = false;
    
    generateButton.addEventListener('click', function() {
      const furnitureData = JSON.parse(firstTextArea.value);
      furnitureData.forEach(furniture => {
        const tr = document.createElement('tr');
        

        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = furniture.img;
        imgTd.appendChild(img);
        tr.appendChild(imgTd);
        
        
        const nameTd = document.createElement('td');
        const pName = document.createElement('p')
        pName.textContent = furniture.name
        nameTd.appendChild(pName)
        tr.appendChild(nameTd)
        
        const priceTd = document.createElement('td');
        const pPrice = document.createElement('p');
        pPrice.textContent = furniture.price;
        priceTd.appendChild(pPrice);
        tr.appendChild(priceTd);

        const factorTd = document.createElement('td');
        const pFactor = document.createElement('p');
        pFactor.textContent = furniture.decFactor;
        factorTd.appendChild(pFactor);
        tr.appendChild(factorTd);

        const markedTd = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.disabled = false
        markedTd.appendChild(input);
        tr.appendChild(markedTd);


        tbodyElement.appendChild(tr)


    });

    buyButton.addEventListener('click', function() {
      
      let allFurnitures = document.querySelectorAll('tbody tr');
      let furnitureNames = [];
      let totalPrice = 0;
      let sumDecorationFactor = 0;
      
      for (const furniture of allFurnitures) {
        let button = furniture.children[4].children[0];
        if(button.checked) {
            let name = furniture.children[1].children[0].textContent;
            furnitureNames.push(name);
            let price = Number(furniture.children[2].children[0].textContent);
            totalPrice += price;
            let decFactor = Number(furniture.children[3].children[0].textContent);
            sumDecorationFactor += decFactor;
            
        }
      }
      
      let averageFactor = sumDecorationFactor / furnitureNames.length;
      secondTextArea.textContent = `Bought furniture: ${furnitureNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`

    })
});
    
}