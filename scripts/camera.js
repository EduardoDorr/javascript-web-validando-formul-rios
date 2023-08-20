const startCameraButton = document.querySelector("[data-video-botao]");
const takePhotoButton = document.querySelector("[data-tirar-foto]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const canvas = document.querySelector("[data-video-canvas]");
const endMessage = document.querySelector("[data-mensagem]");
const sendPhoto = document.querySelector("[data-enviar]");

var imageUrl = ";"

startCameraButton.addEventListener("click", async function() {
  const startVideo = await navigator.mediaDevices
  .getUserMedia({ video: true, audio: false });


  startCameraButton.style.display = "none";
  cameraField.style.display = "block"

  video.srcObject = startVideo;
});

takePhotoButton.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video,0, 0, canvas.width, canvas.height);

  imageUrl = canvas.toDataURL('image/jpeg');

  cameraField.style.display = "none";
  endMessage.style.display = "block";
});

sendPhoto.addEventListener("click", () => {
  const register = JSON.parse(localStorage.getItem("register"));
  
  register.imagem = imageUrl;

  localStorage.setItem("register", JSON.stringify(register));

  window.location.href = "./abrir-conta-form-3.html";
});