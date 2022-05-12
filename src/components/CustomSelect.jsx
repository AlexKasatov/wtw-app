import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
        styles: {
                control: (provided) => ({
                        ...provided,
                        backgroundColor: `${({ theme }) => theme.colorBg}`,
                        color: `${({ theme }) => theme.colorText}`,
                        borderRadius: 'var(--raddii)',
                        padding: '0.25rem',
                        border: 'none',
                        boxShadow: `${({ theme }) => theme.shadow}`,
                        height: '50px',
                        cursor: 'pointer',
                }),
                option: (provided) => ({
                        ...provided,
                        cursor: 'pointer',
                        color: `${({ theme }) => theme.colorText}`,
                }),
        },
})`
        width: 200px;
        border-radius: var(--raddii);
        font-family: var(--family);
        border: none;

        & > * {
                box-shadow: ${({ theme }) => theme.shadow};
        }

        & input {
                padding-left: 0 0.25rem;
        }

        /* placeholder's color */
        & * {
                color: ${({ theme }) => theme.colorText} !important;
        }

        & > div[id] {
                background-color: ${({ theme }) => theme.colorUiBase};
        }
`;
