// ------------ डेटा ------------
// अब हर कपड़े के साथ उसका नाम, कीमत और आपका एफिलिएट लिंक भी है।
// **आपको '#' की जगह अपना असली एफिलिएट लिंक डालना होगा।**

const shirts = [
    { 
        id: 1, 
        src: 'images/shirt1.png', 
        name: 'Cool Blue T-Shirt', 
        price: '₹1,299',
        affiliateLink: 'https://www.amazon.in/dp/B085J28K3V?&tag=YOUR_AFFILIATE_TAG' // <-- अपना लिंक यहाँ डालें
    },
    { 
        id: 2, 
        src: 'images/shirt2.png',
        name: 'Striped Casual Shirt',
        price: '₹999',
        affiliateLink: 'https://www.amazon.in/dp/B07LF4S234?&tag=YOUR_AFFILIATE_TAG' // <-- अपना लिंक यहाँ डालें
    }
];

const pants = [
    { 
        id: 1, 
        src: 'images/pants1.png',
        name: 'Classic Beige Trousers',
        price: '₹1,899',
        affiliateLink: 'https://www.amazon.in/dp/B073JYC144?&tag=YOUR_AFFILIATE_TAG' // <-- अपना लिंक यहाँ डालें
    },
    { 
        id: 2, 
        src: 'images/pants2.png',
        name: 'Denim Blue Jeans',
        price: '₹2,499',
        affiliateLink: 'https://www.amazon.in/dp/B073JYC145?&tag=YOUR_AFFILIATE_TAG' // <-- अपना लिंक यहाँ डालें
    }
];


// ------------ HTML एलिमेंट्स को पकड़ना ------------
const shirtOptionsContainer = document.getElementById('shirt-options');
const pantsOptionsContainer = document.getElementById('pants-options');

const wornShirt = document.getElementById('worn-shirt');
const wornPants = document.getElementById('worn-pants');

// नए एलिमेंट्स जो प्रोडक्ट की जानकारी दिखाएंगे
const productNameElement = document.getElementById('product-name');
const productPriceElement = document.getElementById('product-price');
const buyNowLink = document.getElementById('buy-now-link');


// ------------ फंक्शन: कपड़ों के ऑप्शन दिखाना ------------
function displayClothingOptions(items, container, changeFunction) {
    items.forEach(item => {
        let img = document.createElement('img');
        img.src = item.src;
        img.classList.add('option-image');
        
        // जब कोई ऑप्शन पर क्लिक करे
        img.onclick = function() {
            // यह फंक्शन अब इमेज के साथ पूरी प्रोडक्ट जानकारी भी अपडेट करेगा
            changeFunction(item);
        };
        
        container.appendChild(img);
    });
}


// ------------ फंक्शन: अवतार के कपड़े और जानकारी बदलना ------------
function updateOutfit(item, wornElement) {
    // 1. अवतार पर कपड़ा बदलो
    wornElement.src = item.src;
    
    // 2. प्रोडक्ट का नाम और कीमत बदलो
    productNameElement.innerText = item.name;
    productPriceElement.innerText = `${item.price} (Available on Amazon)`;
    
    // 3. "BUY NOW" बटन का लिंक बदलो
    buyNowLink.href = item.affiliateLink;
}


// ------------ वेबसाइट लोड होते ही कोड चलाना ------------
displayClothingOptions(shirts, shirtOptionsContainer, (item) => updateOutfit(item, wornShirt));
displayClothingOptions(pants, pantsOptionsContainer, (item) => updateOutfit(item, wornPants));

// पेज लोड होने पर डिफॉल्ट प्रोडक्ट की जानकारी सेट करना
function initializeDefaultView() {
    // डिफॉल्ट शर्ट और पैंट सेट करें
    const defaultShirt = shirts[0];
    const defaultPants = pants[0];
    wornShirt.src = defaultShirt.src;
    wornPants.src = defaultPants.src;

    // जानकारी बॉक्स को डिफॉल्ट शर्ट से अपडेट करें (या आप जो चाहें)
    productNameElement.innerText = defaultShirt.name;
    productPriceElement.innerText = `${defaultShirt.price} (Available on Amazon)`;
    buyNowLink.href = defaultShirt.affiliateLink;
}

// पेज लोड होते ही इस फंक्शन को कॉल करें
initializeDefaultView();
