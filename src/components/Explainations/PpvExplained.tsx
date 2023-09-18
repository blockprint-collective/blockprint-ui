import Explanation from '@/components/Explanation/Explanation';

const PpvExplained = () => {
    const paragraphs = [
        'This is a detailed view of the positive predictive value, and how false positives are distributed. In each row, we show the percentage of blocks classified as that client which were actually produced by each of the clients from the columns.',
        'The values in each row should sum to ~100% (sometimes 99 or 101% due to rounding). The diagonal cells where the row and column clients are equal should match the PPV from the overview, and are ideally high. The other non-diagonal cells are ideally low, as they represent the column client being confused for the row client.',
        'The positive predictive value depends strongly on the prevalence of each client in the population being measured. In our cluster, the distribution of clients is artificially flat: there are approximately the same number of nodes of each client type, and they all produce a block each slot.',
        'As a result, if a minority client like Lodestar is producing a lot of blocks which are misclassified as a majority client like Prysm then the PPV for Prysm will be much lower in our dashboard than it would be on mainnet where there are far fewer real blocks from Lodestar that could be misclassified. We still think this PPV measure is useful, it just bears keeping in minds its limitations and not jumping hastily to conclusions.',
    ]

    return (
        <Explanation title="Positive Predictive Value" texts={paragraphs}/>
    )
}

export default PpvExplained;