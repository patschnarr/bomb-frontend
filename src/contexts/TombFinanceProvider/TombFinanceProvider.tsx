import React, { createContext, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import TombFinance from '../../bomb-finance';
import config from '../../config';

export interface TombFinanceContext {
  bombFinance?: TombFinance;
}

export const Context = createContext<TombFinanceContext>({ bombFinance: null });

export const TombFinanceProvider: React.FC = ({ children }) => {
  const { ethereum, account } = useWallet();
  const [bombFinance, setTombFinance] = useState<TombFinance>();

  useEffect(() => {
    if (!bombFinance) {
      const bomb = new TombFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        bomb.unlockWallet(ethereum, account);
      }
      setTombFinance(bomb);
    } else if (account) {
      bombFinance.unlockWallet(ethereum, account);
    }
  }, [account, ethereum, bombFinance]);

  return <Context.Provider value={{ bombFinance }}>{children}</Context.Provider>;
};
