import { useEffect, useState } from 'react';
import useTombFinance from './../useTombFinance';
import useRefresh from '../useRefresh';

const useWithdrawCheck = () => {
  const [canWithdraw, setCanWithdraw] = useState(false);
  const bombFinance = useTombFinance();
  const { slowRefresh } = useRefresh();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function canUserWithdraw() {
      try {
        setCanWithdraw(await bombFinance.canUserUnstakeFromMasonry());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserWithdraw();
    }
  }, [isUnlocked, bombFinance, slowRefresh]);

  return canWithdraw;
};

export default useWithdrawCheck;
