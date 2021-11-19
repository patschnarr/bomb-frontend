import { useEffect, useState } from 'react';
import useTombFinance from '../useTombFinance';
import { AllocationTime } from '../../bomb-finance/types';

const useClaimRewardTimerMasonry = () => {
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const bombFinance = useTombFinance();

  useEffect(() => {
    if (bombFinance) {
      bombFinance.getUserClaimRewardTime().then(setTime);
    }
  }, [bombFinance]);
  return time;
};

export default useClaimRewardTimerMasonry;
