import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import { Bank } from '../bomb-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useZap = (bank: Bank) => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleZap = useCallback(
    (zappingToken: string, tokenName: string, amount: string) => {
      handleTransactionReceipt(
        bombFinance.zapIn(zappingToken, tokenName, amount),
        `Zap ${amount} in ${bank.depositTokenName}.`,
      );
    },
    [bank, bombFinance, handleTransactionReceipt],
  );
  return { onZap: handleZap };
};

export default useZap;
