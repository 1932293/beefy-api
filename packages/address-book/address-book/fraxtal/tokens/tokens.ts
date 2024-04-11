import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const frxETH = {
  name: 'Frax Wrapped Ether',
  address: '0xFC00000000000000000000000000000000000006',
  symbol: 'wfrxETH',
  oracleId: 'wfrxETH',
  decimals: 18,
  chainId: 252,
  website: 'https://app.frax.finance/frxeth/mint/',
  description:
    'frxETH acts as a stablecoin loosely pegged to ETH, so that 1 frxETH always represents 1 ETH and the amount of frxETH in circulation matches the amount of ETH in the Frax ETH system. When ETH is sent to the frxETHMinter, an equivalent amount of frxETH is minted. Holding frxETH on its own is not eligible for staking yield and should be thought of as analogous as holding ETH.',
  bridge: 'fraxtal-canonical',
  logoURI: '',
  documentation: 'https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth',
} as const;

const _tokens = {
  frxETH,
  wfrxETH: frxETH,
  WNATIVE: frxETH,
  sfrxETH: {
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    oracleId: 'sfrxETH',
    address: '0xFC00000000000000000000000000000000000005',
    chainId: 252,
    decimals: 18,
    website: 'https://app.frax.finance/frxeth/mint',
    description:
      'sfrxETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. At any time, frxETH can be exchanged for sfrxETH by depositing it into the sfrxETH vault, which allows users to earn staking yield on their frxETH. Over time, as validators accrue staking yield, an equivalent amount of frxETH is minted and added to the vault, allowing users to redeem their sfrxETH for an greater amount of frxETH than they deposited.',
    bridge: 'fraxtal-canonical',
    logoURI: '',
    documentation: 'https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth',
  },
  FRAX: {
    chainId: 252,
    address: '0xFc00000000000000000000000000000000000001',
    decimals: 18,
    name: 'Frax',
    symbol: 'FRAX',
    oracleId: 'FRAX',
    website: 'https://frax.finance/',
    description: 'Frax is the first fractional-algorithmic stablecoin protocol.',
    bridge: 'fraxtal-canonical',
    logoURI: '',
    documentation: 'https://docs.frax.finance/',
  },
  CRV: {
    name: 'CRV',
    address: '0x331B9182088e2A7d6D3Fe4742AbA1fB231aEcc56',
    symbol: 'CRV',
    oracleId: 'CRV',
    decimals: 18,
    chainId: 252,
    website: 'https://curve.fi/',
    description:
      'Curve is an exchange liquidity pool on Ethereum. Curve is designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
    bridge: 'fraxtal-canonical',
    logoURI: '',
    documentation: 'https://curve.readthedocs.io/',
  },
  crvUSD: {
    name: 'Curve.Fi USD Stablecoin',
    symbol: 'crvUSD',
    oracleId: 'crvUSD',
    address: '0xB102f7Efa0d5dE071A8D37B3548e1C7CB148Caf3',
    chainId: 252,
    decimals: 18,
    logoURI: '',
    bridge: 'fraxtal-canonical',
    website: 'https://crvusd.curve.fi/',
    description:
      'crvUSD is a collateralized-debt-position (CDP) stablecoin pegged to the US Dollar',
    documentation: 'https://docs.curve.fi/crvUSD/crvUSD/',
  },
  frxUSDC: {
    name: 'USD Coin',
    address: '0xDcc0F2D8F90FDe85b10aC1c8Ab57dc0AE946A543',
    symbol: 'USDC',
    oracleId: 'USDC',
    decimals: 6,
    website: 'https://www.centre.io/',
    description: 'Ethereum-based USDC bridged via the official Fraxtal Bridge.',
    bridge: 'fraxtal-canonical',
    chainId: 252,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
    documentation: 'https://developers.circle.com/docs',
  },
  FXS: {
    name: 'Frax Share',
    symbol: 'FXS',
    oracleId: 'FXS',
    address: '0xFc00000000000000000000000000000000000002',
    chainId: 252,
    decimals: 18,
    website: 'https://frax.finance/',
    bridge: 'fraxtal-canonical',
    description:
      'The Frax Share token (FXS) is the non-stable, utility token in the protocol. It is meant to be volatile and hold rights to governance and all utility of the system. It is important to note that we take a highly governance-minimized approach to designing trustless money in the same ethos as Bitcoin. We eschew DAO-like active management such as MakerDAO. The less parameters for a community to be able to actively manage, the less there is to disagree on. Parameters that are up for governance through FXS include adding/adjusting collateral pools, adjusting various fees (like minting or redeeming), and refreshing the rate of the collateral ratio. No other actions such as active management of collateral or addition of human-modifiable parameters are possible other than a hardfork that would require voluntarily moving to a new implementation entirely. ',
    logoURI: 'https://app.sushi.com/images/tokens/fxs-square.jpg',
    documentation: 'https://docs.frax.finance/',
  },
  DAI: {
    name: 'Dai Stablecoin',
    address: '0xf6a011fAC307f55Cd4bA8e43b8b93f39808DdaA9',
    symbol: 'DAI',
    oracleId: 'DAI',
    decimals: 18,
    chainId: 252,
    website: 'https://makerdao.com/',
    description:
      'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
    bridge: 'fraxtal-canonical',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    documentation:
      'https://docs.makerdao.com/smart-contract-modules/dai-module/dai-detailed-documentation',
  },
  PYUSD: {
    name: 'PayPal USD',
    symbol: 'PYUSD',
    oracleId: 'PYUSD',
    address: '0xfb1520DbDc9230ef5dD5e6fd3Bbb6647B570E190',
    chainId: 252,
    decimals: 6,
    logoURI: '',
    website: 'https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd',
    bridge: 'fraxtal-canonical',
    description: 'PayPal USD (PYUSD) is a stablecoin backed by secure and highly liquid assets.',
  },
  USDT: {
    name: 'USDT',
    symbol: 'USDT',
    oracleId: 'USDT',
    address: '0x4d15EA9C2573ADDAeD814e48C148b5262694646A',
    chainId: 252,
    decimals: 6,
    website: 'https://tether.to/',
    description:
      'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold. Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
    bridge: 'fraxtal-canonical',
    logoURI: 'https://hecoinfo.com/token/images/USDTHECO_32.png',
    documentation: 'https://tether.to/en/how-it-works',
  },
  WETH: {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    oracleId: 'WETH',
    address: '0xA8a59D73388D0c4344a7b0Ba287ddb654227c38a',
    chainId: 252,
    decimals: 18,
    logoURI: '',
    website: 'https://weth.io/',
    documentation: 'https://ethereum.org/en/developers/docs/',
    description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
    bridge: 'fraxtal-canonical',
  },
  tBTC: {
    name: 'tBTC v2',
    symbol: 'tBTC',
    oracleId: 'tBTC',
    address: '0x269005f33E78d75dD222D3691B5Fe48E8aB20E99',
    chainId: 252,
    decimals: 18,
    logoURI: '',
    website: 'https://threshold.network/',
    documentation: 'https://docs.threshold.network/',
    description:
      'Threshold is the first ever on-chain merge between two existing networks and communities, Keep and NuCypher. Threshold provides a suite of threshold cryptography services that power user sovereignty on the blockchain.',
    bridge: 'fraxtal-canonical',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
