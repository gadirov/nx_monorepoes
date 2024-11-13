import { Link, Route, Routes } from 'react-router-dom';

export const TTQ = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to={'rules'}>
            <div>Tedrisin teshkili qaydalari</div>
          </Link>
        }
      />
      <Route path="/rules" element={<div>Qaydlar</div>} />
    </Routes>
  );
};
