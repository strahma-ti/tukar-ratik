const HeroSection = () => {
  const bgImage = 'images/KirimLimbah/hero-kirimlimbah.png';

  return (
    <div
      className="max-w-[1317px] w-full h-[573px] relative bg-cover bg-center flex items-center justify-start rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="size-full bg-gradient-to-t from-[rgb(31,44,42,1)] to-[rgb(87,122,118,0.6)] absolute z-0 opacity-60"></div>
      <div className="z-10 pt-[140px] pl-[75px] flex flex-col gap-[20px]">
        <div className="font-poppins text-green-50">
          <h1 className="text-5xl font-medium leading-[120%]">
            Isi Form & Pilih Pusat
            <br />
            Layanan Terdekat
          </h1>
        </div>
        <div className="text-green-50">
          <p className="text-[18px] font-regular leading-[120%]">
            Kami saat ini tersedia di beberapa cabang di Banjarmasin. Pilih
            kantor <br />
            penerima limbah terdekat agar limbah dapat diambil dengan masih
            berada
            <br />
            di dalam jangkauan driver kami.
          </p>
        </div>
        <div class="w-[350px] border-b-2 border-primary-300"></div>
      </div>
    </div>
  );
};
export default HeroSection;
