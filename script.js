document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(el => observer.observe(el));
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Captura o formulário de contato
    const contactForm = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    // Ao enviar o formulário
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio real do formulário

        // Aqui você pode adicionar uma lógica de envio (como um AJAX) se necessário

        // Exibe a mensagem de confirmação
        responseMessage.style.display = "block";

        // Limpar campos após envio
        contactForm.reset();
    });
});

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar animação aos cards
function animateServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
      if (isElementInViewport(card)) {
          card.classList.add('visible');
      }
  });
}

// Chamar a função quando a página for carregada e ao rolar a página
window.addEventListener('load', animateServiceCards);
window.addEventListener('scroll', animateServiceCards);
