import React, { useState } from 'react';
import { Text } from '../../Elements/Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';

function SearchProductSection({ className, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={`${className} flex flex-col items-center gap-[30px]`}>
      <Text textType="h1" className="text-tertiary-900">
        Semua Produk Bulan Ini
      </Text>
      <div className="flex gap-[18px] w-full relative items-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-[24px] top-[24px] z-10 size-4 text-primary-700"
        />
        <input
          type="text"
          className="w-[811px] h-[64px] rounded-[32px] shadow-200 border-none px-[59px] py-[19px] text-primary-700 font-medium focus:ring-primary-700"
          placeholder="Search anything...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="size-[52px] rounded-full bg-primary-700 flex items-center justify-center">
          <FontAwesomeIcon icon={faSliders} className="text-white size-5" />
        </button>
      </div>
    </div>
  );
}

export default SearchProductSection;
