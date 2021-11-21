import { ChainId } from '@pancakeswap/sdk';
//import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './bomb-finance/config';
import { BankInfo } from './bomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 97,
    networkName: 'BSC Testnet',
    ftmscanUrl: 'https://testnet.bscscan.com/',
    defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    deployments: require('./bomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WFTM: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6', 6],
      BOO: ['0x14f0C98e6763a5E13be5CE014d36c2b69cD94a1e', 18],
      ZOO: ['0x2317610e609674e53D9039aaB85D8cAd8485A7c5', 0],
      SHIBA: ['0x39523112753956d19A3d6a30E758bd9FF7a8F3C0', 9],
      'USDT-FTM-LP': ['0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA', 18],
      'BOMB-FTM-LP': ['0x13Fe199F19c8F719652985488F150762A5E9c3A8', 18],
      'BSHARE-FTM-LP': ['0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5', 18],
    },
    baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
      BOO: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
      ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      'USDT-FTM-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'BOMB-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
      'BSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
    },
    baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2021-11-21T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BOMB
        - 2 = LP asset staking rewarding BSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  BombCakeRewardPool: {
    name: 'Earn BOMB by CAKE',
    poolId: 0,
    sectionInUI: 0,
    contract: 'BombGenesisRewardPool',
    depositTokenName: 'CAKE',
    earnTokenName: 'BOMB',
    finished: false,
    sort: 1,
    closedForStaking: false,
    bankId: 0,
  },
  TombBooRewardPool: {
    name: 'Earn BOMB by BOO',
    poolId: 1,
    sectionInUI: 0,
    contract: 'TombBooGenesisRewardPool',
    depositTokenName: 'BOO',
    earnTokenName: 'BOMB',
    finished: false,
    sort: 2,
    closedForStaking: true,
    bankId: 1,
  },
  // TombShibaRewardPool: {
  //   name: 'Earn BOMB by SHIBA',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'TombShibaGenesisRewardPool',
  //   depositTokenName: 'SHIBA',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: true,
  // },
  // TombZooRewardPool: {
  //   name: 'Earn BOMB by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'TombZooGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: true,
  // },
  // TombFtmLPTombRewardPool: {
  //   name: 'Earn BOMB by BOMB-FTM LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'TombFtmLpTombRewardPool',
  //   depositTokenName: 'BOMB-FTM-LP',
  //   earnTokenName: 'BOMB',
  //   finished: false,
  //   sort: 5,
  //   closedForStaking: true,
  // },
  // TombFtmLPTombRewardPoolOld: {
  //   name: 'Earn BOMB by BOMB-FTM LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'TombFtmLpTombRewardPoolOld',
  //   depositTokenName: 'BOMB-FTM-LP',
  //   earnTokenName: 'BOMB',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: true,
  // },
  // TombFtmLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BOMB-FTM LP',
  //   poolId: 0,
  //   sectionInUI: 2,
  //   contract: 'TombFtmLPBShareRewardPool',
  //   depositTokenName: 'BOMB-FTM-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 6,
  //   closedForStaking: false,
  // },
  // TshareFtmLPBShareRewardPool: {
  //   name: 'Earn BSHARE by BSHARE-FTM LP',
  //   poolId: 1,
  //   sectionInUI: 2,
  //   contract: 'TshareFtmLPBShareRewardPool',
  //   depositTokenName: 'BSHARE-FTM-LP',
  //   earnTokenName: 'BSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
};

export default configurations[process.env.NODE_ENV || 'development'];
