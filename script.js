// Download CV 
const pdfUrl = "/assets/Seif_El_Sayed.pdf";
const cvBtn = document.getElementById("cv-btn");
cvBtn.addEventListener("click", () => {
    const link = document.createElement("a"); 
    link.href = pdfUrl; 
    link.download = "Seif_El_Sayed MERN Stack developer"; 
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 
});
// skills animation
const skills = document.getElementById("skills");
const spans = document.querySelectorAll(".skills .progress span");

// Reveal about me 
const about = document.getElementById("about");
const box = document.querySelector(".box");

if (skills && spans.length > 0 && about && box) {
    window.addEventListener("scroll", () => {
        // skills animation
        if (window.scrollY >= skills.offsetTop - 230) {
            spans.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        }

        // Reveal about me 
        const aboutPosition = about.getBoundingClientRect().top;
        if (aboutPosition <= window.innerHeight - 200) {
            box.classList.add("active");
        }
    });
} else {
    console.error("Error: One or more elements not found!");
}
// Reveal project on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".projects .project");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });
    projects.forEach(project => observer.observe(project));
});
// scroll arrow
window.onscroll = function() {
    const button = document.getElementById('scroll-btn');
    if (window.scrollY > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};
function scroll_top () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}