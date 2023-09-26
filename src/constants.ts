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

export const OVERVIEW_EXPLAINED = {
    title: 'Accuracy Overview',
    texts: [
        'Blockprint classifies blocks using a machine-learning model which sometimes makes mistakes. The statistics shown above are measurements of blockprint’s accuracy using a cluster of consensus clients that produce blocks every slot. We take the blocks produced by the cluster, classify them using blockprint, and then compare blockprint’s classification to what we know the true classification to be.',
        'For example, if the cluster produces a block using a Lighthouse node, and blockprint says that it’s Lighthouse, then this gets noted down as a true positive. Conversely, if blockprint says that the block produced by Lighthouse is Nimbus, then this is noted down as a false negative for Lighthouse and a false positive for Nimbus. The statistics TPR (true positive rate), TNR (true negative rate) and PPV (positive predictive value) are standard statistical measures of test accuracy, which are used in fields like medicine to describe the reliability of diagnostic tests.',
        'For our purposes the most important are the true positive rate and positive predictive value. If there are too many false negatives (i.e. blockprint failing to classify a client when it should), then the true positive rate will drop. On the other hand, if there are too many false positives (blockprint classifying a client when it shouldn’t) then the positive predictive value will suffer. Ideally we would like both measures to be high (90%+).'
    ]
}

export const TPR_EXPLAINED = {
    title: 'True Positive Rate',
    texts: [
        'This is a detailed view of the true positive rate, and how false negatives are distributed. In each row, we show the percentage of blocks produced by that client that were classified as the clients from each of the columns.',
        'The values in each row should sum to ~100% (sometimes 99 or 101% due to rounding). The diagonal cells where the row and column clients are equal should match the TPR from the overview, and are ideally high. The other non-diagonal cells are ideally low, as they represent the row-client being confused for the column client.',
        'Rows: Client that produced the blocks',
        'Columns: Classification according to Blockprint'
    ]
}

export const PPV_EXPLAINED = {
    title: 'Positive Predictive Value',
    texts: [
        'This is a detailed view of the positive predictive value, and how false positives are distributed. In each row, we show the percentage of blocks classified as that client which were actually produced by each of the clients from the columns.',
        'The values in each row should sum to ~100% (sometimes 99 or 101% due to rounding). The diagonal cells where the row and column clients are equal should match the PPV from the overview, and are ideally high. The other non-diagonal cells are ideally low, as they represent the column client being confused for the row client.',
        'The positive predictive value depends strongly on the prevalence of each client in the population being measured. In our cluster, the distribution of clients is artificially flat: there are approximately the same number of nodes of each client type, and they all produce a block each slot.',
        'As a result, if a minority client like Lodestar is producing a lot of blocks which are misclassified as a majority client like Prysm then the PPV for Prysm will be much lower in our dashboard than it would be on mainnet where there are far fewer real blocks from Lodestar that could be misclassified. We still think this PPV measure is useful, it just bears keeping in minds its limitations and not jumping hastily to conclusions.',
    ]
}