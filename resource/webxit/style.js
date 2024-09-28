echo 'export function applyStyles() {
  const style = document.createElement('style');
  style.type = 'text/css';

style.innerHTML = `
body {
  font-family: Arial, sans-serif;
  background-color: #202020;
  color: white;
  padding: 1vw;
}
@keyframes slideUp {
    from {
        transform: translateY(100%); /* Mulai dari bawah */
        opacity: 0;
    }
    to {
        transform: translateY(0); /* Bergerak ke posisi normal */
        opacity: 1;
    }
}

.slide-up {
    animation: slideUp 0.5s ease-out forwards; /* Pastikan tetap terlihat setelah animasi */
}
.hidden {
    opacity: 0;
    display: none;
    transition: opacity 0.5s ease;
}
}
@keyframes glitch-effect {
  0% { clip: rect(42px, 9999px, 44px, 0); }
  5% { clip: rect(12px, 9999px, 59px, 0); }
  10% { clip: rect(48px, 9999px, 29px, 0); }
  15% { clip: rect(42px, 9999px, 73px, 0); }
  20% { clip: rect(63px, 9999px, 27px, 0); }
  25% { clip: rect(34px, 9999px, 55px, 0); }
  100% { clip: rect(4px, 9999px, 91px, 0); }
}
@keyframes bar-fill-animation {
  0%, 100% { width: 0; }
  50% { width: 100%; }
}
@keyframes bar-glitch-animation {
  0% { background-position: 0 0; }
  100% { background-position: 200% 0; }
}
@keyframes particle-animation {
  0% { opacity: 0; transform: translate(0, 0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translate(2em, 2em); }
}
@font-face {
  font-family: 'Poppins-Medium';
  src: url('https://raw.githubusercontent.com/HenBz10Real/source_img/main/fonts/Poppins-Medium.ttf') format('truetype');
}
.custom-text {
  font-family: 'Poppins-Medium';
  font-size: 4vw;
}
.floating-login {
  position: fixed;
  bottom: 8vw;
  left: 50%;
  transform: translateX(-50%);
  padding: 3vw 7vw;
  font-size: 5vw;
  color: white;
  font-weight: 600;
  background-color: #ff5503;
  border: none;
  border-radius: 20vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0,.2);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.containers {
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 8px;
}
.labels {
  margin-right: 20px;
  font-size: 16px;
}
.dropdown {
  background-color: #ff5503;
  color: #fff;
  border: none;
  padding: 5px;
  border-radius: 10px;
  font-size: 3vw;
  cursor: pointer;
}
.dropdown:focus {
  outline: none;
}
.loading-dialog {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
}
.loading-dialog.active {
  display: block;
}
.completionMessage.active {
  display: block;
}
.loadedd {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.overlay.active {
  display: block;
}
.loader {
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #fff;
}
  .loader:before,
  .loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  .loader:after {
    color: #FF3D00;
    transform: rotateY(70deg);
    animation-delay: .4s;
  }

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
}

.container {
  margin: 0 auto;
  background-color: #2c2c2e;
  justify-content: center;
  padding: 25px;
  padding-bottom: 100px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}
.xit {
  font-size: 4vw;
}
.infodev {
  font-size: 2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2vw;
}
.dev {
  width: auto;
  background-color: #232323;
  border-radius: 10vw;
  padding: 1vw 2vw;
  display: flex;
  font-size: 2vw;
  justify-content: center;
  color: #aaa;
}
.text-settings {
  font-size: 1vw;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
header p {
  font-size: 3vw;
}
header h1 {
  font-size: 1.5rem;
}
.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3a3a3c;
  border-radius: 8px;
  margin-bottom: 20px;
}
.status img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 2vw;
}
.settings label {
  font-size: 3.2vw;
}
/* Switch styling */
.switch {
  position: relative;
  display: inline-block;
  width: 10vw;
  height: 6vw;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #888;
  transition: .4s;
  border-radius: 30px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 4vw;
  width: 4vw;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #ff5503;
}
input:checked + .slider:before {
  transform: translateX(4vw);
}
.save-restart {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
button {
  padding: 10px;
  background-color: #4cd137;
  border: none;
  color: rgb(24, 17, 17);
  border-radius: 6px;
  cursor: pointer;
}
`;

  // Menyisipkan elemen <style> ke dalam <head> HTML
  document.head.appendChild(style);
}'> /storage/emulated/0/VortexModules/webxit/webroot/styleProperties.js
