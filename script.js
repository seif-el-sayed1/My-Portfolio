// Dawnload CV 
const pdfUrl = "/assets/Seif_El_Sayed CV.pdf"
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
const skills = document.getElementById("skills")
let spans = document.querySelectorAll(".skills .progress span")
window.onscroll = () => {
    if (window.scrollY >= skills.offsetTop - window.innerHeight + 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}