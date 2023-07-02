import { TokenType } from '@hyperlane-xyz/hyperlane-token';

import type { WarpRouteConfig } from '../src/warp/config';

// A config for deploying Warp Routes to a set of chains
// Not required for Hyperlane core deployments
export const warpRouteConfig: WarpRouteConfig = {
  base: {
    // Chain name must be in the Hyperlane SDK or in the chains.ts config
    chainName: 'shardeum_sphinx',
    type: TokenType.collateral, //  TokenType.native or TokenType.collateral
    //0xDCB362C39D39078c625a3CeaD82AA31A327ff262
    address: '0xDCB362C39D39078c625a3CeaD82AA31A327ff262', // Change this to your token address
    mailbox : '0xc6e311AEF10A1537FD06943aA59A69B029E015A1',
    interchainGasPaymaster : '0x4b148600c81187cd0eA470FaD86c6fe62e674568'
    // If type is collateral, a token address is required:
    // address: '0x123...'

    // Optionally, specify owner, mailbox, and interchainGasPaymaster addresses
    // If not specified, the Permissionless Deployment artifacts or the SDK's defaults will be used
  },
  synthetics: [
    {
      chainName: 'mumbai', // other chain supported : sepolia, zkEVM
      //

      // Optionally specify a name, symbol, and totalSupply
      // If not specified, the base token's properties will be used

      // Optionally, specify owner, mailbox, and interchainGasPaymaster addresses
      // If not specified, the Permissionless Deployment artifacts or the SDK's defaults will be used
    },
  ],
};
