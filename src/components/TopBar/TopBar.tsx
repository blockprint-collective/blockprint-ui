import Typography from '@/components/Typography/Typography';
import TopMenu from '@/components/TopMenu/TopMenu';
import {FC} from 'react';

export interface TopBarProps {
    onScrollPrecision: () => void
    onScrollDiversity: () => void
}

const TopBar:FC<TopBarProps> = (props) => {
    return (
        <>
            <div className="center-staged bg-dark border-b border-dark200 h-12 fixed top-0 left-0 z-20">
                <div className="w-full x-padding flex justify-between items-center">
                    <Typography type="text-base2" isBold>Blockprint.</Typography>
                    <TopMenu {...props} />
                </div>
            </div>
            <div className="w-full h-12"/>
        </>
    )
}

export default TopBar;