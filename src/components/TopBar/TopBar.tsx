import Typography from '@/components/Typography/Typography';
import TopMenu from '@/components/TopMenu/TopMenu';


const TopBar = () => {
    return (
        <div className="w-full bg-dark border-b border-dark200 h-12 flex justify-between items-center x-padding">
            <Typography type="text-base2" isBold>Blockprint.</Typography>
            <TopMenu/>
        </div>
    )
}

export default TopBar;