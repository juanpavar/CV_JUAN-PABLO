
const buttons = document.querySelectorAll('.fa');

const infoElement = document.getElementById('info');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    
    const info = button.getAttribute('data-info');
    
    infoElement.textContent = info;
  });
    
  button.addEventListener('mouseout', () => {
    infoElement.textContent = '';
  });
});
