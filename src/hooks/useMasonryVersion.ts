import { useCallback, useEffect, useState } from 'react';
import useBombFinance from './useBombFinance';
import useStakedBalanceOnMasonry from './useStakedBalanceOnMasonry';

const useMasonryVersion = () => {
  const [masonryVersion, setMasonryVersion] = useState('latest');
  const bombFinance = useBombFinance();
  const stakedBalance = useStakedBalanceOnMasonry();

  const updateState = useCallback(async () => {
    setMasonryVersion(await bombFinance.fetchMasonryVersionOfUser());
  }, [bombFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (bombFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [bombFinance?.isUnlocked, stakedBalance]);

  return masonryVersion;
};

export default useMasonryVersion;
