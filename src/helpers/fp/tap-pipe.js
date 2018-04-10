import {pipe, tap} from 'ramda'

export const tapPipe = (...args) => pipe(args.map(tap))
