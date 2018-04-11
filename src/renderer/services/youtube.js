import {ipcArgOn$, ipcSend} from '../helpers'
import {SEARCH_YOUTUBE, SEARCH_YOUTUBE_RETURNED} from 'common/actions'

export const searchYoutube = (query) => ipcSend(SEARCH_YOUTUBE, query)
export const youtubeResults$ = ipcArgOn$(SEARCH_YOUTUBE_RETURNED)
