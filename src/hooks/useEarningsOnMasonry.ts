import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useTombFinance from './useTombFinance';
import useRefresh from './useRefresh';

const useEarningsOnMasonry = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bombFinance = useTombFinance();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function fetchBalance() {
      try {
        setBalance(await bombFinance.getEarningsOnMasonry());
      } catch (e) {
        console.error(e);
      }
    }
    if (isUnlocked) {
      fetchBalance();
    }
  }, [isUnlocked, bombFinance, slowRefresh]);

  return balance;
};

export default useEarningsOnMasonry;
