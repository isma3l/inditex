const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_A_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MILLISECONDS = 1000;

const MILLISECONDS_IN_A_DAY =
  SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR * HOURS_IN_A_DAY * MILLISECONDS;

export const isLocalDataUpdated = (
  previousTimeStamp: number,
  limit: number = MILLISECONDS_IN_A_DAY
) => {
  return Date.now() - previousTimeStamp < limit;
};
