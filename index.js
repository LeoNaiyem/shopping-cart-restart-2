const plusBtn = document.getElementById('plus-button');
plusBtn.addEventListener('click', function(){
    const numberOfIphone = document.getElementById('num-of-iphone').value;
    const iphoneQuantity = parseInt(numberOfIphone);
    document.getElementById('num-of-iphone').value = iphoneQuantity + 1;
    const iphonePrice = document.getElementById('iphone-price').innerText;
    const iphonePriceNumber = parseInt(iphonePrice);
    document.getElementById('iphone-price').innerText = iphonePriceNumber + 1219;
});