import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import tz from 'dayjs/plugin/timezone.js';
import id from 'dayjs/locale/id.js';

dayjs.extend(tz);
dayjs.extend(utc);

export const deadlineDate = dayjs
  .tz(new Date(2025, 4, 5), 'Asia/Makassar')
  .add(19, 'hours')
  .add(30, 'minutes')
  .locale(id);
// export const deadlineDate = dayjs
//   .tz(new Date(2025, 4, 4), 'Asia/Makassar')
//   .add(21, 'hours')
//   .add(31, 'minutes')
//   .locale(id);
