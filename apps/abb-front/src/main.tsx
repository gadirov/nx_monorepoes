import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { i18nInstance } from '@react-monorepo/translation';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
i18nInstance.init(() => {
  root.render(<App />);
});
