// Download CV 
const pdfUrl = "/assets/Seif_El_Sayed CV.pdf";
const cvBtn = document.getElementById("cv-btn");
cvBtn.addEventListener("click", () => {
    const link = document.createElement("a"); 
    link.href = pdfUrl; 
    link.download = "Seif_El_Sayed CV"; 
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 
});

// skills animation
const skills = document.getElementById("skills");
const spans = document.querySelectorAll(".skills .progress span");

// Reveal about me 
const about = document.getElementById("aboutme");
const box = document.querySelector(".box");

// تأكد من أن العناصر موجودة قبل المتابعة
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
        console.log("aboutPosition:", aboutPosition, "window.innerHeight:", window.innerHeight);
        
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
