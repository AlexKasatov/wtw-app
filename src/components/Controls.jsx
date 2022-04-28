import { useState } from 'react';
import { Search } from './Search';

export const Controls = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Search search={search} setSearch={setSearch}>
        Controls
      </Search>
    </div>
  );
};
