function solve() {
   let productElements = document.querySelectorAll('.product');
   let textareaElement = document.getElementsByTagName('textarea');
   let checkoutElement = document.getElementsByClassName('checkout');
   let products = [];
   let totalPrice = 0;
   for (const product of productElements) {
      let addElement = product.children[2];
      addElement.addEventListener('click', function() {
         let productText = product.children[1]
         let productName = productText.children[0].textContent;
         let price = Number(product.children[3].textContent);
         totalPrice += price;
         if (!products.includes(productName)) {
            products.push(productName)
         }
         textareaElement[0].textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
         
      });
   }
   checkoutElement[0].addEventListener('click', function() {
      textareaElement[0].textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
      let addButtons = document.querySelectorAll('.add-product')
      Array.from(addButtons).map(addButton => addButton.disabled = true);
      checkoutElement[0].disabled = true;
   })
}
