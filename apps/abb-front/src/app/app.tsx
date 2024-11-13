// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { AdmissionPlan } from '@react-monorepo/admissionplan';
import { TTQ } from '@react-monorepo/TTQ';
import { Main } from '@react-monorepo/ui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Main />,
      children: [
        { index: true, element: <AdmissionPlan /> },
        { path: 'ttq/*', element: <TTQ /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
