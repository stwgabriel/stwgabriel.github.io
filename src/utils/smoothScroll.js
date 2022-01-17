function handleScroll(e) {

  e.preventDefault();
  const { target } = e;
  const finalTargetId = target.getAttribute('href');
  const finalTarget = document.querySelector(finalTargetId).offsetTop;

  document.getElementById('page-container').scroll({
    top: finalTarget,
    behavior: 'smooth',
  });
}

function addScrollListener() {

  const intenalLinks = document.querySelectorAll('a[href^="#"]');

  intenalLinks.forEach((item) => { item.addEventListener('click', handleScroll); });
}

function removeScrollListener() {

  const intenalLinks = document.querySelectorAll('a[href^="#"]');
  intenalLinks.forEach((item) => { item.removeEventListener('click', handleScroll); });
}

export { addScrollListener, removeScrollListener };
