import { Link, Route, Routes } from 'react-router-dom';

export const TTQ = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to="rules">
            <div className="h-screen">Tedrisin teshkili qaydalari</div>
          </Link>
        }
      />
      <Route path="/rules" element={<div className="h-screen">Qaydlar</div>} />
    </Routes>
  );
};
