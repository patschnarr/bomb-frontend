import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useWithdrawFromMasonry = () => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        bombFinance.withdrawShareFromMasonry(amount),
        `Withdraw ${amount} BSHARE from the masonry`,
      );
    },
    [bombFinance, handleTransactionReceipt],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdrawFromMasonry;
