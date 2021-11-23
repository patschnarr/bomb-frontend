import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/bomb-256.png';
import tShareLogo from '../../assets/img/bshare-256.png';
import bombLogoPNG from '../../assets/img/bomb-512.png';
import tShareLogoPNG from '../../assets/img/bshare-512.png';
import tBondLogo from '../../assets/img/bbond-256.png';

import bombFtmLpLogo from '../../assets/img/bomb-btc-lp-512.png';
import bshareFtmLpLogo from '../../assets/img/bshare-bnb-lp-512.png';

import bnbLogo from '../../assets/img/bnb.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  BOMBPNG: bombLogoPNG,
  BSHAREPNG: tShareLogoPNG,
  BSHARE: tShareLogo,
  BBOND: tBondLogo,
  WBNB: bnbLogo,
  BOO: bnbLogo,
  SHIBA: bnbLogo,
  ZOO: bnbLogo,
  CAKE: bnbLogo,
  SUSD: bnbLogo,
  SBTC: bnbLogo,
  BTCB: bnbLogo,
  BTC: bnbLogo,
  SVL: bnbLogo,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
