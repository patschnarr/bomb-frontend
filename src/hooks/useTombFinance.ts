import { useContext } from 'react';
import { Context } from '../contexts/TombFinanceProvider';

const useTombFinance = () => {
  const { bombFinance } = useContext(Context);
  return bombFinance;
};

export default useTombFinance;
