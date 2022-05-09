import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
        background-color: ${({ theme }) => theme.colorBg};
        padding: 1rem 2rem;
        display: flex;
        align-items: center;

        border-radius: var(--raddii);
        box-shadow: ${({ theme }) => theme.shadow};
        width: 100%;
        margin-bottom: 1.5rem;

        //? если щирина больше 767px
        @media (min-width: 767px) {
                margin-bottom: 0;
                width: 280px;
        }
`;

const Input = styled.input.attrs({
        type: 'search',
        placeholder: 'Search for a country...',
})`
        margin-left: 2rem;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colorBg};
        color: ${({ theme }) => theme.colorText};
`;

export const Search = ({ search, setSearch }) => (
        <InputContainer>
                <IoSearch />
                <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
);
