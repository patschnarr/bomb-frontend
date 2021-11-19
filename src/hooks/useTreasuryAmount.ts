import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useTombFinance from './useTombFinance';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const bombFinance = useTombFinance();

  useEffect(() => {
    if (bombFinance) {
      const { Treasury } = bombFinance.contracts;
      bombFinance.BOMB.balanceOf(Treasury.address).then(setAmount);
    }
  }, [bombFinance]);
  return amount;
};

export default useTreasuryAmount;
