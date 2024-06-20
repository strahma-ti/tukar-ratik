import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() =>
  import('../components/Pages/LandingPage/LandingPage')
);
const KirimLimbah = React.lazy(() =>
  import('../components/Pages/KirimLimbah/KirimLimbah')
);
const TukarPoin = React.lazy(() =>
  import('../components/Pages/TukarPoin/TukarPoin')
);
// const LoginPage = React.lazy(() =>
//   import('../components/Pages/AuthPage/LoginPage')
// );
// const RegisterPage = React.lazy(() =>
//   import('../components/Pages/AuthPage/RegisterPage')
// );
const AuthPage = React.lazy(() =>
  import('../components/Pages/AuthPage/AuthPage')
);
const CekAdminPage = React.lazy(() =>
  import('../components/Pages/CekAdminPage/CekAdminPage')
);
const DetailProdukPage = React.lazy(() =>
  import('../components/Pages/DetailProdukPage/DetailProdukPage')
);
const KeranjangPage = React.lazy(() =>
  import('../components/Pages/KeranjangPage/KeranjangPage')
);
const CheckoutPage = React.lazy(() =>
  import('../components/Pages/CheckoutPage/CheckoutPage')
);
const RiwayatKirimLimbahPage = React.lazy(() =>
  import('../components/Pages/RiwayatPage/RiwayatKirimLimbahPage')
);
const RiwayatTukarPoinPage = React.lazy(() =>
  import('../components/Pages/RiwayatPage/RiwayatTukarPoinPage')
);
const BerhasilDitukarPage = React.lazy(() =>
  import('../components/Pages/BerhasilDitukarPage/BerhasilDitukarPage')
);

const ProjectRoutes = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  const handleLoginState = () => {
    localStorage.setItem('isLogin', isUserLogin);
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/kirimlimbah" element={<KirimLimbah />} />
          <Route path="/tukarpoin" element={<TukarPoin />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> */}
          <Route
            path="/auth"
            element={
              <AuthPage
                handleLoginState={handleLoginState}
                setLoginState={setIsUserLogin}
              />
            }
          />
          <Route path="/cek-admin" element={<CekAdminPage />} />
          <Route path="/produk/:id" element={<DetailProdukPage />} />
          <Route path="/keranjang" element={<KeranjangPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/riwayat-kirim-limbah"
            element={<RiwayatKirimLimbahPage />}
          />
          <Route
            path="/riwayat-tukar-poin"
            element={<RiwayatTukarPoinPage />}
          />
          <Route path="/success" element={<BerhasilDitukarPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
