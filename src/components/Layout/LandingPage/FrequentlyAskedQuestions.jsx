import { Accordion } from "flowbite-react";

function FrequentlyAskedQuestions() {
  return (
    <section className="w-full px-[250px] flex flex-col gap-[35px] items-center">
      <h1 className="text-H2 font-bold text-tertiary-700">Sering Ditanyakan</h1>
      <Accordion
        className="w-full  bg-white flex flex-col gap-1"
        collapseAll
        flush
      >
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana cara bergabung dengan TukaRatik?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Apakah ada biaya untuk bergabung dengan TukaRatik?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana cara kerja TukaRatik?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Di kota mana saja bisa menggunakan layanan tukaRatik?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Apakah penukaran limbah bisa dilakukan kapan saja?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[20px] font-bold py-[11px] rounded-xl text-primary-700 bg-white hover:bg-white focus:ring-0">
            Bagaimana TukaRatik mengolah sampah yang dikumpulkan?
            <Accordion.Content className="p-0 m-0">
              <p className="mt-2 mb-2 text-primary-800 text-Title">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Title>
        </Accordion.Panel>
      </Accordion>
      <button className="text-Subtitle text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 size-fit px-10 py-[10px] rounded-3xl">
        Bergabung Ke tukaRatik
      </button>
    </section>
  );
}

export default FrequentlyAskedQuestions;
