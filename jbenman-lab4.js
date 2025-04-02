// J Benman
// ITMD 441-01 Undergrad Student

// requirement 1: change hero headline
(function() {
  document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
})();

// requirement 2: change the line of text below the hero headline
(function() {
  document.querySelector('#hero p').innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <i><b>thrive</b></i> and <i><b>excel</b></i>.";
})();

// requirement 3: change the image in the background of the hero
(function() {
  document.querySelector('#hero').style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
})();

// requirement 4: change the background color of the nav bar
(function() {
  document.querySelector('header').style.backgroundColor = 'rgb(31 41 55 / var(--tw-bg-opacity, 1))';
})();

// requirement 5: remove the “Get Started” CTA 
(function() {
  document.querySelector('#hero a').remove();
})();

// requirement 6: center align the heading for sections
(function() {
  document.querySelector('nav').style.textAlign = 'center';
})();

// requirement 7: change services icons color
(function() {
  const icons = document.querySelectorAll('[data-icon]');
  icons.forEach(icon => {
    if (icon) {
      icon.style.color = '#47C714';
    }
  });
})();

// requirement 8: change the digital marketing icon to use 'Ads Click'
(function() {
  document.querySelector('[data-icon="digital"]').textContent = 'ads_click';
})();

// requirement 9: change to the layout of the tiles so that at >= 1024px they are 4 across
(function() {
  const cards = document.querySelector('[data-section="product_cards"');
  if (cards) {
    cards.style.gridTemplateColumns = 'repeat(4, 1fr)';
  }
})();

// requirement 10: change the Musicians image
(function() {
  const musciciansImage = document.querySelector('img[alt="Musicians"]');
  if (musciciansImage) {
    musciciansImage.src = 'https://picsum.photos/id/453/400/300'
  }
})();