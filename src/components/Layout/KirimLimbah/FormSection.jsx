import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const Form = () => {
  const idUser = localStorage.getItem('userId');

  const lokasiPenukaranOptionsList = [
    { label: 'Banjarmasin Barat', value: 'Banjarmasin Barat' },
    { label: 'Banjarmasin Selatan', value: 'Banjarmasin Selatan' },
    { label: 'Banjarmasin Tengah', value: 'Banjarmasin Tengah' },
    { label: 'Banjarmasin Timur', value: 'Banjarmasin Timur' },
    { label: 'Banjarmasin Utara', value: 'Banjarmasin Utara' },
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
    setImage(file);
  };

  const [lokasiPenukaran, setLokasiPenukaran] = useState('');
  const [address, setAddress] = useState();
  const [weight, setWeight] = useState();
  const [wasteType, setWasteType] = useState('Sisa Makanan');
  const [image, setImage] = useState(null);

  const handleLokasiPenukaranChange = (e) => {
    setLokasiPenukaran(e.target.value);
  };

  const handleWeightChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^\d.]/g, '');

    if (value.indexOf('.') !== -1) {
      const parts = value.split('.');
      value = parts[0] + '.' + parts.slice(1).join('');
    }

    if (value.startsWith('00')) {
      value = value.replace(/^0+/, '0');
    } else if (value.startsWith('0') && value[1] !== '.') {
      value = value.replace(/^0+/, '0');
    }

    setWeight(value);
  };

  const navigate = useNavigate();

  const handleSubmitWaste = async () => {
    try {
      if (
        !lokasiPenukaran ||
        !address ||
        !weight ||
        !wasteType ||
        !image ||
        !idUser
      ) {
        Swal.fire('Semua data harus diisi!', '', 'error');
        return;
      }

      const formData = new FormData();
      formData.append('user_id', idUser);
      formData.append('location', lokasiPenukaran);
      formData.append('address', address);
      formData.append('weight', weight);
      formData.append('waste_type', wasteType);
      formData.append('image', image);

      await axios.post(`${apiUrl}/waste`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      Swal.fire('Limbah berhasil dikirimkan.', '', 'success').then(() =>
        navigate('/cek-admin')
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[200px] pt-[75px] text-grey-800 flex flex-col items-center gap-[65px]">
      <div className="font-bold text-primary-800 text-H2">
        <span>Form Keterangan Limbah</span>
      </div>
      <div className="flex justify-between gap-[8em]">
        <div className="pr-4 w-[669px]">
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[15px] text-[#585858]">
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
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-[15px] text-[#585858]"
            >
              Alamat Lengkap
            </label>
            <input
              id="address"
              name="address"
              className="w-full h-10 px-4 py-2 overflow-hidden border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Isi alamat lengkap disini ..."
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block mb-1 font-medium text-[15px] text-[#585858]"
            >
              Jumlah Limbah
            </label>
            <input
              id="amount"
              name="amount"
              className="flex flex-col items-start w-full h-10 px-4 py-2 overflow-hidden border rounded-lg border-tertiary-700/50 outline-tertiary-600/60 text-Subtitle"
              placeholder="Jumlah/kg ..."
              value={weight}
              onChange={handleWeightChange}
              autoComplete="off"
            />
            <span className="flex items-center gap-[5px] text-xs text-gray-500 mt-2">
              {' '}
              <FontAwesomeIcon icon={faCircleExclamation} />
              Minimum penukaran adalah 1 kg
            </span>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <h1 className="font-medium text-[15px] text-[#585858]">
              Opsi Limbah Yang Dikirim
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <input
                  id="sisa-makanan"
                  type="radio"
                  name="radio-5"
                  className="radio radio-success size-[21px]"
                  value="Sisa Makanan"
                  onChange={(e) => setWasteType(e.target.value)}
                  defaultChecked
                />
                <label
                  htmlFor="sisa-makanan"
                  className="transition-all duration-75 cursor-pointer text-Subtitle text-neutral-900"
                >
                  Sisa Makanan
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="daun"
                  type="radio"
                  name="radio-5"
                  value="Daun dan Tanaman"
                  onChange={(e) => setWasteType(e.target.value)}
                  className="radio radio-success size-[21px]"
                />
                <label
                  htmlFor="daun"
                  className="transition-all duration-75 cursor-pointer text-Subtitle text-neutral-900"
                >
                  Daun dan Tanaman
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="kertas"
                  type="radio"
                  name="radio-5"
                  value="Limbah Kertas"
                  onChange={(e) => setWasteType(e.target.value)}
                  className="radio radio-success size-[21px]"
                />
                <label
                  htmlFor="kertas"
                  className="transition-all duration-75 cursor-pointer text-Subtitle text-neutral-900"
                >
                  Limbah Kertas
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 pl-4">
          <div className="mb-4 flex flex-col items-center grid-gap: 0.5em w-max-conten">
            <label
              htmlFor="file"
              className="block mb-1 font-medium text-[15px] text-[#585858]"
            >
              Gambar Limbah Organik
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
                className="mt-2 rounded-xl max-w-[307px] h-full object-cover object-center"
                style={{ maxWidth: '100%' }}
              />
            )}
            <label
              htmlFor="file"
              className="flex justify-center w-full px-4 py-2 mt-[10px] border border-primary-700 cursor-pointer bg-secondary text-primary-700 rounded-full"
            >
              Masukkan File Gambar
            </label>
            <span className="flex items-center gap-[5px] text-xs text-gray-500 mt-2">
              <FontAwesomeIcon icon={faCircleExclamation} /> Ukuran Gambar
              Maksimal 5 MB
            </span>
          </div>
          {imageSelected && (
            <div className="flex items-center gap-5">
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md"
                style={{ maxWidth: '100px' }}
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
      <button
        onClick={handleSubmitWaste}
        className="flex items-center justify-center w-[833px] h-[38px] cursor-pointer text-gray-50 hover:text-gray-200 active:text-gray-400 bg-primary-600 hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300 rounded-full"
      >
        Tukar Ratik
      </button>
    </div>
  );
};

export default Form;
