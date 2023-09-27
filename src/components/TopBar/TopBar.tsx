import Typography from '@/components/Typography/Typography';
import TopMenu from '@/components/TopMenu/TopMenu';
import Section from '@/components/Section/Section';


const TopBar = () => {
    return (
        <Section className="bg-dark border-b border-dark200 h-12">
            <div className="w-full x-padding flex justify-between items-center">
                <Typography type="text-base2" isBold>Blockprint.</Typography>
                <TopMenu/>
            </div>
        </Section>
    )
}

export default TopBar;