import {atom} from 'recoil';
import {DiversityView, PrecisionView} from '@/types';

export const precisionView = atom<PrecisionView>({
    key: 'precisionView',
    default: PrecisionView.OVERVIEW
})

export const diversityView = atom<DiversityView>({
    key: 'diversityView',
    default: DiversityView.VALIDATOR
})