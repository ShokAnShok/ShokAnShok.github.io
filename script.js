// Zegar czasu rzeczywistego
setInterval(() => {
    const zegar = document.getElementById("zegar");
    if (zegar) {
        const teraz = new Date();
        zegar.textContent = teraz.toLocaleTimeString();
    }
}, 1000);

// Odliczanie do otwarcia / zamknięcia
function odliczanieOtwarcia() {
    const teraz = new Date();
    const godzina = teraz.getHours();
    const minuty = teraz.getMinutes();
    const sekundy = teraz.getSeconds();

    const otwarcie = 10;
    const zamkniecie = 22;
    let status = "",
        czas = "";

    if (godzina < otwarcie) {
        const h = otwarcie - godzina - 1;
        const m = 59 - minuty;
        const s = 59 - sekundy;
        status = "Restauracja jest ZAMKNIĘTA.";
        czas = `Otwarcie za ${h}h ${m}m ${s}s`;
    } else if (godzina >= otwarcie && godzina < zamkniecie) {
        const h = zamkniecie - godzina - 1;
        const m = 59 - minuty;
        const s = 59 - sekundy;
        status = "Restauracja jest OTWARTA.✅";
        czas = `Zamknięcie za ${h}h ${m}m ${s}s`;
    } else {
        const h = 23 - godzina + 10;
        const m = 59 - minuty;
        const s = 59 - sekundy;
        status = "Restauracja jest ZAMKNIĘTA.❌";
        czas = `Otwarcie jutro za ${h}h ${m}m ${s}s`;
    }

    const div1 = document.getElementById("status-otwarcia");
    const div2 = document.getElementById("odliczanie-otwarcia");
    if (div1 && div2) {
        div1.textContent = status;
        div2.textContent = czas;
    }
}
setInterval(odliczanieOtwarcia, 1000);
odliczanieOtwarcia();

// Przełącznik motywu
const przelaczMotyw = document.getElementById("przelacz-motyw");
if (przelaczMotyw) {
    przelaczMotyw.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        // Można też zapisać preferencję w localStorage
        const jestDark = document.body.classList.contains("dark");
        localStorage.setItem("motyw", jestDark ? "dark" : "light");
    });
}

// Przy ładowaniu strony – wczytaj motyw z localStorage
window.addEventListener("DOMContentLoaded", () => {
    const zapisanyMotyw = localStorage.getItem("motyw");
    if (zapisanyMotyw === "dark") {
        document.body.classList.add("dark");
    }
});


// Odliczanie do wydarzenia
function odliczDoWydarzenia1() {
    const cel = new Date("2025-06-15T18:00:00");
    const teraz = new Date();
    const roznica = cel - teraz;

    const el = document.getElementById("odliczanie-wydarzenia1");
    if (!el) return;

    if (roznica > 0) {
        const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        const godziny = Math.floor((roznica / (1000 * 60 * 60)) % 24);
        const minuty = Math.floor((roznica / (1000 * 60)) % 60);
        const sekundy = Math.floor((roznica / 1000) % 60);
        el.textContent = `Wydarzenie za: ${dni} dni ${godziny}h ${minuty}m ${sekundy}s`;
    } else {
        el.textContent = "Wydarzenie już trwa!";
    }
}

setInterval(odliczDoWydarzenia1, 1000);
odliczDoWydarzenia1();

function odliczDoWydarzenia2() {
    const cel = new Date("2025-07-02T16:30:00");
    const teraz = new Date();
    const roznica = cel - teraz;

    const el = document.getElementById("odliczanie-wydarzenia2");
    if (!el) return;

    if (roznica > 0) {
        const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
        const godziny = Math.floor((roznica / (1000 * 60 * 60)) % 24);
        const minuty = Math.floor((roznica / (1000 * 60)) % 60);
        const sekundy = Math.floor((roznica / 1000) % 60);
        el.textContent = `Wydarzenie za: ${dni} dni ${godziny}h ${minuty}m ${sekundy}s`;
    } else {
        el.textContent = "Wydarzenie już trwa!";
    }
}

setInterval(odliczDoWydarzenia2, 1000);
odliczDoWydarzenia2();

function otworzMenu(x) {
    let y = x.querySelector(".strzala")
    x = x.parentElement.querySelector(".menuopen")
    if (x.style.height == "" || x.style.height == "0px") {
        x.style.height = "330px";
        y.style.rotate = "0deg"
    } else {
        x.style.height = "0";
        y.style.rotate = "90deg"
    }
}


function pokazObrazek1(sciezka) {
  const img = document.querySelector('#menuimg1');
  if (img) img.src = sciezka;
}
function pokazObrazek2(sciezka) {
  const img = document.querySelector('#menuimg2');
  if (img) img.src = sciezka;
}
function pokazObrazek3(sciezka) {
  const img = document.querySelector('#menuimg3');
  if (img) img.src = sciezka;
}
function pokazObrazek4(sciezka) {
  const img = document.querySelector('#menuimg4');
  if (img) img.src = sciezka;
}
function pokazObrazek5(sciezka) {
  const img = document.querySelector('#menuimg5');
  if (img) img.src = sciezka;
}

function sprawdzFormularz(){
    if(document.getElementById("imie").value == ""){
        alert("Nie wprowadzono imienia!")
    }
    if(document.getElementById("nazwisko").value == ""){
        alert("Nie wprowadzono nazwiska!")
    }
    if(document.getElementById("email").value == ""){
        alert("Nie wprowadzono adresu e-mail!")
    }
    if(document.getElementById("telefon").value == ""){
        alert("Nie wprowadzono telefonu!")
    }
    if(document.getElementById("telefon").value.length < "9"){
        alert("Wprowadzono nieprawidłowy numer telefonu! (Proszę podać ciąg 9 cyfr)")
    }
    if(document.getElementById("data").value == null) {
        alert("Nie podano daty!")
    }
}

let indeks1 = 1;
let indeks2 = 1;

let elementObrazu = document.getElementById("mainimg");
let elementObrazu2 = document.getElementById("mainimg2");

let strzalkaLewo = document.getElementById("lbutton");
let strzalkaPrawo = document.getElementById("pbutton");
let strzalkaLewo2 = document.getElementById("lbutton2");
let strzalkaPrawo2 = document.getElementById("pbutton2");

function pokazZdjecie() {
  elementObrazu.src = "img/" + indeks1 + ".jpg";
};

function pokazZdjecie2() {
  elementObrazu2.src = "img/rest" + indeks2 + ".jpg";
};

if (strzalkaPrawo) {
  strzalkaPrawo.addEventListener("click", function () {
    indeks1++;
    if (indeks1 > 12) indeks1 = 1;
    pokazZdjecie();
  });
}

if (strzalkaLewo) {
  strzalkaLewo.addEventListener("click", function () {
    indeks1--;
    if (indeks1 < 1) indeks1 = 12;
    pokazZdjecie();
  });
}

if (strzalkaPrawo2) {
  strzalkaPrawo2.addEventListener("click", function () {
    indeks2++;
    if (indeks2 > 12) indeks2 = 1;
    pokazZdjecie2();
  });
}

if (strzalkaLewo2) {
  strzalkaLewo2.addEventListener("click", function () {
    indeks2--;
    if (indeks2 < 1) indeks2 = 12;
    pokazZdjecie2();
  });
}

function powiekszObraz(sciezka) {
  const img = document.querySelector('#mainimg');
  if (img) img.src = sciezka;
  const match = sciezka.match(/\/(\d+)\.jpg$/);
  if (match) {
    indeks1 = parseInt(match[1]);
  }
}

function powiekszObraz2(sciezka) {
  const img = document.querySelector('#mainimg2');
  if (img) img.src = sciezka;
  const match = sciezka.match(/rest(\d+)\.jpg$/);
  if (match) {
    indeks2 = parseInt(match[1]);
  }
}