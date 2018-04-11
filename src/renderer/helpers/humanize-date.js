import {isDate} from 'common/helpers/util'

const dateOpts = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}

export const humanizeDate = (date) => new Intl.DateTimeFormat('en-US', dateOpts)
  .format(isDate(date) ? date : new Date(date))
