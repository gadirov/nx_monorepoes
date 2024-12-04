import { Route, Routes } from 'react-router-dom';
import Cards from './pages/Cards';
import Home from './pages/Home';

export const AdmissionPlan = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
