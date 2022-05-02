import { useContext } from 'react';
import { Context } from '../context/index';

export const useProviderContext = () => useContext(Context);
