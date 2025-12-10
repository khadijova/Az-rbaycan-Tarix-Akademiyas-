// Əsas elementləri seçirik
const inputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const messagesContainer = document.getElementById('messages');

// İstifadəçi sual verdikdə işə düşəcək əsas funksiya
function sendMessage() {
    const userQuestion = inputElement.value.trim();
    
    // Əgər sahə boşdursa, heç nə etmə
    if (userQuestion === "") {
        return;
    }

    // 1. İstifadəçi mesajını ekrana əlavə et
    appendMessage(userQuestion, 'user-message');

    // 2. Input sahəsini təmizlə
    inputElement.value = '';

    // 3. Sİ cavabını emulyasiya et (Backend hazır olana qədər)
    simulateBotResponse(userQuestion);
}

// Mesajı Chat pəncərəsinə əlavə edən funksiya
function appendMessage(text, type, imageUrl = null) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);

    // Əgər şəkil URL-i varsa, şəkli əlavə et
    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Şəxsiyyət şəkli';
        imageElement.classList.add('person-image');
        messageDiv.appendChild(imageElement);
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    messageDiv.appendChild(paragraph);

    messagesContainer.appendChild(messageDiv);
    
    // Pəncərəni ən son mesaja sürüşdür
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Sİ cavabını modelləşdirən funksiya (Test məqsədilə)
function simulateBotResponse(question) {
    // Kiçik gecikmə
    setTimeout(() => {
        let botText = "Məlumat bazamızda '" + question + "' sorğusu üzrə ətraflı axtarış aparılır. Lütfən, gözləyin...";
        let image = null;

        // --- TEST MƏNTİQİ ---
        
        // Məhəmməd Əmin Rəsulzadə Testi
        if (question.toLowerCase().includes('rəsulzadə') || question.toLowerCase().includes('axc')) {
            botText = "Məhəmməd Əmin Rəsulzadə Azərbaycan Xalq Cümhuriyyətinin (1918) banisi və lideri olmuşdur. O, 'Bir kərə yüksələn bayraq, bir daha enməz!' şüarının müəllifidir.";
            // Loqo adını repozitoriyadakı kimi istifadə edirik (Boşluqlu və Böyük/Kiçik Hərflə)
            image = '/Az-rbaycan-Tarix-Akademiyas-/ATA logo.png'; 
        } 
        
        // Heydər Əliyev Testi
        else if (question.toLowerCase().includes('heydər əliyev') || question.toLowerCase().includes('ümumilli lider')) {
             botText = "Heydər Əlirza oğlu Əliyev (1923–2003) müasir Azərbaycan dövlətinin qurucusu və memarıdır. 1993-cü ildə ölkədə sabitliyi təmin etmişdir.";
             image = null; 
        }

        appendMessage(botText, 'bot-message', image);
    }, 500);
}

// 4. Düyməyə basanda sendMessage funksiyasını çağır
sendButton.addEventListener('click', sendMessage);

// 5. Enter düyməsinə basanda da sendMessage funksiyasını çağır
inputElement.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
