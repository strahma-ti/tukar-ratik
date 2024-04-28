import React, { useState } from 'react';

const Form = () => {
    const lokasiPenukaranOptionsList = [
        { label: 'Lokasi 1', value: 'lokasi1' },
        { label: 'Lokasi 2', value: 'lokasi2' },
        { label: 'Lokasi 3', value: 'lokasi3' },
    ];

    const wasteTypeOptionsList = [
        { label: 'Plastik', value: 'plastik' },
        { label: 'Kertas', value: 'kertas' },
        { label: 'Logam', value: 'logam' },
    ];
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const [lokasiPenukaran, setLokasiPenukaran] = useState('');
    const [selectedWasteTypes, setSelectedWasteTypes] = useState([]);

    const handleLokasiPenukaranChange = (e) => {
        setLokasiPenukaran(e.target.value);
    };

    const handleWasteTypeChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedWasteTypes(selectedOptions);
    };

    return (
        <div className="px-[200px] pt-[120px] text-grey-800 flex justify-between">
            <div className="w-2/3 pr-4 mr-20">
                <div className="mb-4">
                    <select
                        id="lokasiPenukaran"
                        name="lokasiPenukaran"
                        className="w-full px-4 py-2 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60"
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
                        className="overflow-hidden w-full px-4 py-2 h-10 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60"
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
                        className="overflow-hidden w-full px-4 py-2 h-10 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60"
                        rows="3"
                        placeholder="Jumlah /kg ..."
                    ></textarea>
                    <span className="text-xs text-gray-500">Minimum penukaran adalah 0.5 kg</span>
                </div>

                <div className="mb-4">
                    <select
                        id="wasteType"
                        name="wasteType"
                        className="w-full px-4 py-2 border rounded-lg border-tertiary-700/50 outline-tertiary-600/60"
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
                <span className="text-xs text-gray-500">Hanya limbah organik</span>
            </div>
            </div>

            <div className="w-1/3 pl-4">
                <div className="mb-4 flex flex-col items-center grid-gap: 0.5em">
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
                    <img src={imagePreview} alt="Preview" className="mt-2 rounded-md" style={{ maxWidth: '100%' }} />
                )}
                <label htmlFor="file" className="flex justify-center w-full px-4 py-2 mt-[10px] border border-primary-700 cursor-pointer bg-secondary text-primary-700 rounded-full">
                    Masukkan Foto Limbah Disini
                </label>
                <span className="text-xs text-gray-500">Ukuran Foto Maksimal 5 MB</span>
            </div>
            </div>
        </div>
    );
};

export default Form;
