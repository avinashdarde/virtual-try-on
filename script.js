// ------------ डेटा ------------
// यहाँ हम अपनी शर्ट्स और पैन्ट्स की जानकारी स्टोर कर रहे हैं।
const shirts = [
    { id: 1, src: 'images/shirt1.png' },
    { id: 2, src: 'images/shirt2.png' }
];

const pants = [
    { id: 1, src: 'images/pants1.png' },
    { id: 2, src: 'images/pants2.png' }
];

// ------------ HTML एलिमेंट्स को पकड़ना ------------
const shirtOptionsContainer = document.getElementById('shirt-options');
const pantsOptionsContainer = document.getElementById('pants-options');
const wornShirt = document.getElementById('worn-shirt');
const wornPants = document.getElementById('worn-pants');

// ------------ फंक्शन: कपड़ों के ऑप्शन दिखाना ------------
function displayClothingOptions(items, container, changeFunction) {
    items.forEach(item => {
        let img = document.createElement('img');
        img.src = item.src;
        img.classList.add('option-image');

        // जब कोई इमेज पर क्लिक करे, तो कपड़े बदलो
        img.onclick = function() {
            changeFunction(item.src);
        };

        container.appendChild(img);
    });
}

// ------------ फंक्शन: अवतार के कपड़े बदलना ------------
// शर्ट बदलने वाला फंक्शन
function changeShirt(imageSrc) {
    wornShirt.src = imageSrc;
}

// पैंट बदलने वाला फंक्शन
function changePants(imageSrc) {
    wornPants.src = imageSrc;
}

// ------------ वेबसाइट लोड होते ही कोड चलाना ------------
displayClothingOptions(shirts, shirtOptionsContainer, changeShirt);
displayClothingOptions(pants, pantsOptionsContainer, changePants);
