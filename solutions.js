    document.addEventListener('DOMContentLoaded', function () {

        // Övning 1
        var ul = document.querySelector("header nav ul");
        var newLi = document.createElement("li");
        newLi.innerHTML = "<a href='#'>Logga in</a>";
        ul.appendChild(newLi);

        // Övning 2
        var headlines = ["Produkter", "tjänster", "Om oss", "Köpvillkor", "Rune Tipsar"];
        var lis = document.querySelectorAll("header nav ul li");

        lis.forEach(function (li, index) {
            // index för att vi vill ha en räknare som stegar igenom headlines, i samma takt som lis.
            li.innerHTML = `<a href='#'>${headlines[index]}</a>`;
        })
        // I och med att det finns sex LI men bara fem headlines, så kan det vara på plats att göra en speciallösning för den sista LI:n och återställa den.
        lis[lis.length - 1].innerHTML = "<a href='#'>Logga in</a>";

        // Övning 3
        var nav = document.getElementsByTagName("nav");
        nav[0].classList.add("danger");

        // Övning 4
        var products = document.querySelectorAll("section:first-child article h2");
        var newProdNames = ["Slipsten Gun", "Gravstenen Hjalmar", "Standardgrus"];
        products.forEach(function (product, index) {
            product.innerText = newProdNames[index];
        });

        // Övning 5
        var secondProduct = document.querySelector("section:first-child article:nth-child(2) p");
        var brytIndex = secondProduct.innerText.indexOf("Köp");
        var newText = secondProduct.innerText.slice(0, brytIndex);
        newText += "Köp 3, betala för 2.";
        secondProduct.innerText = newText;

        // Övning 6
        var beta = document.querySelector("section:last-child article:nth-child(3)");
        beta.parentNode.removeChild(beta);

        // Övning 7
        var saturday = document.getElementsByTagName("li");
        saturday[saturday.length - 1].innerText = "Lör 10-12";

        // Övning 8
        var divs = document.querySelectorAll("footer div");
        divs.forEach(function (div) {
            div.classList.add("gold");
        })

        // Övning 9
        var langElement = document.getElementsByTagName("html");
        langElement[0].lang = "sv";


        // LÖSNINGSFÖRSLAG TILL EVENT-ÖVNINGAR
        // Övning 1
        var topRubrik = document.getElementsByTagName("h1");
        topRubrik[0].addEventListener('click', function () {
            topRubrik[0].innerText = "Gnejs Ltd"
        });

        // Övning 2
        // På rad 1 kör vi redan DOMContentLoaded, så därför finns den inte med här.
        var allaP = document.getElementsByTagName("p");
        console.log("Antal p-element: " + allaP.length);

        // Övning 3
        var adress = document.querySelector("footer>div>p");

        adress.addEventListener('click', function () {
            var txt = adress.innerHTML;
            var cut = txt.slice(txt.indexOf("3"), (txt.indexOf("3") + 6));
            var newAdress = txt.replace(cut, "");
            adress.innerHTML = newAdress;
        })

        // Övning 4
        // Jag vill be om ursäkt för att den här övningen även krävde att man ändrade i css-filen (i mitt fall raderna 75-79)
        var prod1 = document.querySelector("section:first-child article");

        prod1.addEventListener('mouseover', function () {
            prod1.classList.add("danger");
        });
        prod1.addEventListener('mouseleave', function () {
            prod1.classList.remove("danger");
        });

        // Övning 5
        var inp = document.getElementById("visitorName");
        inp.addEventListener('focus', function () {
            inp.value = "Nu i fokus";
        })
        // Övning 5b
        inp.addEventListener('blur', function () {
            inp.value = "Mitt namn"; // Återställ värdet.
            inp.disabled = true;
        })

        // Övning 6
        var lbl = document.querySelector("form label");
        var userInput = "";
        inp.addEventListener('keyup', function (e) {
            lbl.innerText = inp.value;
        })


    })