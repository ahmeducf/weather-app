export const showLoadingComponent = () => {
  document.body.classList.add('loading');

  const bodyChilds = document.querySelectorAll('body > *');
  bodyChilds.forEach((child) => {
    child.classList.add('hidden');
  });

  const loadingComponent = document.createElement('span');
  loadingComponent.classList.add('loader');
  document.body.appendChild(loadingComponent);
};

export const hideLoadingComponent = () => {
  document.body.classList.remove('loading');

  const bodyChilds = document.querySelectorAll('body > *');
  bodyChilds.forEach((child) => {
    child.classList.remove('hidden');
  });

  const loadingComponent = document.querySelector('.loader');
  document.body.removeChild(loadingComponent);
};
