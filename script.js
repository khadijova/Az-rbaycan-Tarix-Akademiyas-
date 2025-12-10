// =========================================================
// ATA MƏLUMAT BAZASI (JSON FORMATINDA)
// =========================================================

const SHEKSIYYETLER = {
    // Məhəmməd Əmin Rəsulzadə haqqında geniş məlumat
    "ME HEMMED EMIN RESULZADE": {
        ad: "Məhəmməd Əmin Rəsulzadə",
        dogum: "1884, Novxanı",
        vefat: "1955, Ankara",
        fealiyyet: "Siyasətçi, Publisist, Dramaturq, Dövlət xadimi",
        partiya: "Müsavat Partiyası (1913-cü ildən lider)",
        axc_rolu: "Azərbaycan Milli Şurasının sədri (1918). İstiqlal Bəyannaməsinin qəbul edilməsində əsas rol.",
        shuarlar: "Bir kərə yüksələn bayraq, bir daha enməz!",
        ideologiya: "Türkçülük, İslamçılıq və Müasirlik",
        eserler: "Azərbaycan Cümhuriyyəti, Əsrimizin Səyavuşu",
        sekil: "/Az-rbaycan-Tarix-Akademiyas-/ATA logo.png" // Test şəkli
    },
    // ... Digər şəxsiyyətlər bura əlavə ediləcək ...
};

const HADISELER = {
    "GULUSTAN MUQAVILESİ": {
        ad: "Gülüstan Müqaviləsi",
        tarix: "12 Oktyabr 1813",
        kateqoriya: "Müqavilə",
        tesvir: "Birinci Rusiya-İran (Qacarlar) müharibəsini yekunlaşdıran və Azərbaycan torpaqlarının Rusiyaya keçməsinin ilk rəsmi sənədi. Bu, Azərbaycanın bölünməsinə doğru ilk addım idi.",
        terefler: "Rusiya İmperiyası, Qacarlar Dövləti (İran)"
    },
    "TURKMENCAY MUQAVILESİ": {
        ad: "Türkmənçay Müqaviləsi",
        tarix: "10 Fevral 1828",
        kateqoriya: "Müqavilə",
        tesvir: "İkinci Rusiya-İran müharibəsinə son qoyan və Araz çayı boyunca Azərbaycanın iki hissəyə (Şimali və Cənubi) bölünməsini rəsmiləşdirən müqavilə.",
        terefler: "Rusiya İmperiyası, Qacarlar Dövləti (İran)"
    },
    "AXC ELANI": {
        ad: "Azərbaycan Xalq Cümhuriyyətinin Elanı",
        tarix: "28 May 1918",
        kateqoriya: "Müstəqillik",
        tesvir: "Şərqdə ilk dünyəvi, demokratik respublika olan AXC-nin Tiflisdə Azərbaycan Milli Şurası tərəfindən İstiqlal Bəyannaməsi ilə elan edilməsi.",
        terefler: "Azərbaycan Milli Şurası (M. Ə. Rəsulzadə, F. Xoyski və b.)"
    },
    "20 YANVAR": {
        ad: "20 Yanvar Faciəsi",
        tarix: "20 Yanvar 1990",
        kateqoriya: "Qətliam, Müstəqillik uğrunda mübarizə",
        tesvir: "Sovet Ordusunun Bakıya daxil olaraq müstəqillik tələb edən dinc əhaliyə qarşı həyata keçirdiyi kütləvi qətliam. Milli Mübarizə Simvolu.",
        terefler: "SSRİ Müdafiə Nazirliyinin qoşunları, Azərbaycan dinc əhalisi"
    },
    "ESRIN MUQAVILESİ": {
        ad: "Əsrin Müqaviləsi",
        tarix: "20 Sentyabr 1994", // Əlavə olundu
        kateqoriya: "Neft, İqtisadi Saziş", // Əlavə olundu
        tesvir: "Bakı 'Deepwater' yatağının inkişafı üçün Azərbaycan Dövlət Neft Şirkəti (SOCAR) ilə 11 beynəlxalq neft şirkəti arasında imzalanmış geniş neft sazişi. Azərbaycanın iqtisadi müstəqilliyində əsas rol oynadı.", // Əlavə olundu
        terefler: "Azərbaycan (Heydər Əliyev), BP, Amoco, Pennzoil və s. 11 beynəlxalq şirkət" // Əlavə olundu
    },
    // ... Digər hadisələr bura əlavə ediləcək ...
};

// =========================================================
// Axtarış və Cavab Məntiqi (Yenidən Yazılmışdır)
// =========================================================

// Əsas elementləri seçirik
const inputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const messagesContainer = document.getElementById('messages');

// Mesajı Chat pəncərəsinə əlavə edən funksiya (dəyişmədi)
function appendMessage(text, type, imageUrl = null) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);

    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Tarixi şəkil';
        imageElement.classList.add('person-image');
        messageDiv.appendChild(imageElement);
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    messageDiv.appendChild(paragraph);

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// İstifadəçi sual verdikdə işə düşəcək əsas funksiya (dəyişmədi)
function sendMessage() {
    const userQuestion = inputElement.value.trim();
    if (userQuestion === "") {
        return;
    }
    appendMessage(userQuestion, 'user-message');
    inputElement.value = '';
    simulateBotResponse(userQuestion);
}

// Sİ cavabını modelləşdirən funksiya (Əsas Məntiq)
function simulateBotResponse(question) {
    const normalizedQuestion = question.toLowerCase().trim();
    let botText = null;
    let image = null;

    // --- ŞƏXSİYYƏT AXTARIŞI ---
    if (normalizedQuestion.includes('rəsulzadə') || normalizedQuestion.includes('axc banisi') || normalizedQuestion.includes('müsavat')) {
        const data = SHEKSIYYETLER["ME HEMMED EMIN RESULZADE"];
        if (data) {
            botText = `Bəli, ${data.ad} (Doğum: ${data.dogum}) Azərbaycan Milli Şurasının sədri olmuşdur. Onun siyasi ideologiyası "${data.ideologiya}" prinsiplərinə əsaslanırdı. Ən məşhur şüarı: "${data.shuarlar}".`;
            image = data.sekil;
        }
    }
    
    // --- HADİSƏ AXTARIŞI ---
    else if (normalizedQuestion.includes('gülüstan') || normalizedQuestion.includes('1813')) {
        const data = HADISELER["GULUSTAN MUQAVILESİ"];
        botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). ${data.tesvir} Əsas tərəflər: ${data.terefler}.`;
    } 
    else if (normalizedQuestion.includes('türkmənçay') || normalizedQuestion.includes('1828')) {
        const data = HADISELER["TURKMENCAY MUQAVILESİ"];
        botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). ${data.tesvir} Bu müqavilə Azərbaycanın bölünməsini rəsmiləşdirdi.`;
    }
    else if (normalizedQuestion.includes('axc elanı') || normalizedQuestion.includes('28 may')) {
        const data = HADISELER["AXC ELANI"];
        botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). ${data.tesvir} AXC Şərqdə ilk demokratik respublika idi.`;
    }
    else if (normalizedQuestion.includes('20 yanvar') || normalizedQuestion.includes('qara yanvar')) {
        const data = HADISELER["20 YANVAR"];
        botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). ${data.tesvir}`;
    }
    else if (normalizedQuestion.includes('əsrin müqaviləsi') || normalizedQuestion.includes('1994')) {
        const data = HADISELER["ESRIN MUQAVILESİ"];
        botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). Kateqoriya: ${data.kateqoriya}. ${data.tesvir}`;
    }

    // 3. Əgər cavab tapılmayıbsa, standart cavab ver
    if (!botText) {
        botText = "Təəssüf ki, bu sorğu üzrə ətraflı məlumat bazamızda hələlik mövcud deyil. Zəhmət olmasa, Gülüstan, Türkmənçay, AXC Elanı, 20 Yanvar, Əsrin Müqaviləsi və ya Rəsulzadə haqqında sorğu göndərin.";
    }

    // 4. Cavabı ekrana əlavə et (500ms gecikmə ilə)
    setTimeout(() => {
        appendMessage(botText, 'bot-message', image);
    }, 500);
}

// 5. Düymə və Enter Hadisələrini Bağlamaq
sendButton.addEventListener('click', sendMessage);
inputElement.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
