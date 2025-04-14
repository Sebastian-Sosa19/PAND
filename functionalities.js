window.addEventListener('load', () => {
    const div = document.getElementById('question-container');
  
    // Check the computed style
    const computedStyle = window.getComputedStyle(div);
    console.log(computedStyle.display);  // Should log 'none'
})

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const yyyy = today.getFullYear();

    const revealBtn = document.getElementById("revealBtn");
    const intro = document.getElementById("intro");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");

    revealBtn.addEventListener("click", () => {
        // Add the hidden class to fade it out
        intro.classList.add("hidden");
    });

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    textoSpan = document.getElementById('fecha')
    textoSpan.textContent = formattedToday;    
    
    yesBtn.addEventListener("click", () => {
        modalContent.innerHTML = `
            <h2>Gracias por existir 💖</h2>
            <img src="img/photos.gif" alt="ourphotos" style="width:100%; max-width:300px;">
            <p>La vida se ha vuelto más bonita teniéndote a mi lado, espero ser la persona
            con la que querrás estar cada día, yo sé que sos vos con quién quiero estar,
            Andrea Dayanara &#128151.<br>
            
            </p>
            <button id="closeModal">BESEMONOS YAAAAA</button>
        `;
        showModal();
    });
    
    noBtn.addEventListener("click", () => {
        modalContent.innerHTML = `
          <h2>😭</h2>
          <img src="img/sadmario.jpg" alt="Sad Meme" style="width:100%; max-width:300px;">
          <button id="closeModal">respuesta incorrecta</button>
        `;
        showModal();
    });

    function showModal() {
        modal.classList.add("show");
    
        // Re-select close button after injecting new HTML
        const newCloseBtn = document.getElementById("closeModal");
        newCloseBtn.addEventListener("click", () => {
          modal.classList.remove("show");
        });
    }
    
});

// setTimeout(() => {
//     document.getElementById('question-container').style.display = 'none';
// }, 100);

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    document.body.appendChild(heart);

    // Random position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s to 5s

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500); // Creates a heart every 0.5s

function showProposal(elemID, e){
    var x = document.getElementById(elemID);
    var body = document.body
    // console.log(x.style.display) 
    if (x.style.display === "none" || x.style.height === "0px") {
        x.style.display = "inline-block";  // Make the div visible
        x.style.height = "0";              // Start with height 0
        x.style.opacity = "0";             // Start with opacity 0
        x.style.transition = "height 0.5s, opacity 0.5s"; // Transition for smooth effect
        x.style.border = "3px solid transparent"; // Start with transparent border
        body.style.height = (body.scrollHeight + 306) + "px";
        setTimeout(function() {
            x.style.height = "300px";       // Set the height (adjust to your content height)
            x.style.opacity = "1";          // Fade in
            x.style.border = "3px solid  #ff4081"
            x.style.borderRadius = "7.5px"
            x.style.marginTop = "1em"
        }, 10);  // Delay to ensure display change takes effect first
        
        setTimeout(function() {
            x.scrollIntoView({
                behavior: 'smooth', // Optional: adds smooth scrolling
                block: 'center'     // Scroll to the center of the div
            });
        }, 200);  // Wait a bit to ensure the div is fully visible before scrolling

        // document.getElementById("proposalBtn").textContent = "esconder eso jsjsjs";
        
    } else {
        body.style.height = (body.scrollHeight - 306) + "px";
        x.style.height = "0";             // Start sliding up (reduce height to 0)
        x.style.opacity = "0";            // Fade out
        setTimeout(function() {
            x.style.display = "none";     // Hide the div after the slide-up animation completes
        }, 500);  // Wait for the transition to finish (0.5s)
        
        // document.getElementById("proposalBtn").textContent = "Te quiero decir";
    }
    
}