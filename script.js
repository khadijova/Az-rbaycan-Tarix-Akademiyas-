// =========================================================
// ATA MƏLUMAT BAZASI (JSON FORMATINDA)
// =========================================================

const SHEKSIYYETLER = {
    // 1. Məhəmməd Əmin Rəsulzadə
    "ME HEMMED EMIN RESULZADE": {
        ad: "Məhəmməd Əmin Rəsulzadə",
        dogum: "1884, Novxanı",
        vefat: "1955, Ankara",
        fealiyyet: "Siyasətçi, Publisist, Dövlət xadimi",
        partiya: "Müsavat Partiyası",
        axc_rolu: "Azərbaycan Milli Şurasının sədri (1918). İstiqlal Bəyannaməsinin qəbul edilməsində əsas rol.",
        shuarlar: "Bir kərə yüksələn bayraq, bir daha enməz!",
        ideologiya: "Türkçülük, İslamçılıq və Müasirlik",
        eserler: "Azərbaycan Cümhuriyyəti, Əsrimizin Səyavuşu",
        sekil: "/Az-rbaycan-Tarix-Akademiyas-/ATA logo.png" // Test şəkli
    },

    // 2. ŞAH İSMAYIL XƏTAİ
    "ŞAH İSMAYIL XETAI": {
        ad: "Şah İsmayıl Xətai",
        dogum: "25 İyul 1487, Ərdəbil",
        vefat: "1524",
        fealiyyet: "Hökmdar (Şah), Səfəvilər dövlətinin qurucusu, Şair",
        sülalə: "Səfəviyyə (Səfəvi Dövləti)",
        nailiyyetler: "1501-ci ildə Təbrizdə taxta çıxdı. Azərbaycan tarixində ilk mərkəzləşmiş şiə dövlətini qurdu. Xorasanı (Mərv döyüşü, 1510) və Bağdadı (1508) fəth etdi.",
        esas_hadise: "Çaldıran döyüşü (1514) və Səfəvi-Osmanlı qarşıdurması.",
        paytaxt: "Təbriz",
        mexseb: "Şiəlik (Cəfəri Məzhəbi)",
        qızılbaşlar: "Şamlı, Rumlu, Ustaclı, Təkəli, Qacar, Varsaq, Zülqədər tayfalarının dəstəyi.",
        sekil: null 
    }
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
        tarix: "20 Sentyabr 1994", 
        kateqoriya: "Neft, İqtisadi Saziş", 
        tesvir: "Bakı 'Deepwater' yatağının inkişafı üçün Azərbaycan Dövlət Neft Şirkəti (SOCAR) ilə 11 beynəlxalq neft şirkəti arasında imzalanmış geniş neft sazişi. Azərbaycanın iqtisadi müstəqilliyində əsas rol oynadı.", 
        terefler: "Azərbaycan (Heydər Əliyev), BP, Amoco, Pennzoil və s. 11 beynəlxalq şirkət" 
    },
    // ... Digər hadisələr bura əlavə ediləcək ...
};

// =========================================================
// Axtarış və Cavab Məntiqi (Kontekstual Məntiq)
// =========================================================

// Əsas elementləri seçirik
const inputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const messagesContainer = document.getElementById('messages');

// Mesajı Chat pəncərəsinə əlavə edən funksiya
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

// İstifadəçi sual verdikdə işə düşəcək əsas funksiya
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

    // ----------------------------------------------------
    // 1. ŞƏXSİYYƏT AXTARIŞI: Məhəmməd Əmin Rəsulzadə
    // ----------------------------------------------------
    if (normalizedQuestion.includes('rəsulzadə') || normalizedQuestion.includes('axc banisi') || normalizedQuestion.includes('müsavat')) {
        const data = SHEKSIYYETLER["ME HEMMED EMIN RESULZADE"];
        if (data) {
            
            // Xüsusi Kontekstual Suallar üçün DİNAMİK CAVABLAR
            if (normalizedQuestion.includes('şüar') || normalizedQuestion.includes('məşhur söz')) {
                botText = `Məhəmməd Əmin Rəsulzadənin ən məşhur şüarı: "${data.shuarlar}". Bu şüar Azərbaycanın müstəqillik simvoludur.`;
            } else if (normalizedQuestion.includes('partiya') || normalizedQuestion.includes('lider')) {
                botText = `${data.ad} ${data.partiya} partiyasının lideri olmuşdur. O, həmçinin ${data.axc_rolu}nda mühüm rol oynamışdır.`;
            } else {
                // Ümumi cavab
                botText = `${data.ad} (Doğum: ${data.dogum}) Azərbaycan Xalq Cümhuriyyətinin banisidir. Onun ideologiyası "${data.ideologiya}" prinsiplərinə əsaslanırdı.`;
            }
            image = data.sekil;
        }
    }
    
    // ----------------------------------------------------
    // 2. ŞƏXSİYYƏT AXTARIŞI: Şah İsmayıl Xətai
    // ----------------------------------------------------
    else if (normalizedQuestion.includes('şah ismayıl') || normalizedQuestion.includes('xətai') || normalizedQuestion.includes('səfəvi')) {
        const data = SHEKSIYYETLER["ŞAH İSMAYIL XETAI"];
        if (data) {
            
            // Xüsusi Kontekstual Suallar üçün DİNAMİK CAVABLAR
            if (normalizedQuestion.includes('çaldıran')) {
                botText = `Şah İsmayılın siyasi tarixində ən çətin məqam 1514-cü ildə Osmanlı ilə baş verən Çaldıran döyüşü oldu. Bu döyüşdə Səfəvilər məğlub olsalar da, dövlət dağılmadı.`;
            } else if (normalizedQuestion.includes('dövləti necə qurub') || normalizedQuestion.includes('nailiyyət')) {
                botText = `Şah İsmayıl 1501-ci ildə Təbrizdə taxta çıxaraq Səfəvilər dövlətini qurdu. Ən böyük nailiyyətlərindən biri kimi ${data.nailiyyetler} fəthini qeyd etmək olar.`;
            } else {
                // Ümumi cavab
                botText = `${data.ad} (Sülalə: ${data.sülalə}) Səfəvilər dövlətinin qurucusu, həm də istedadlı bir şair idi. O, şiəliyi rəsmi məzhəb elan etmişdir.`;
            }
            image = data.sekil;
        }
    }
    
    // ----------------------------------------------------
    // 3. HADİSƏ AXTARIŞI: Gülüstan və Türkmənçay (Bölünmə)
    // ----------------------------------------------------
    else if (normalizedQuestion.includes('bölünmə') || normalizedQuestion.includes('iki hissəyə') || normalizedQuestion.includes('iranla müqavilə')) {
        
        const gulustan = HADISELER["GULUSTAN MUQAVILESİ"];
        const turkmencay = HADISELER["TURKMENCAY MUQAVILESİ"];
        
        botText = `Azərbaycanın tarixi bölünməsi iki əsas müqavilə ilə rəsmiləşib: ${gulustan.ad} (${gulustan.tarix}) və ${turkmencay.ad} (${turkmencay.tarix}). Türkmənçay Müqaviləsi ilə Araz çayı sərhəd təyin edildi.`;
    }
    
    // ----------------------------------------------------
    // 4. HADİSƏ AXTARIŞI: Əsrin Müqaviləsi
    // ----------------------------------------------------
    else if (normalizedQuestion.includes('əsrin müqaviləsi') || normalizedQuestion.includes('1994') || normalizedQuestion.includes('neft')) {
        const data = HADISELER["ESRIN MUQAVILESİ"];
        if (normalizedQuestion.includes('kimlər imzalayıb') || normalizedQuestion.includes('tərəflər')) {
             botText = `Əsrin Müqaviləsini Azərbaycan Dövlət Neft Şirkəti (SOCAR) ilə ${data.terefler} arasında imzalanıb.`;
        } else {
            botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). Kateqoriya: ${data.kateqoriya}. ${data.tesvir}`;
        }
    }
    
    // 5. Əgər yuxarıdakı açar sözlər yoxdursa, Ümumi Sual Yoxlanışı
    
    else {
        // Mövcud hadisələr üzrə sadə axtarış
        let found = false;
        for (const key in HADISELER) {
            const data = HADISELER[key];
            if (normalizedQuestion.includes(data.ad.toLowerCase()) || normalizedQuestion.includes(data.tarix.toLowerCase().replace(/[^a-z0-9]/g, ''))) {
                botText = `Tarixi Hadisə: ${data.ad} (${data.tarix}). Kateqoriya: ${data.kateqoriya}. ${data.tesvir}`;
                found = true;
                break;
            }
        }
        if (!found) {
            botText = "Təəssüf ki, sorğunuz üzrə dəqiq kontekstual məlumat bazamızda hələlik mövcud deyil. Zəhmət olmasa, Rəsulzadə, Şah İsmayıl, Gülüstan, Türkmənçay, AXC Elanı, 20 Yanvar, Əsrin Müqaviləsi kimi açar sözlərdən istifadə edin.";
        }
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
