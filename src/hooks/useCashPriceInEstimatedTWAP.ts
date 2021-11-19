import { useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import { TokenStat } from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useCashPriceInEstimatedTWAP = () => {
  const [stat, setStat] = useState<TokenStat>();
  const bombFinance = useTombFinance();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    async function fetchCashPrice() {
      try {
        setStat(await bombFinance.getTombStatInEstimatedTWAP());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCashPrice();
  }, [setStat, bombFinance, slowRefresh]);

  return stat;
};

export default useCashPriceInEstimatedTWAP;
