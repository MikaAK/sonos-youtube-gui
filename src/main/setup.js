import dotenv from 'dotenv'
import {resolve} from 'path'
import {setS3Config} from 'sonos-youtube/lib/s3'

import {YouTubeClient} from './youtube/client'

export const setup = () => {
  dotenv.config({path: resolve(__dirname, '../../.env')})

  setS3Config(process.env)
  YouTubeClient.setKey(process.env.YOUTUBE_API_KEY)
}
