import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeemOnMasonry = (description?: string) => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    const alertDesc = description || 'Redeem BSHARE from Masonry';
    handleTransactionReceipt(bombFinance.exitFromMasonry(), alertDesc);
  }, [bombFinance, description, handleTransactionReceipt]);
  return { onRedeem: handleRedeem };
};

export default useRedeemOnMasonry;
