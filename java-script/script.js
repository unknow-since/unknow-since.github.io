// Lista över reklamer (bild + text)
const ads = [
    {
      image: "images/i stone.jpg",
      text: "Världens bästa telefon med 100% hållbarhet"
    },
    {
      image: "/images/sven anders.jpg",
      text: "Nyhet: Vårens hetaste produkt är här!"
    },
    {
      image: "/images/äcklig jävla sten.jpg",
      text: "äcklig jävla snusk sten"
    },
    {
      image: "/images/fågeln bert.jpg",
      text: "Du kommer att köpa något"
    }
  ];
  
  function getRandomPosition() {
    const maxTop = window.innerHeight - 200;
    const maxLeft = window.innerWidth - 320;
    const top = Math.floor(Math.random() * maxTop);
    const left = Math.floor(Math.random() * maxLeft);
    return { top, left };
  }
  
  function showAdPopup() {
    const popup = document.getElementById('popupAd');
    const content = document.getElementById('popupContent');
    const image = document.getElementById('adImage');
    const text = document.getElementById('adText');
  
    if (popup.style.display === 'block') return;
  
    // Välj en slumpmässig reklam
    const ad = ads[Math.floor(Math.random() * ads.length)];
    image.src = ad.image;
    text.textContent = ad.text;
  
    // Placera på slumpmässigt ställe
    const { top, left } = getRandomPosition();
    content.style.top = `${top}px`;
    content.style.left = `${left}px`;
  
    popup.style.display = 'block';
  }
  
  function scheduleNextAd() {
    const interval = Math.floor(Math.random() * (40000 - 20000 + 1)) + 20000;
    setTimeout(() => {
      showAdPopup();
      scheduleNextAd();
    }, interval);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    scheduleNextAd();
  
    document.getElementById('closePopup').addEventListener('click', function () {
      document.getElementById('popupAd').style.display = 'none';
    });
  });
  