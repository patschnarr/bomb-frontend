import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useHarvestFromMasonry = () => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(bombFinance.harvestCashFromMasonry(), 'Claim BOMB from Masonry');
  }, [bombFinance, handleTransactionReceipt]);

  return { onReward: handleReward };
};

export default useHarvestFromMasonry;
