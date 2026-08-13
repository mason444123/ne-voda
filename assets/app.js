const observed = document.querySelectorAll('.reveal');
const technologySection = document.querySelector('.technology')?.closest('.visual-section');
const assortmentSection = document.querySelector('.assortment')?.closest('.visual-section');
const networkSection = document.querySelector('.network');
const productSection = document.querySelector('#product');
if (productSection && assortmentSection && networkSection && technologySection) {
  productSection.after(assortmentSection);
  assortmentSection.after(networkSection);
  networkSection.after(technologySection);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    // The long network section can straddle the viewport edge; replaying its
    // reveal there makes the layout feel as if it jumps. Keep it visible once seen.
    if (target.classList.contains('network') && isIntersecting) {
      target.classList.add('visible');
      observer.unobserve(target);
      return;
    }
    target.classList.toggle('visible', isIntersecting);
  });
}, { threshold: 0.12 });
observed.forEach((section) => observer.observe(section));
