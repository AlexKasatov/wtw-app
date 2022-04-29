import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
        styles: {
                control: (provided) => ({
                        ...provided,
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        borderRadius: 'var(--raddii)',
                        padding: '0.25rem',
                        border: 'none',
                        boxShadow: 'var(--shadow)',
                        height: '50px',
                        cursor: 'pointer',
                }),
                option: (provided, state) => ({
                        ...provided,
                        cursor: 'pointer',
                        color: 'var(--color-text)',
                        backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
                }),
        },
})`
        width: 200px;
        border-radius: var(--raddii);
        font-family: var(--family);
        border: none;

        & > * {
                box-shadow: var(--shadow);
        }

        & input {
                padding-left: 0 0.25rem;
        }

        /* placeholder's color */
        & * {
                color: var(--color-text) !important;
        }

        & > div[id] {
                background-color: var(--color-ui-base);
        }

        /* placeholder's color with class */
        /* .css-qc6sy-singleValue {
                color: var(--color-text);
        } */
`;
