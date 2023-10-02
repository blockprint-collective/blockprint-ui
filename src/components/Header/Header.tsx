'use client'

import Typography from '@/components/Typography/Typography';
import {motion} from 'framer-motion';
import {ANIM_VIEWPORT, UP_ANIM} from '@/constants';
import {forwardRef} from 'react';

// eslint-disable-next-line react/display-name
const Header = forwardRef((_, ref) => {
    return (
        <div ref={ref} className="center-staged">
            <div className="w-full py-16 x-padding">
                <motion.div
                    initial={UP_ANIM.init}
                    viewport={ANIM_VIEWPORT}
                    whileInView={UP_ANIM.inView}
                    transition={{...UP_ANIM.transition}}
                >
                    <Typography color="text-light80" className="tracking-tighter lg:text-base2 pb-4" fontWeight="font-light" type="text-base" family="font-archivo">Machine Learning for Ethereum Consensus</Typography>
                </motion.div>
                <motion.div
                    initial={UP_ANIM.init}
                    viewport={ANIM_VIEWPORT}
                    whileInView={UP_ANIM.inView}
                    transition={{...UP_ANIM.transition, delay: .2}}
                >
                    <Typography className="max-w-lg lg:max-w-2xl tracking-title leading-9 lg:leading-title lg:text-base5" type="text-base4">
                        Blockprint. Shaping the Future of Blockchain Transparency
                    </Typography>
                </motion.div>
                <motion.div
                    initial={UP_ANIM.init}
                    viewport={ANIM_VIEWPORT}
                    whileInView={UP_ANIM.inView}
                    transition={{...UP_ANIM.transition, delay: .4}}
                    className="flex space-x-2">
                    <Typography family="font-archivo" className="tracking-tighter" color="text-purple">Dive into insights</Typography>
                    <i className="bi-arrow-down text-purple"/>
                </motion.div>
            </div>
        </div>
    )
})

export default Header;