import {ResourceData} from '@/types';

export const GITHUB_URL = 'https://github.com/sigp/blockprint'
export const DISCORD_URL = 'https://discord.gg/Pj6tNRWjeP'
export const MAINNET_GENESIS = 1606824023

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

export const LODESTAR = {
    title: 'Lodestar',
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

export const ANIM_VIEWPORT = {once: true, amount: .4};

export const LEFT_SIDE_ANIM = {
    init: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0 },
    transition: {duration: 1.2}
}

export const LEFT_SIDE_DIAGONAL_ANIM = {
    init: { opacity: 0, x: -50, y: 50 },
    inView: { opacity: 1, x: 0, y: 0 },
    transition: {duration: .8}
}

export const RIGHT_SIDE_DIAGONAL_ANIM = {
    init: { opacity: 0, x: 50, y: 50 },
    inView: { opacity: 1, x: 0, y: 0 },
    transition: {duration: .8}
}

export const UP_ANIM = {
    init: { opacity: 0, y: 50 },
    inView: { opacity: 1, y: 0 },
    transition: {duration: .4}
}

export const SIDE_ANIM = {
    init: { opacity: 0, x: 50 },
    inView: { opacity: 1, x: 0 },
    transition: {duration: 1.2}
}

export const RESOURCES = [Lighthouse, GRANDINE, LODESTAR, NIMBUS, PRYSM, TEKU] as ResourceData[]

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
        'In the true positive rate chart, every row represents the client that produced the blocks and every column the classification according to blockprint. The values in each row should sum to ~100%.',
        'Each intersection containing a client and its respective classification represents block print’s ability to correctly classify that client. In these intersections > 90% are generally positive classifications for that particular client. Intersections where the clients do not match represent a wrong classification from block print.',
        'A lighthouse row with a Nimbus column, represents the percentage of lighthouse blocks marked as Nimbus blocks. These intersections should ideally return less than 25%, anything higher represents a confusion between those clients in block print’s analysis.',
        'Rows: Client that produced the blocks',
        'Columns: Classification according to Blockprint',
        'Note: Row values may sometimes reach 99 or 101% due to rounding'
    ]
}

export const PPV_EXPLAINED = {
    title: 'Positive Predictive Value',
    texts: [
        'Blockprint is not perfect, which means sometimes it can return false positives. Every row in the positive predictive value (PPV) chart represents the percentage of blocks classified as each client that were actually produced by the client of that column. The values in each row should sum to ~100%.',
        'Each matching intersection in this chart represents the percentage of actual blocks produced by each client, while mismatching intersections represent false positives. In these matching intersections > 90% are generally positive classifications for that particular client.',
        'It should be noted that the PPV depends strongly on the prevalence of each client in the population being measured. In our cluster, the distribution of clients is artificially flat: there are approximately the same number of nodes of each client type, and they all produce a block each slot.',
        'As a result, if a minority client like Lodestar is producing a lot of blocks which are misclassified as a majority client like Prysm then the PPV for Prysm will be much lower in our dashboard than it would be on mainnet where there are far fewer real blocks from Lodestar that could be misclassified. We still think this PPV measure is useful, it just bears keeping in minds its limitations and not jumping hastily to conclusions.',
        'Note: Row values may sometimes reach 99 or 101% due to rounding'
    ]
}
