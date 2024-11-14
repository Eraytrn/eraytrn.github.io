function displayDateAndTime() {
			const dateElement = document.getElementById("date");
			const timeElement = document.getElementById("time");
			const currentDate = new Date();
			const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		
			dateElement.innerHTML = currentDate.toLocaleDateString('tr-TR', dateOptions);
			timeElement.innerHTML = currentDate.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
		}
		setInterval(displayDateAndTime, 1000);

function toggleText() {
	const moreText = document.getElementById("moreText");
	const button = document.getElementById("seeMore");

	if (moreText.classList.contains("hidden")) {
		moreText.classList.remove("hidden");
		button.textContent = "Daha Az Gör";
	} else {
		moreText.classList.add("hidden");
		button.textContent = "Daha Fazla Gör";
	}
}


function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        if (category === "all" || project.getAttribute("data-category") === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");
    const description = document.getElementById("description");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = card.querySelector("img").src;
            caption.textContent = card.querySelector("h2").textContent;
            description.textContent = card.querySelector("p").textContent;
        });
    });

    document.querySelector(".close").addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const isim = document.getElementById('isim').value.trim();
    const eposta = document.getElementById('eposta').value.trim();
    const mesaj = document.getElementById('mesaj').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.style.display = 'none';

    if (!isim || !eposta || !mesaj) {
        errorMessage.textContent = 'Lütfen tüm alanları doldurun.';
        errorMessage.style.display = 'block';
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(eposta)) {
        errorMessage.textContent = 'Hatalı e-posta girişi.';
        errorMessage.style.display = 'block';
        return;
    }

    alert('Form başarıyla gönderildi!');
    document.getElementById('contact-form').reset(); 
});

