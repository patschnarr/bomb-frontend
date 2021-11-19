import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToMasonry = () => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(bombFinance.stakeShareToMasonry(amount), `Stake ${amount} BSHARE to the masonry`);
    },
    [bombFinance, handleTransactionReceipt],
  );
  return { onStake: handleStake };
};

export default useStakeToMasonry;
