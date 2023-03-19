let sectionBullets = document.querySelectorAll("section .bullet")
let contentPairs = document.querySelectorAll("section .content-pair")
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("nav li")

navLinks.forEach((link) => {
    link.onclick = () => {
        navLinks.forEach((link) => {
            link.classList.remove("active")
        })
        link.classList.add("active")
    }
})
sectionBullets.forEach((bullet,index) => {
    bullet.onclick = () => {
        console.log(index)
        bullet.parentElement.querySelectorAll(".bullet").forEach((bullet) => {
            bullet.classList.remove('active')
        })
        bullet.classList.add('active')
        contentPairs.forEach((pair) => {
            console.log(contentPairs.length)
            pair.classList.remove("active");
            pair.style.opacity = "0";
        })
        contentPairs[index].classList.add("active")
        contentPairs.forEach((pair) => {
            if(pair.classList.contains("active")){
                setTimeout(() => {
                    pair.style.opacity = "1";
                }, 50);
            }
        })
    }
})
window.onload = () => {
    setTimeout(() => {
        sections[0].classList.add("active")
    }, 1000);
}
window.onscroll = () => {
    console.log(window.scrollY)
    sections.forEach((section,index) => {
        if(window.scrollY >= section.offsetTop - 1){
            sections.forEach((section) => {
                section.classList.remove("active")
                console.log(section, section.offsetTop)
            })
            section.classList.add("active")
            console.log(section)
        }
    })
}