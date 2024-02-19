export function daysElapsedSince(dateString: string): string {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  const differenceInMilliseconds = currentDate.getTime() - givenDate.getTime();

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(
    differenceInMilliseconds / millisecondsInADay
  );

  return differenceInDays.toString();
}
