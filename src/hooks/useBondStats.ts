import { useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import { TokenStat } from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const { slowRefresh } = useRefresh();
  const bombFinance = useTombFinance();

  useEffect(() => {
    async function fetchBondPrice() {
      try {
        setStat(await bombFinance.getBondStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondPrice();
  }, [setStat, bombFinance, slowRefresh]);

  return stat;
};

export default useBondStats;
