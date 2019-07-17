



var banners = ["img/destaque-home.png", "img/destaque-home-2.png", "img/destaque-home-3.png"];
var bannerAtual = 0;


function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 3;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);



