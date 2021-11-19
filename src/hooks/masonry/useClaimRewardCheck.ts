import { useEffect, useState } from 'react';
import useRefresh from '../useRefresh';
import useTombFinance from './../useTombFinance';

const useClaimRewardCheck = () => {
  const { slowRefresh } = useRefresh();
  const [canClaimReward, setCanClaimReward] = useState(false);
  const bombFinance = useTombFinance();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function canUserClaimReward() {
      try {
        setCanClaimReward(await bombFinance.canUserClaimRewardFromMasonry());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserClaimReward();
    }
  }, [isUnlocked, slowRefresh, bombFinance]);

  return canClaimReward;
};

export default useClaimRewardCheck;
