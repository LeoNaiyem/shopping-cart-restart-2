// iphone plus button click handler
const iphonePlusBtn = document.getElementById('iphone-plus-button');
iphonePlusBtn.addEventListener('click', function(){
    const numberOfIphone = document.getElementById('num-of-iphone').value;
    const iphoneQuantity = parseInt(numberOfIphone);
    document.getElementById('num-of-iphone').value = iphoneQuantity + 1;
    const iphonePrice = document.getElementById('iphone-price').innerText;
    const iphonePriceNumber = parseInt(iphonePrice);
    const totalIphonePriceNumber = iphonePriceNumber + 1219;
    document.getElementById('iphone-price').innerText = totalIphonePriceNumber;

//capturing case price
    const casePrice = document.getElementById('case-price').innerText;
    const casePriceNumber = parseInt(casePrice);
//Capturing and Updating subtotal
    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseInt(subtotal);
    const finalSubtotal = casePriceNumber + totalIphonePriceNumber;
    document.getElementById('subtotal').innerText = finalSubtotal;

// capturing and updating total
    const currentTotal = document.getElementById('total').innerText;
    const currentTotalNumber = parseInt(currentTotal);
    document.getElementById('total').innerText = finalSubtotal;    

    

});

// case plus button click handler
const casePlusBtn = document.getElementById('case-plus-button');
casePlusBtn.addEventListener('click', function(){
    const caseQuantity = document.getElementById('num-of-case').value;
    const caseQuantityNumber = parseInt(caseQuantity);
    document.getElementById('num-of-case').value = caseQuantityNumber + 1;
    const casePrice = document.getElementById('case-price').innerText;
    const casePriceNumber = parseInt(casePrice);
    const totalCasePriceNumber = casePriceNumber + 59;
    document.getElementById('case-price').innerText = totalCasePriceNumber;
    const iphonePrice = document.getElementById('iphone-price').innerText;
    const iphonePriceNumber = parseInt(iphonePrice);
    const subtotal = totalCasePriceNumber + iphonePriceNumber;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('total').innerText = subtotal;
});
