import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const lokasiPenukaranOptionsList = [
    { label: "Lokasi 1", value: "lokasi1" },
    { label: "Lokasi 2", value: "lokasi2" },
    { label: "Lokasi 3", value: "lokasi3" },
  ];

  const wasteTypeOptionsList = [
    { label: "Plastik", value: "plastik" },
    { label: "Kertas", value: "kertas" },
    { label: "Logam", value: "logam" },
  ];
  const [imagePreview, setImagePreview] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageSelected(true); // Menetapkan bahwa gambar telah dipilih
      };
      reader.readAsDataURL(file);
    }
  };

  const [lokasiPenukaran, setLokasiPenukaran] = useState("");
  const [selectedWasteTypes, setSelectedWasteTypes] = useState([]);

  const handleLokasiPenukaranChange = (e) => {
    setLokasiPenukaran(e.target.value);
  };

  const handleWasteTypeChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedWasteTypes(selectedOptions);
  };

  return (
    <div className="px-[200px] pt-[75px] text-grey-800 flex flex-col items-center gap-[65px]">
      <div className="text-primary-800 text-H2 font-bold">
        <span>Form Keterangan Limbah</span>
      </div>
      <div className="flex justify-between gap-[8em]">
        <div className="pr-4 w-[669px]">
          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Lokasi Penerima Limbah
            </label>
            <select
              id="lokasiPenukaran"
              name="lokasiPenukaran"
              className="w-full px-4 py-2 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              value={lokasiPenukaran}
              onChange={handleLokasiPenukaranChange}
            >
              <option value="" disabled selected>
                Pilih Lokasi Penukaran Terdekat
              </option>
              {lokasiPenukaranOptionsList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-1 font-medium">
              Alamat Lengkap
            </label>
            <textarea
              id="address"
              name="address"
              className="overflow-hidden w-full px-4 py-2 h-10 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              rows="3"
              placeholder="Isi alamat lengkap disini ..."
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1 font-medium">
              Jumlah Limbah
            </label>
            <textarea
              id="amount"
              name="amount"
              className="flex flex-col items-start overflow-hidden w-full px-4 py-2 h-10 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              rows="3"
              placeholder="Jumlah /kg ..."
            ></textarea>
            <span className="flex items-center gap-[5px] text-xs text-gray-500">
              {" "}
              <FontAwesomeIcon icon={faCircleExclamation} />
              Minimum penukaran adalah 0.5 kg
            </span>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Opsi Limbah Yang Dikirim
            </label>
            <select
              id="wasteType"
              name="wasteType"
              className="flex flex-col items-start w-full px-4 py-2 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              // multiple
              value={selectedWasteTypes}
              onChange={handleWasteTypeChange}
            >
              <option value="" disabled selected>
                Pilih Jenis Limbah yang Ditukar
              </option>
              {wasteTypeOptionsList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="flex items-center gap-[5px] text-xs text-gray-500">
              <FontAwesomeIcon icon={faCircleExclamation} /> Hanya limbah
              organik
            </span>
          </div>
        </div>
        <div className="w-1/3 pl-4">
          <div className="mb-4 flex flex-col items-center grid-gap: 0.5em w-max-conten">
            <label htmlFor="file" className="block mb-1 font-medium">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md"
                style={{ maxWidth: "100%" }}
              />
            )}
            <label
              htmlFor="file"
              className="flex justify-center w-full px-4 py-2 mt-[10px] border border-primary-700 cursor-pointer bg-secondary text-primary-700 rounded-full"
            >
              Masukkan File Gambar
            </label>
            <span className="flex items-center gap-[5px] text-xs text-gray-500">
              <FontAwesomeIcon icon={faCircleExclamation} /> Ukuran Gambar
              Maksimal 5 MB
            </span>
          </div>
          {imageSelected && (
            <div className="flex items-center gap-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md"
                style={{ maxWidth: "100px" }}
              />
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  setImagePreview(null);
                  setImageSelected(false);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="button">
        <Link to="/halaman-tujuan">
          <label
            htmlFor="submit"
            className="flex justify-center w-[800px] px-4 py-[5px] cursor-pointer text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 rounded-full"
          >
            Tukar Ratik
          </label>
        </Link>
      </div>
    </div>
  );
};

export default Form;
