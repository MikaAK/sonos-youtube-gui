import {rxMapIpcArg} from './rx-map-ipc-arg'

export const createIpcArgOn = (ipc$) => (event) => ipc$(event)
  .pipe(rxMapIpcArg)
