import {Observable} from 'rxjs/Observable'

export const createIpcOn = (ipc) => (onEvent) => new Observable((observer) => {
  const callback = (event, arg) => {
    observer.next({event, arg})
  }

  ipc.on(onEvent, callback)

  return () => ipc.removeListener(onEvent, callback)
})
