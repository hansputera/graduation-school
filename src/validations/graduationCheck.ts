import { type } from 'arktype';

export const graduationCheck = type({
  nisn: type.string
    .matching(/[0-9]+/g)
    .atLeastLength(9)
    .atMostLength(12),
  date: {
    year: type.number.moreThan(2000),
    month: type.number.moreThan(0).lessThan(13),
    day: type.number.moreThan(0).lessThan(32),
  },
});
