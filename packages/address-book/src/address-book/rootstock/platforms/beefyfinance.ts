const devMultisig = '0xB7775ce77ea0dE48699ee5fce86DbD32aAb3B741';
const treasuryMultisig = '0x2052e5744d1dC4D095e758120779E0f5a660f655';

export const beefyfinance = {
  devMultisig: devMultisig,
  treasuryMultisig: treasuryMultisig,
  strategyOwner: '0x09D19184F46A32213DF06b981122e06882B61309',
  vaultOwner: '0xf2EeC1baC39306C0761c816d1D33cF7C9Ad6C0Fe',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: treasuryMultisig,
  launchpoolOwner: devMultisig,
  rewardPool: '0x0000000000000000000000000000000000000000',
  treasury: treasuryMultisig,
  beefyFeeRecipient: '0x02Ae4716B9D5d48Db1445814b0eDE39f5c28264B',
  multicall: '0x3B60F7f25b09E71356cdFFC6475c222A466a2AC9',
  bifiMaxiStrategy: '0x0000000000000000000000000000000000000000',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0xfc69704cC3cAac545cC7577009Ea4AA04F1a61Eb',
  vaultFactory: '0xe103ab2f922aa1a56EC058AbfDA2CeEa1e95bCd7',
  //zap: '0x6f66F246Bb436B6f4E66A992C2218b57cD906109',
  //zapTokenManager: '0xD3D46FF34cD495d5B91b8F3C5C552E81E5e3eab5',
/*
  /// CLM Contracts
  clmFactory: '0xD19ab62F83380908D65E344567378cF104cE46c2',
  clmStrategyFactory: '0xaF0f1B33Ef5A61b88F84BA2Ed2388f2C69fEaB55',
  clmRewardPoolFactory: '0x3C0b1765C379833b86A1704997019A7496Afdfae',*/
  
  /// Beefy Swapper Contracts
  beefySwapper: '0x3C0b1765C379833b86A1704997019A7496Afdfae',
  beefyOracle: '0x70127945067E4224d7B6ABfDc6f57e3ea45d5CA4',
  beefyOracleUniswapV3: '0xA5Cd8A60a05571141370D184e255777e5c2d5968',
} as const;
