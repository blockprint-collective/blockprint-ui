import {useRouter, useSearchParams} from 'next/navigation';
import {PrecisionView} from '@/types';


const useTableNav = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const chartView = searchParams.get('chart')?.toUpperCase()

    const viewTable = (table: PrecisionView) => router.push(`?chart=${table.toLowerCase()}`, {scroll: false})

    const viewOverview = () => viewTable(PrecisionView.OVERVIEW)
    const viewTPR = () => viewTable(PrecisionView.TPR_DETAIL)
    const viewPPV = () => viewTable(PrecisionView.PPV_DETAIL)
    const viewDiversity = () => viewTable(PrecisionView.DIVERSITY)


    return {
        viewOverview,
        viewTPR,
        viewPPV,
        viewDiversity,
        currentView: chartView
    }
}

export default useTableNav;