import styled from 'styled-components';
import { Button } from '../spinner/Button';

export const PaginationList = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;

        li {
                list-style: none;
                margin: 1rem;

                &:hover {
                        background-color: ${({ theme }) => theme.colorBg};
                }
        }
`;

export const ActiveButton = styled(Button)`
        background-color: ${({ theme }) => theme.colorText};
        color: ${({ theme }) => theme.colorBg};
`;
