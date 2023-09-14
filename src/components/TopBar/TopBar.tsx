import Typography from '@/components/Typography/Typography';
import {DISCORD_URL, GITHUB_URL} from '@/constants';


const TopBar = () => {
    return (
        <div className="w-full border-b border-dark200 h-12 flex justify-between items-center px-32">
            <Typography type="text-base2" isBold>Blockprint.</Typography>
            <div className="flex space-x-4">
                <div className="h-full cursor-pointer">
                    <Typography type="text-tiny">Client Resources</Typography>
                </div>
                <a target="_blank" href={GITHUB_URL} rel="noreferrer">
                    <i className="bi-discord text-light w-5 h-5"/>
                </a>
                <a target="_blank" href={DISCORD_URL} rel="noreferrer">
                    <i className="bi-github text-light w-5 h-5"/>
                </a>
            </div>
        </div>
    )
}

export default TopBar;