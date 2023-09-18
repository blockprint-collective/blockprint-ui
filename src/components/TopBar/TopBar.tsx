import Typography from '@/components/Typography/Typography';
import ExtraResources from '@/components/ExtraResources/ExtraResources';


const TopBar = () => {
    return (
        <div className="w-full bg-dark border-b border-dark200 h-12 flex justify-between items-center x-padding">
            <Typography type="text-base2" isBold>Blockprint.</Typography>
            <div className="flex items-center space-x-4">
                <div className="h-full cursor-pointer">
                    <Typography type="text-tiny">Client Resources</Typography>
                </div>
                <ExtraResources/>
            </div>
        </div>
    )
}

export default TopBar;