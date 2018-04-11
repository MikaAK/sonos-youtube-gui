import {Observable} from 'rxjs/Observable'
import {path, applySpec, map} from 'ramda'

import {YouTubeClient} from './client'

const videoProp = (...props) => path(['snippet', ...props])

const deserializeYouTubeData = map(applySpec({
  videoId: path(['id', 'videoId']),
  title: videoProp('title'),
  description: videoProp('description'),
  channelTitle: videoProp('channelTitle'),
  publishedAt: videoProp('publishedAt'),
  thumbnails: videoProp('thumbnails')
}))

export const searchYoutube$ = (query) => new Observable((observer) => {
  YouTubeClient.search(query, 20, (err, res) => {
    if (err) {
      console.error(err) // eslint-disable-line no-console

      observer.error(err)
    }

    observer.next(res ? deserializeYouTubeData(res.items) : [])
    observer.complete()
  })
})
