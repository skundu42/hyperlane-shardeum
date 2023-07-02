import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  shardeum_sphinx: {
    name: 'shardeum_sphinx',
    // anvil default chain id
    chainId: 8081,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'sphinx',
      symbol: 'SHM',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://dapps.shardeum.org/',
      },
    ],
  },
  anvil2: {
    name: 'anvil2',
    chainId: 31338,
    publicRpcUrls: [
      {
        http: 'http://127.0.0.1:8555',
      },
    ],
  },
};
