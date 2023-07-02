# Hyperlane Deploy

This repository contains scripts and tools to deploy Hyperlane and its popular extensions to any EVM-compatible chain.

## Hyperlane overview

Hyperlane is an interchain messaging protocol that allows applications to communicate between blockchains.

Developers can use Hyperlane to share state between blockchains, allowing them to build interchain applications that live natively across multiple chains.

To read more about interchain applications, how the protocol works, and how to integrate with Hyperlane, please see the [documentation](https://docs.hyperlane.xyz).

## Setup

```bash
yarn install
```

## Deploying Warp Routes

Warp Routes are Hyperlane's unique take on the concept of token bridging, allowing you to permissionlessly bridge any ERC20-like asset to any chain. You can combine Warp Routes with a Hyperlane deployment to create economic trade routes between any chains already connected through Hyperlane.

See below for instructions on using the scripts in this repo to deploy Hyperlane Warp Routes. For more details see the [warp route documentation](https://docs.hyperlane.xyz/docs/deploy/deploy-warp-route).

### Deploying Warp contracts

Establishing a warp route requires deployment of `HypERC20` contracts to the desired chains. Ensure there is an entry for all chains in `config/chains.ts`.

The deployment also require details about the existing (collateral) token and the new synthetics that will be created. Ensure there are entries for them in `config/warp_tokens.ts`.

The `config/chains.ts` file already contains the details of chains that shardeum is interoperable with.
Hence to launch a new warp route for a token, only the address of the collateral token and the synthetic token need to be added to `config/warp_tokens.ts` file.

Then run the following command:

```sh
yarn ts-node scripts/deploy-warp-routes.ts \
  --key <pk>
```

### Deploying a Warp UI

If you'd like to create a web-based user interface for your warp routes, see the [Warp UI documentation](https://docs.hyperlane.xyz/docs/deploy/deploy-warp-route/deploy-the-ui-for-your-warp-route)
