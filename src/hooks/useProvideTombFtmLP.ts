import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import { TAX_OFFICE_ADDR } from './../utils/constants';

const useProvideTombFtmLP = () => {
  const bombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleProvideTombFtmLP = useCallback(
    (ftmAmount: string, bombAmount: string) => {
      const bombAmountBn = parseUnits(bombAmount);
      handleTransactionReceipt(
        bombFinance.provideTombFtmLP(ftmAmount, bombAmountBn),
        `Provide Tomb-FTM LP ${bombAmount} ${ftmAmount} using ${TAX_OFFICE_ADDR}`,
      );
    },
    [bombFinance, handleTransactionReceipt],
  );
  return { onProvideTombFtmLP: handleProvideTombFtmLP };
};

export default useProvideTombFtmLP;
