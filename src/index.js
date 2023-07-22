import './index.html';
import './style.css';
import app from './app';
import views from './views';

const init = () => {
  views.init();
  app.init();
};

init();
