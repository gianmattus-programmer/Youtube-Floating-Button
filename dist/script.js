// Script del Botón de YouTube
document.addEventListener("DOMContentLoaded", function () {
    // Crear elemento del botón
    const ytButton = document.createElement("a");
    ytButton.href = "https://www.youtube.com/@gianmattus-programmer";
    ytButton.target = "_blank";
    ytButton.className = "youtube-button";
  
    // Agregar ícono SVG
    ytButton.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
      <span class="subscribe-text">Suscríbete</span>
    `;
  
    // Crear estilos
    const style = document.createElement("style");
    style.textContent = `
      .youtube-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ff0000;
    color: white;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    z-index: 99999;
    animation: float 3s ease-in-out infinite;
  }
  
  .youtube-button svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  
  .subscribe-text {
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-size: 0;
    max-width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s ease;
  }
  
  /* Efectos de Hover */
  .youtube-button:hover {
    background-color: #e60000;
    width: 140px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    gap: 8px;
  }
  
  .youtube-button:hover .subscribe-text {
    font-size: 14px;
    max-width: 100px;
    padding-right: 8px;
  }
  
  .youtube-button:hover svg {
    transform: rotate(360deg);
  }
  
  /* Animación Flotante */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  /* Efecto de Onda al Hacer Click */
  .youtube-button:active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    animation: ripple 0.6s linear;
  }
  
  @keyframes ripple {
    from { transform: scale(0); opacity: 1; }
    to { transform: scale(2); opacity: 0; }
  }
  
  /* Responsive para Móviles */
  @media (max-width: 480px) {
    .youtube-button {
      bottom: 10px;
      right: 10px;
      width: 45px;
      height: 45px;
    }
  
    .youtube-button:hover {
      width: 120px;
    }
  
    .youtube-button svg {
      width: 20px;
      height: 20px;
    }
  
    .subscribe-text {
      font-size: 12px;
    }
  }
    `;
  
    // Crear superposición de introducción
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.3);
      backdrop-filter: blur(5px);
      z-index: 9998;
      transition: opacity 0.5s ease;
    `;
  
    // Agregar elementos al DOM
    document.head.appendChild(style);
    document.body.appendChild(overlay);
    document.body.appendChild(ytButton);
  
    // Animación de introducción
    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 500);
      ytButton.style.animation = "float 3s ease-in-out infinite, none";
    }, 1000);
  
    // Simulación inicial del hover
    setTimeout(() => {
      ytButton.style.cssText = `width: 140px;gap: 8px;`;
      ytButton.querySelector(".subscribe-text").style.cssText = `
      font-size: 14px;
      max-width: 100px;
      padding-right: 8px;
    `;
    }, 100);
    setTimeout(() => {
      ytButton.style.cssText = "";
      ytButton.querySelector(".subscribe-text").style.cssText = "";
    }, 2000);
  });
