import Explanation from '@/components/Explanation/Explanation';

const TprExplained = () => {
    const paragraphs = [
        'This is a detailed view of the true positive rate, and how false negatives are distributed. In each row, we show the percentage of blocks produced by that client that were classified as the clients from each of the columns.',
        'The values in each row should sum to ~100% (sometimes 99 or 101% due to rounding). The diagonal cells where the row and column clients are equal should match the TPR from the overview, and are ideally high. The other non-diagonal cells are ideally low, as they represent the row-client being confused for the column client.',
        'Rows: Client that produced the blocks',
        'Columns: Classification according to Blockprint'
    ]

    return (
        <Explanation title="True Positive Rate" texts={paragraphs}/>
    )
}

export default TprExplained;