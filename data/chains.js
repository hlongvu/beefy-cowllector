const { addressBook } = require('blockchain-addressbook');

const { arbitrum, bsc, heco, avax, polygon, fantom, one, celo, moonriver, cronos } = addressBook;

const chains = {
  56: {
    id: 'bsc',
    chainId: 56,
    wnative: bsc.tokens.WBNB.address,
    rewardPool: bsc.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: bsc.platforms.beefyfinance.treasury,
    beefyFeeBatcher: bsc.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    wnativeUnwrapInterval: 8,
    rpc: process.env.BSC_RPC || 'https://bsc-dataseed.binance.org/',
    appVaultsFilename: 'bsc_pools.js',
    multicall: bsc.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 1457038,
    blockTime: 3,
    blockExplorer: 'http://bscscan.com',
  },
  128: {
    id: 'heco',
    chainId: 128,
    wnative: heco.tokens.WHT.address,
    rewardPool: heco.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: heco.platforms.beefyfinance.treasury,
    beefyFeeBatcher: heco.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    wnativeUnwrapInterval: 4,
    rpc: process.env.HECO_RPC || 'https://http-mainnet.hecochain.com',
    appVaultsFilename: 'heco_pools.js',
    multicall: heco.platforms.beefyfinance.multicall,
    queryLimit: 2000,
    queryInterval: 100,
    firstRewardBlock: 3850000,
    blockTime: 3,
    blockExplorer: 'https://hecoinfo.com',
  },
  43114: {
    id: 'avax',
    chainId: 43114,
    wnative: avax.tokens.WAVAX.address,
    rewardPool: avax.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: avax.platforms.beefyfinance.treasury,
    beefyFeeBatcher: avax.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 8,
    wnativeUnwrapInterval: 8,
    rpc: process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc',
    appVaultsFilename: 'avalanche_pools.js',
    multicall: avax.platforms.beefyfinance.multicall,
    queryLimit: 512,
    queryInterval: 100,
    firstRewardBlock: 0,
    blockTime: 5,
    blockExplorer: 'https://cchain.explorer.avax.network',
  },
  137: {
    id: 'polygon',
    chainId: 137,
    wnative: polygon.tokens.WMATIC.address,
    rewardPool: polygon.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: polygon.platforms.beefyfinance.treasury,
    beefyFeeBatcher: polygon.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    wnativeUnwrapInterval: 4,
    rpc: process.env.POLYGON_RPC || 'https://polygon-rpc.com/',
    appVaultsFilename: 'polygon_pools.js',
    multicall: polygon.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 14172110,
    blockTime: 2,
    blockExplorer: 'https://polygonscan.com',
  },
  250: {
    id: 'fantom',
    chainId: 250,
    wnative: fantom.tokens.WFTM.address,
    rewardPool: fantom.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: fantom.platforms.beefyfinance.treasury,
    beefyFeeBatcher: fantom.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    wnativeUnwrapInterval: 4,
    rpc: process.env.FANTOM_RPC || 'https://rpcapi.fantom.network',
    appVaultsFilename: 'fantom_pools.js',
    multicall: fantom.platforms.beefyfinance.multicall,
    queryLimit: 500,
    queryInterval: 100,
    firstRewardBlock: 7673132,
    blockTime: 10,
    blockExplorer: 'https://ftmscan.com',
  },
  1666600000: {
    id: 'one',
    chainId: 1666600000,
    wnative: one.tokens.WONE.address,
    rewardPool: one.platforms.beefyfinance.rewardPool,
    treasury: one.platforms.beefyfinance.treasury,
    beefyFeeBatcher: one.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    wnativeUnwrapInterval: 4,
    rpc: process.env.ONE_RPC || 'https://api.harmony.one',
    appVaultsFilename: 'harmony_pools.js',
    multicall: one.platforms.beefyfinance.multicall,
    queryLimit: 500,
    queryInterval: 100,
    firstRewardBlock: 16823869,
    blockTime: 3,
    blockExplorer: 'https://explorer.harmony.one/',
  },
  42161: {
    id: 'arbitrum',
    chainId: 42161,
    wnative: arbitrum.tokens.WETH.address,
    rewardPool: arbitrum.platforms.beefyfinance.rewardPool,
    treasury: arbitrum.platforms.beefyfinance.treasury,
    beefyFeeBatcher: arbitrum.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 20,
    wnativeUnwrapInterval: 20,
    rpc: process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
    appVaultsFilename: 'arbitrum_pools.js',
    multicall: arbitrum.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 1033652,
    blockTime: 2.8,
    blockExplorer: 'http://arbiscan.com',
  },
  42220: {
    id: 'celo',
    chainId: 42220,
    rewardPool: celo.platforms.beefyfinance.rewardPool,
    treasury: celo.platforms.beefyfinance.treasury,
    beefyFeeBatcher: celo.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    rpc: process.env.CELO_RPC || 'https://forno.celo.org',
    appVaultsFilename: 'celo_pools.js',
    multicall: celo.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 9402098,
    blockTime: 5,
    blockExplorer: 'https://explorer.celo.org/',
  },
  1285: {
    id: 'moonriver',
    chainId: 1285,
    wnative: moonriver.tokens.WMOVR.address,
    rewardPool: moonriver.platforms.beefyfinance.rewardPool,
    treasury: moonriver.platforms.beefyfinance.treasury,
    beefyFeeBatcher: moonriver.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    rpc: process.env.MOONRIVER_RPC || 'https://rpc.moonriver.moonbeam.network',
    appVaultsFilename: 'moonriver_pools.js',
    multicall: moonriver.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 9402098,
    blockTime: 15,
    blockExplorer: 'https://moonriver.moonscan.io/',
  },
  25: {
    id: 'cronos',
    chainId: 25,
    wnative: cronos.tokens.WCRO.address,
    rewardPool: cronos.platforms.beefyfinance.rewardPool,
    treasury: cronos.platforms.beefyfinance.treasury,
    beefyFeeBatcher: cronos.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 6,
    rpc: process.env.CRONOS_RPC || 'https://evm-cronos.crypto.org',
    appVaultsFilename: 'cronos_pools.js',
    multicall: cronos.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 132884,
    blockTime: 5,
    blockExplorer: 'https://cronos.crypto.org/explorer/',
  },
};

module.exports = chains;
