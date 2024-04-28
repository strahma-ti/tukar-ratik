function GetPoints() {
  return (
    <section className="w-full h-[580px] flex flex-col items-center justify-center bg-others-50/20 gap-[52px]">
      <h1 className="text-H2 font-bold text-primary-700">
        Dapatkan poin dengan menukarkan jenis limbah berikut
      </h1>
      <div className="flex gap-[55px]">
        <div className="w-[247px] h-[350px] bg-primary-600 rounded-xl py-[30px] px-[17px] flex flex-col items-center justify-between group hover:shadow-500 hover:scale-105 transition duration-500">
          <h1 className="text-H3 font-bold text-gray-50">Daun & Tanaman</h1>
          <img
            src="images/LandingPage/getpoints-img1.png"
            alt=""
            className="w-[183px] h-[140px] group-hover:scale-110 transition duration-500"
          />
          <p className="text-Title text-gray-50 text-center">
            Limbah daun dan tanaman termasuk daun kering, ranting, dan potongan
            tanaman.
          </p>
        </div>
        <div className="w-[247px] h-[350px] bg-primary-600 rounded-xl py-[30px] px-[17px] flex flex-col items-center justify-between group hover:shadow-500 hover:scale-105 transition duration-500">
          <h1 className="text-H3 font-bold text-gray-50">Sisa Makanan</h1>
          <img
            src="images/LandingPage/getpoints-img2.png"
            alt=""
            className="w-[146px] h-[144px] object-cover group-hover:scale-110 transition duration-500"
          />
          <p className="text-Title text-gray-50 text-center">
            Sisa-sisa makanan termasuk nasi, tulang-tulangan, bagian dari sayur
            dan buah, dan sisa makanan lainnya.
          </p>
        </div>
        <div className="w-[247px] h-[350px] bg-primary-600 rounded-xl py-[30px] px-[17px] flex flex-col items-center justify-between group hover:shadow-500 hover:scale-105 transition duration-500">
          <h1 className="text-H3 font-bold text-gray-50">Kertas</h1>
          <img
            src="images/LandingPage/getpoints-img3.png"
            alt=""
            className="w-[187px] h-[154px] object-cover group-hover:scale-110 transition duration-500"
          />
          <p className="text-Title text-gray-50 text-center">
            Kertas tanpa plastik termasuk kertas bekas, daur ulang, dan tidak
            terpakai.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetPoints;
