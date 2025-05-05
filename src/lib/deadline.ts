import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import tz from 'dayjs/plugin/timezone.js';
import id from 'dayjs/locale/id.js';

dayjs.extend(tz);
dayjs.extend(utc);

// export const deadlineDate = dayjs
//   .tz(new Date(2025, 4, 5), 'Asia/Makassar')
//   .add(20, 'hours')
//   .locale(id);
export const deadlineDate = dayjs
  .tz(new Date(2025, 4, 5), 'Asia/Makassar')
  .add(20, 'hours')
  .locale(id);
