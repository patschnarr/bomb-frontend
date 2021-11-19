import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useTombFinance from './useTombFinance';
import useRefresh from './useRefresh';

const useTotalStakedOnMasonry = () => {
  const [totalStaked, setTotalStaked] = useState(BigNumber.from(0));
  const bombFinance = useTombFinance();
  const { slowRefresh } = useRefresh();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function fetchTotalStaked() {
      try {
        setTotalStaked(await bombFinance.getTotalStakedInMasonry());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      fetchTotalStaked();
    }
  }, [isUnlocked, slowRefresh, bombFinance]);

  return totalStaked;
};

export default useTotalStakedOnMasonry;
