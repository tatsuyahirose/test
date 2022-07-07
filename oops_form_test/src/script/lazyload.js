const doObserve = (element) => {
  const targets = document.querySelectorAll(element);
  const options = {
    root: null,
    rootMargin: '50px 0px 100px 0px',
    threshold: 0
  }
  const observer = new IntersectionObserver((items) => {
    items.forEach((item, index) => {
      if (item.isIntersecting) {
        if (item.target.classList.contains('js-lazyLoading') && !item.target.getAttribute('src')) {
          const srcUrl = item.target.getAttribute('data-lazy');
          item.target.setAttribute('src', srcUrl);
        }
      }
    });
  }, options);
  Array.from(targets).forEach((target) => {
    observer.observe(target);
  });
}
doObserve('.js-lazyLoading');