import styled from 'styled-components';

export const Button = styled.button`
        padding: 0 1rem;
        background-color: ${({ theme }) => theme.colorUiBase};
        box-shadow: ${({ theme }) => theme.shadow};
        line-height: 2.5;
        border-radius: var(--raddii-btn);

        border: none;
        display: flex;
        align-items: center;
        gap: 0.75rem;

        color: ${({ theme }) => theme.colorText};
        cursor: pointer;
`;
