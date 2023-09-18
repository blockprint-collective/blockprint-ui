import Typography from '@/components/Typography/Typography';

const Header = () => {
  return (
      <div className="w-full py-16 px-6 lg:px-32">
          <Typography color="text-light80" className="tracking-tighter" fontWeight="font-light" type="text-base2" family="font-archivo">Machine Learning for Ethereum Consensus</Typography>
          <Typography className="max-w-xl tracking-title leading-title" type="text-base5">
              Blockprint. Shaping the Future of Blockchain Transparency
          </Typography>
          <div className="flex space-x-2">
              <Typography family="font-archivo" className="tracking-tighter" color="text-purple">Dive into insights</Typography>
              <i className="bi-arrow-down text-purple"/>
          </div>
      </div>
  )
}

export default Header;