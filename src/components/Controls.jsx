import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (min-width: 767px) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
        }
`;

const Controls = ({ onSearch }) => {
        const [region, setRegion] = useState('');
        const [search, setSearch] = useState('');

        useEffect(() => {
                const regionValue = region?.value || '';
                onSearch(regionValue, search);
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [region, search]);

        return (
                <Wrapper>
                        <Search search={search} setSearch={setSearch}>
                                Controls
                        </Search>
                        <CustomSelect
                                options={options}
                                placeholder="Filter by Region"
                                isClearable
                                isSearchable={false}
                                value={region}
                                onChange={setRegion}
                        />
                </Wrapper>
        );
};

export default Controls;
