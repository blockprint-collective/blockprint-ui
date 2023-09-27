import Typography from '@/components/Typography/Typography';
import Section from '@/components/Section/Section';

const Header = () => {
  return (
      <Section>
          <div className="w-full py-16 x-padding">
              <Typography color="text-light80" className="tracking-tighter lg:text-base2 pb-4" fontWeight="font-light" type="text-base" family="font-archivo">Machine Learning for Ethereum Consensus</Typography>
              <Typography className="max-w-lg lg:max-w-2xl tracking-title leading-9 lg:leading-title lg:text-base5" type="text-base4">
                  Blockprint. Shaping the Future of Blockchain Transparency
              </Typography>
              <div className="flex space-x-2">
                  <Typography family="font-archivo" className="tracking-tighter" color="text-purple">Dive into insights</Typography>
                  <i className="bi-arrow-down text-purple"/>
              </div>
          </div>
      </Section>
  )
}

export default Header;