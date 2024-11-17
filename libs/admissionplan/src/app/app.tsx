import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../pages/Cards';

export const AdmissionPlan = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
    </Routes>
  );
};
