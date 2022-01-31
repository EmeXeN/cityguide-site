let htmlBody = document.querySelector('body');

const cardData = [
    {
        title: "Lubartów",
        desc: "Miasto leży we wschodniej Polsce, niedaleko od Lublina, na obszarze Wysoczyzny Lubartowskiej, przynależnej do Niziny Południowopodlaskiej. Historycznie miejscowość przynależy do Małopolski, a konkretnie do ziemi lubelskiej.",
        pic: "./images/lubartow.jpg"
    },
    {
        title: "Turystyka",
        desc: "Ze względu na dobre położenie komunikacyjne oraz znaczny potencjał demograficzny. Lubartów stanowi centrum aktywności gospodarczej i społecznej całego regionu.  Oprócz zabytków sakralnych – bazyliki św Anny oraz kościoła oo. Kapucynów – warte obejrzenia są również okolice Lubartowa. Miasto położone jest w otoczeniu Kozłowieckiego Parku Krajobrazowego. Blisko stąd do prawdziwej perły Lubelszczyzny -Muzeum Zamoyskich w Kozłówce, jednego z cudów Polski wyróżnionych w konkursie National Geographic w 2011 roku.",
        pic: "./images/turystyka.jpg"
    },
    {
        title: "Zespół Pałacowo – Parkowy",
        desc: "Swoją rezydencję Piotr Firlej wzniósł ok. roku 1549. W roku 1705, podczas wojny północnej, budynek został częściowo spalony. Odbudowany przez księcia Pawła Karola Sanguszkę w stylu barokowym, według projektu Pawła Antoniego Fontany, zyskał m.in. portyk i trzecią kondygnację. Potem posiadłość wielokrotnie zmieniała właścicieli, W 1933 r. wybuchł pożar. który zniszczył dach i wnętrza pałacowe. Zarząd Miejski wykupił ruinę wraz z ogrodem w latach 1935-1938. Pałac został odbudowany I wyremontowany już po ll wojnie światowej. Obecnie Zespół Pałacowo — Parkowy obejmuje pałac (siedzibę Starostwa Powiatowego), murowaną oranżerię, bramę pałacową, park i staw za pałacem oraz pozostałości mostu. Dzięki realizacji projektu rewitalizacji parku, powstało okazałe ogrodzenie, przeobrażeniu ulega wygląd zieleni parkowej. Oczyszczono odpływy wody ze stawu, a sam zbiornik poddawany jest oczyszczaniu metodami biologicznymi.",
        pic: "./images/palac.jpg"
    },
    {
        title: "Kościół św. Anny od roku 2008 Bazylika Mniejsza",
        desc: "Tuż obok parku | pałacu Sanguszków znajduje się wyjątkowy nie tylko w skali Lubartowa Obiekt – Bazylika mniejsza pw. św. Anny — budowany w latach 1733-1738, projektu Pawła Antoniego Fontany. Barokowy, murowany, dwu wieżowy kościół, został ufundowany przez Pawła Karola Sanguszkę. Fronton kościoła ozdabiają dwie wieże zwieńczone pięknymi hełmami oraz elewacja bogata w pilastry i gzymsy. W pomieszczeniach nad zakrystią znajduje się muzeum parafialne. Zawiera ono zbiory zgromadzone na przestrzeni ostatnich 300 lat. Najbardziej okazały zabytek to tkany złotą nicią ornat, ofiarowany kościołów: przez księcia Sanguszkę w dniu konsekracji świątyni.",
        pic: "./images/bazylika.jpg"
    },
    {
        title: "Cmentarz parafialny",
        desc: "Lubartowski cmentarz parafialny założony został w 1819 r. Obecnie znajduje się przy ul. Szaniawskiego. Są tu pomniki i kwatery zbiorowe poległych w okresie powstań narodowych oraz I i. II wojny światowej Najstarsze grobowce, dzięki swoistej architekturze , Są prawdziwymi dziełami sztuki. Z inicjatywy Lubartowskiego Towarzystwa Regionalnego, co roku w dzień Wszystkich Świętych organizowana jest kwesta na odbudowę pomników.",
        pic: "./images/cmentarz.jpg"
    },
    {
        title: "Droga na Wieprz",
        desc: "Określana mianem gotyckiej katedry stworzonej przez naturę, okazała aleja topolowa prowadzi z parku miejskiego nad rzekę Wieprz.",
        pic: "./images/drogawieprz.jpg"
    },
    {
        title: "Dworek Werchrackiego",
        desc: "Dziewiętnastowieczny dworek przy ulicy Kościuszki nr 28 to siedziba Muzeum Ziemi Lubartowskiej oraz Lubartowskiego Towarzystwa Regionalnego. Budynek został ofiarowany na ten cel przez doktora Stefana Norberta Werchrackiego i oficjalnie otwarty w 1970 roku, po kapitalnym remoncie. Muzeum posiada ponad 2,5 tyś eksponatów. Wśród nich są m.in. wyroby pochodzące z lubartowskiej wytwórni fajansu (manufaktura ceramiki założona przez Henryka Łubieńskiego funkcjonowała tutaj w latach 1839-1850). Zbiory muzeum to także rękodzieło ludowe. Stroje folklorystyczne z ubiegłego stulecia, tkaniny, narzędzia rolnicze. Ciekawostką jest zbiór żelazek na węgiel drzewny i tzw. duszę. Muzeum czynne jest od poniedziałku do piątku w godz. 7:30 – 15:30. W soboty i niedziele możliwe jest zwiedzanie po uprzednim uzgodnieniu.",
        pic: "./images/dworek.jpg"
    },
    {
        title: "Rynek, Ratusz Miejski",
        desc: "Rynek w Lubartowie w ostatnich latach przeszedł znaczne przeobrażenia. Dzięki wykorzystaniu środków unijnych udało się zrewitalizować tę część miasta, poprawić stan dróg, uzupełnić brakującą infrastrukturę. Dzisiaj w centrum zlokalizowanych jest wiele punktów handlowych, usługowych oraz gastronomicznych. To także miejsce wydarzeń kulturalnych organizowanych w sąsiedztwie Ratusza Miejskiego.",
        pic: "./images/rynek.jpg"
    },
    {
        title: "Strefa Gospodarcza Lubartów",
        desc: "Lubartów jest atrakcyjnym miejscem do inwestowania i prowadzenia działalności gospodarczej. Jego atuty doceniło już ponad 2000 funkcjonalnych tutaj podmiotów gospodarczych. Lubartów oferuje możliwość zakupu niezabudowanych terenów inwestycyjnych typu greenfield, posiadających dostęp do pełnego uzbrojenia. Stanowią one trzon Strefy Lubartów, utworzonej w oparciu o tereny inwestycyjne przygotowanie w ramach projektu „Czas na Lubartów – kompleksowe przygotowania terenów pod inwestycje”. Tereny te położone są w dogodnej lokalizacji, w pobliżu drogi krajowej nr 19 (projektowanej drogi ekspresowej S 19) i linii kolejowej oraz należą do Specjalnej Strefy Ekonomicznej (SSE) Euro – Park Mielec Podstrefa Lubartów. Strefa Lubartów jest produktem marketingowym stworzonym w celu promocji gospodarczej Lubartowa. Pojęcie Strefy obejmuje zarówno te tereny, które w przeszłości przeznaczono pod inwestycje biznesowe, jak i te nowe, które współcześnie przystosowano do wykorzystania gospodarczego. Na przestrzeni lat większość lubartowskich przedsiębiorstw rozlokowano po zachodniej stronie miasta, w granicach określonych obwodnicą Lubartowa (droga krajowa 19) i linią wytyczoną przez trakcję kolejową przebiegającą przez miasto. Określiło to w sposób naturalny główny zakres terytorialny SL, chociaż działalność gospodarcza w Lubartowie nie ogranicza się tylko do tego obszaru.",
        pic: "./images/strefagospodarcza.jpg"
    },
    {
        title: "Tradycje lubartowskiego fajansu",
        desc: "W Mediolanie. Paryżu, Berlinie i Sankt Petersburgu wytwórnie porcelany działały z powodzeniem. kiedy nowy właściciel Lubartowa Henryk Jan Łubieński zdecydował się na założenie własnej fajansarni. Wielki działacz gospodarczy nabył dobra lubartowskie od Klementyny z Sanguszków Małachowskiej w 1839 roku. Wtedy też powstała miejscowa fabryka, która mała być początkiem przemysłu porcelanowego w Królestwie Polskim. Pierwszym dyrektorem fajansarni był Robert Wendler,Saksończyk. który w 1842 r. przeniósł się do Tomaszowa Przy produkcji ceramiki pracowało czterech fabrykantów oraz kilku uczniów i czeladników. W pobliżu miasta na było złóż gliny i prawdopodobnie sprowadzano ją z okolic Lwowa galeriami do Puław, a następnie wozami do Lubartowa. Wyrabiano tu użytkowe naczynia kamionkowe Oraz miejscową specjalność tzw. terakoty, rzadko spotykany (rodz Ceramiki wypalanej z glin mieszanych.",
        pic: "./images/tradycje.jpg"
    },
]

// document.addEventListener('scroll', (e) => {
//     if(window.scroll)
// })

const loadImages = () => {
    let container = document.querySelector('main');
    cardData.forEach((e) => {
        let htmlInsert = `
        <div class="card">
            <img class="card-pic" src=${e.pic} alt="Gallery Picture">
            <div class="card-informations">
                <div class="card-informations-title">${e.title}</div>
                <div class="card-informations-description">${e.desc}</div>
            </div>
        </div>
        `
        container.insertAdjacentHTML('beforeend', htmlInsert)
    })
}

loadImages()

let cardImage = document.querySelectorAll('.card-pic');
cardImage.forEach((e) => {
    e.addEventListener('click', (e) => {
        let htmlInsert = `
        <div class="imageZoomContainer" id="imageZoomContainer">
            <img src=${e.target.getAttribute("src")} alt="Zommed Image">
            <a href="#" class="exitBtn" id="exitBtn">
                <div></div>
                <div></div>
            </a>
        </div>
        `
        htmlBody.insertAdjacentHTML('afterbegin', htmlInsert)
        htmlBody.style.overflow = "hidden"
    
        let exitBtn = document.querySelector('#exitBtn');
        let imageZoomContainer = document.querySelector('#imageZoomContainer');
        exitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            imageZoomContainer.remove()
            htmlBody.style.overflow = "visible"
            htmlBody.style.overflowX = "hidden"
        })
    })
})

