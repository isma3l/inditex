const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_A_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MILLISECONDS = 1000;

export const SECONDS_IN_A_DAY = SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR * HOURS_IN_A_DAY;

const MILLISECONDS_IN_A_DAY = SECONDS_IN_A_DAY * MILLISECONDS;

export const isLocalDataUpdated = (
  previousTimeStamp: number,
  timeLimit: number = MILLISECONDS_IN_A_DAY
) => {
  const currentTimeStamp = Date.now();
  const timeDifference = currentTimeStamp - previousTimeStamp;
  console.log('currentTimeStamp', currentTimeStamp);
  console.log('previousTimeStamp', previousTimeStamp);
  console.log('dif: ', timeDifference);
  console.log('limit', timeLimit);
  console.log('update: ', timeDifference < timeLimit);
  return timeDifference < timeLimit;
};
