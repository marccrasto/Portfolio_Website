import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);