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
                option: (provided, state) => ({
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

        /* placeholder's color with class */
        /* .css-qc6sy-singleValue {
                color: var(--color-text);
        } */
`;

// ? old version withouth styled-components theming
// export const CustomSelect = styled(Select).attrs({
//         styles: {
//                 control: (provided) => ({
//                         ...provided,
//                         backgroundColor: 'var(--color-bg)',
//                         color: 'var(--color-text)',
//                         borderRadius: 'var(--raddii)',
//                         padding: '0.25rem',
//                         border: 'none',
//                         boxShadow: 'var(--shadow)',
//                         height: '50px',
//                         cursor: 'pointer',
//                 }),
//                 option: (provided, state) => ({
//                         ...provided,
//                         cursor: 'pointer',
//                         color: 'var(--color-text)',
//                         backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
//                 }),
//         },
// })`
