
let menuBar = document.querySelector(".menu-list");
let bar = document.querySelector(".icon-bar");

// bar.addEventListener("click", function (e) {
//     let d =  !== "block" ? "block" : "none";

//     ulMenu.classList.toggle(ulMenu.style.display = d);
// });


bar.addEventListener("click", function (e) {
    e.stopPropagation();
    menuBar.style.display = menuBar.style.display !== "block" ? "block" : "none";
});

menuBar.addEventListener("click", function (e) {
    e.stopPropagation();
});

function removeClass() {
    menuBar.style.display = ''
}

window.addEventListener("resize", function () {
    removeClass()

});

document.addEventListener("click", function () {
    removeClass();
});

// #####################################################
let menuList = document.querySelector(".menu-list");
menuList.addEventListener("click", function (e) {
    let courantLink = e.target;
    if (courantLink.matches("a")) {
        let activeLink = document.querySelector(".menu-list a.active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        courantLink.classList.add("active");
    }
});


// ##################################################
// ##################################################


let section = document.querySelector("section");
section.classList.add("service");
section.style.cssText = "background-color:black; height:calc(100vh - 68px); padding-top: 60px; padding-bottom:60px;";

let container = document.createElement("div");
container.classList.add("container");
container.style.color = "white";


let HomeSection = function () {

    //Create Article
    let article = document.createElement("article");
    article.classList.add("article");
    //Create div Container
    let head = document.createElement("div");
    head.classList.add("head");
    head.style.cssText = `
                display:flex; flex-direction:column;
                border-bottom:1px solid #5a5b5a; padding-bottom:60px;`;
    //Create p
    let p = document.createElement("p");
    p.classList.add("title");
    p.innerText = "Mohammed Alkhaldi";

    //Create div Part 2 
    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.style.cssText = `
                display:flex; color:#5a5b5a; text-align:center;
                display:flex; justify-content:start;
                align-items: center;`;
    //Array of list
    let arr = ["Projects", "Interested", "Cv"];

    for (let i = 0; i < 3; i++) {
        let p = document.createElement("p");
        p.classList.add("text");
        p.style.cssText = `
                color:#333;
                border:1px solid #5a5b5a;
                font-size:14px; font-weight:700; cursor: pointer;
                text-algin:center; padding:7px;  margin-right:2px; border-top:none;`;
        p.innerText = arr[i];
        p.addEventListener('mouseenter', function () {
            p.style.color = '#5a5b5a'; // تغيير اللون عند التمرير
        });
        p.addEventListener('mouseleave', function () {
            p.style.color = '#333'; // إعادة اللون عند المغادرة
        });
        homeContent.appendChild(p);
    }

    //Add listener for inside
    homeContent.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    });
    //Add to Doc
    head.appendChild(p);
    article.append(head, homeContent);

    return article;
}


let serviceSection = function () {
    let article = document.createElement("article");
    article.classList.add("article");
    let div = document.createElement("div");
    div.innerText = "Welcome to my Web";
    article.appendChild(div);

    return article;
}
let AboutSection = function () {
    let article = document.createElement("article");
    article.classList.add("article");
    let div = document.createElement("div");
    div.innerText = "About";
    article.appendChild(div);

    return article;
}
let ContactSection = function () {
    let article = document.createElement("article");
    article.classList.add("article");
    let div = document.createElement("div");
    div.innerText = "Contact";
    article.appendChild(div);

    return article;
}


let listOfNavMenu = document.querySelector(".menu-list");
const navList = ["Home", "About", "Service", "Contact"];

// listOfNavMenu.addEventListener("click", function (e) {
//     let target = e.target
//     let arr = [HomeSection(), serviceSection(), AboutSection(), ContactSection()];
//     for (let i = 0; i < navList.length; i++) {
//         if (target.textContent === navList[i]) {
//             let activeLink = document.querySelector(".article");
//             if (activeLink) {
//                 activeLink.remove();
//             }
//             container.append(arr[i]);
//         }
//     }
//     section.append(container);
// });
container.append(HomeSection());
section.append(container);




// let image = document.createElement("img");
// image.classList.add("image");
// image.src = "img/473051.jpg";
// image.style.cssText = "height:100px; width:300px;";
