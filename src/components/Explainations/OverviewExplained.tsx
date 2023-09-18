import Explanation from '@/components/Explanation/Explanation';

const OverviewExplained = () => {
    const paragraphs = [
        'Blockprint classifies blocks using a machine-learning model which sometimes makes mistakes. The statistics shown above are measurements of blockprint’s accuracy using a cluster of consensus clients that produce blocks every slot. We take the blocks produced by the cluster, classify them using blockprint, and then compare blockprint’s classification to what we know the true classification to be.',
        'For example, if the cluster produces a block using a Lighthouse node, and blockprint says that it’s Lighthouse, then this gets noted down as a true positive. Conversely, if blockprint says that the block produced by Lighthouse is Nimbus, then this is noted down as a false negative for Lighthouse and a false positive for Nimbus. The statistics TPR (true positive rate), TNR (true negative rate) and PPV (positive predictive value) are standard statistical measures of test accuracy, which are used in fields like medicine to describe the reliability of diagnostic tests.',
        'For our purposes the most important are the true positive rate and positive predictive value. If there are too many false negatives (i.e. blockprint failing to classify a client when it should), then the true positive rate will drop. On the other hand, if there are too many false positives (blockprint classifying a client when it shouldn’t) then the positive predictive value will suffer. Ideally we would like both measures to be high (90%+).'
    ]

    return (
        <Explanation title="Accuracy Overview" texts={paragraphs}/>
    )
}

export default OverviewExplained;