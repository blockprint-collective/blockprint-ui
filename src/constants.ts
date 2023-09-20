import {ResourceData} from '@/types';

export const GITHUB_URL = 'https://github.com/sigp/blockprint'
export const DISCORD_URL = 'https://discord.gg/Pj6tNRWjeP'
export const MAINNET_GENESIS = '1606824023'

export const GRANDINE = {
    title: 'Grandine',
    site: 'https://sifrai.com/',
    docs: 'https://github.com/sifraitech/grandine',
    github: 'https://github.com/sifraitech/grandine',
    discord: 'https://discord.gg/H9XCdUSyZd'
}

export const Lighthouse = {
    title: 'Lighthouse',
    site: 'https://lighthouse.sigmaprime.io/',
    docs: 'https://lighthouse-book.sigmaprime.io/',
    github: 'https://github.com/sigp/lighthouse/',
    discord: DISCORD_URL
}

export const LOADSTAR = {
    title: 'Loadstar',
    site: 'https://lodestar.chainsafe.io/',
    docs: 'https://hackmd.io/@philknows/rk5cDvKmK',
    github: 'https://github.com/ChainSafe/lodestar',
    discord: 'https://discord.gg/yjyvFRP'
}

export const NIMBUS = {
    title: 'Nimbus',
    site: 'https://nimbus.team/',
    docs: 'https://nimbus.team/docs/',
    github: 'https://github.com/status-im/nimbus-eth2',
    discord: 'https://discord.gg/qnjVyhatUa'
}

export const PRYSM = {
    title: 'Prysm',
    site: 'https://prysmaticlabs.com/',
    docs: 'https://docs.prylabs.network/docs/getting-started/',
    github: 'https://github.com/prysmaticlabs/prysm',
    discord: 'https://discord.gg/YMVYzv6'
}

export const TEKU = {
    title: 'Teku',
    site: 'https://consensys.io/teku/',
    docs: 'https://docs.teku.consensys.net/en/latest/',
    github: 'https://github.com/ConsenSys/teku',
    discord: 'https://discord.gg/9mCVSY6'
}

export const RESOURCES = [Lighthouse, GRANDINE, LOADSTAR, NIMBUS, PRYSM, TEKU] as ResourceData[]