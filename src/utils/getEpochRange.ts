import { MAINNET_GENESIS } from '@/constants'
import moment from 'moment'

const getEpochRange = () => {
  const currentTimestamp = moment().unix()
  const latestEpoch = Math.floor((currentTimestamp - MAINNET_GENESIS) / (12 * 32))

  return {
    start: latestEpoch - 3150,
    end: latestEpoch,
  }
}

export default getEpochRange
