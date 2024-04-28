import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() => import('../components/Pages/LandingPage/LandingPage'));
const KirimLimbah = React.lazy(() => import('../components/Pages/KirimLimbah/KirimLimbah'));
const TukarPoin = React.lazy(() => import('../components/Pages/TukarPoin/TukarPoin'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/kirimlimbah" element={<KirimLimbah />} />
          <Route path="/tukarpoin" element={<TukarPoin />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
