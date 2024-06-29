// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
   menuIcon.classList.toggle("bx-x");
   navbar.classList.toggle("active");
}

/* Scroll section active link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log("Top ->" + top)
        console.log("offset ->" + offset)
        console.log("height ->" + height)
        console.log("Nombre de Id ->" + id)

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });

    /*stiky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('stiky', window.scrollY > 100);

    /*remoce toggle icon and navbar when click*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};





