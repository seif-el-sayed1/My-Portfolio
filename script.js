// Download CV 
const pdfUrl = "/assets/Seif_El_Sayed_CV.pdf";
const cvBtn = document.getElementById("cv-btn");
cvBtn.addEventListener("click", () => {
    const link = document.createElement("a"); 
    link.href = pdfUrl; 
    link.download = "Seif_El_Sayed CV"; 
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);  
});
// skills animationzz
const skills = document.getElementById("skills");
const spans = document.querySelectorAll(".skills .progress span");

// Reveal about me 
document.addEventListener("DOMContentLoaded", () => {
    // Reveal about me (.box inside #about)
    const about = document.getElementById("about");
    const box = document.querySelector(".box");

    if (about && box) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    box.classList.add("active");
                } else {
                    box.classList.remove("active");
                }
            });
        }, { threshold: 0.3 });

        aboutObserver.observe(about);
    } else {
        console.error("Error: One or more elements not found!");
    }

    // Reveal project on Scroll (.projects .project)
    const projects = document.querySelectorAll(".projects .project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    projects.forEach(project => observer.observe(project));
});

// scroll arrow
window.onscroll = function() {
    const button = document.getElementById('scroll-btn');
    if (button) {
        if (window.scrollY > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    }
};

function scroll_top () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
