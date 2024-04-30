import { Accordion } from "flowbite-react";

function FrequentlyAskedQuestions() {
  return (
    <section className="w-full px-[250px] flex flex-col gap-[35px] items-center">
      <h1 className="text-H2 font-bold text-tertiary-700">Sering Ditanyakan</h1>
      <Accordion
        className="w-full bg-white flex flex-col gap-1"
        collapseAll
        flush
      >
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana cara bergabung dengan TukaRatik?
          </Accordion.Title>
          <Accordion.Content className="">
            <p className="mb-2 text-primary-800 text-Title">
              Anda dapat mendaftar melalui situs web atau mobile TukaRatik.
              Ikuti langkah-langkah pendaftaran dan mulailah berpartisipasi
              dalam program penukaran sampah untuk mendapatkan poin.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Apakah ada biaya untuk bergabung dengan TukaRatik?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-1 mb-2 text-primary-800 text-Title">
              Ya, tukaRatik 100% gratis dan tidak dipungut biaya.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana cara kerja TukaRatik?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-1 mb-2 text-primary-800 text-Title">
              Pengguna dapat mengumpulkan poin dengan menukar sampah rumah
              tangga mereka. Poin yang terkumpul kemudian dapat ditukar dengan
              produk pertanian lokal seperti sayur dan telur.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Di kota mana saja bisa menggunakan layanan tukaRatik?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-1 mb-2 text-primary-800 text-Title">
              Untuk saat ini, kami hanya menyediakan layanan tukar limbah untuk
              daerah Banjarmasin saja.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Apakah penukaran limbah bisa dilakukan kapan saja?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-1 mb-2 text-primary-800 text-Title">
              Operasional untuk penukaran limbah bisa dari pukul 09.00 - 20.00
              WIB. Setiap hari Selasa s/d Minggu.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana TukaRatik mengolah sampah yang dikumpulkan?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mt-1 mb-2 text-primary-800 text-Title">
              Sampah organik yang kami kumpulkan akan diolah menjadi kompos
              berkualitas tinggi dan pakan ternak melalui proses pengomposan
              yang tepat.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <button className="text-Subtitle text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 size-fit px-10 py-[10px] rounded-3xl active:scale-90">
        Bergabung Ke tukaRatik
      </button>
    </section>
  );
}

export default FrequentlyAskedQuestions;
