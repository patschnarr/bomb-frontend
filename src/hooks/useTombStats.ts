import { useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import { TokenStat } from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useTombStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const { fastRefresh } = useRefresh();
  const bombFinance = useTombFinance();

  useEffect(() => {
    async function fetchTombPrice() {
      try {
        setStat(await bombFinance.getTombStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchTombPrice();
  }, [setStat, bombFinance, fastRefresh]);

  return stat;
};

export default useTombStats;
