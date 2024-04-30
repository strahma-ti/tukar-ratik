import Stepper from '../../Elements/Stepper/Stepper';
import { Link } from 'react-router-dom';

function OurServices() {
  return (
    <section
      id="our-services"
      className="w-full px-[150px] flex flex-col gap-[60px] items-center"
    >
      <div
        id="our-services-title"
        className="flex flex-col gap-[15px] text-center"
      >
        <h2 className="text-H3 text-primary-800">Layanan Kami</h2>
        <p className="w-[833px] text-H3 font-bold text-primary-800">
          Kini, mengelola limbah organik akan lebih mudah dengan menggunakan
          layanan dari tukaRatik.
        </p>
      </div>
      <div id="our-services-content" className="flex flex-col gap-[90px]">
        <div id="our-services-left-content" className="flex gap-6 items-center">
          <div
            className="w-[360px] h-[364px] rounded-xl bg-cover px-10 py-[26px] flex items-center justify-center"
            style={{
              backgroundImage: "url('images/LandingPage/ourservices-img1.png')",
            }}
          >
            <Stepper />
          </div>
          <div className="flex flex-col gap-[21px] w-[754px] h-[338px]">
            <h1 className="text-H2 font-bold text-primary-700">
              Kirim Dulu Limbahnya
            </h1>
            <p className="text-Title text-primary-800 text-justify text-pretty">
              Dengan fitur "Kirim Limbah", anda dapat mengelola limbah organik
              dengan beberapa langkah sederhana. <br />
              <br />
              Isi formulir yang disediakan di platform kami lalu tunggu
              konfirmasi dari sistem. Kami akan mencocokkan permintaan dengan
              driver terdekat yang akan menjemput limbah dari lokasi pengguna.{' '}
              <br />
              <br />
              Selama proses ini, pengguna dapat memantau status pengambilan
              limbah mereka melalui platform kami. Saat limbah telah diambil dan
              diproses di pusat pengolahan, poin akan diterima untuk digunakan
              pada tukar poin.
            </p>
            <Link
              to="/kirimlimbah"
              className="text-Subtitle text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 size-fit px-10 py-[10px] rounded-3xl self-end active:scale-90"
            >
              Kirim Limbah
            </Link>
          </div>
        </div>
        <div id="our-services-right" className="flex gap-6 group">
          <div className="flex flex-col gap-[21px] w-[649px]">
            <h1 className="text-H2 font-bold text-primary-700">
              Jangan Lupa Tukar Poin Ya!
            </h1>
            <p className="text-Title text-primary-800 text-pretty">
              Masuk ke "Tukar Poin" untuk menukar poin yang didapatkan dari
              pengiriman limbah dengan produk segar langsung dari petani dan
              peternak lokal. <br />
              <br />
              Kami menawarkan produk sayuran segar dan telur dari petani dan
              peternak lokal, yang dijamin keaslian dan kualitasnya. Setiap
              produk memiliki nilai poin yang sesuai, dan pengguna dapat
              menukarkan poin mereka sesuai dengan preferensi masing-masing.{' '}
              <br />
              <br />
              Proses tukar poin dilakukan secara online melalui platform kami,
              yang memudahkan pengguna untuk memilih dan memesan produk dengan
              cepat dan mudah. Setelah memesan, produk akan dikirimkan ke alamat
              yang telah ditentukan oleh pengguna. <br />
              <br />
              Dengan “Tukar Poin”, Anda ikut mendukung pertanian lokal dan
              peternak di sekitar kita.
            </p>
            <Link
              to="/tukarpoin"
              className="text-Subtitle text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 size-fit px-10 py-[10px] rounded-3xl active:scale-90"
            >
              Tukar Poin
            </Link>
          </div>
          <div className="w-[465px] h-[454px] overflow-hidden rounded-xl group-hover:scale-95 transition duration-700 cursor-pointer">
            <img
              src="images/LandingPage/ourservices-img2.png"
              alt=""
              className="size-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
