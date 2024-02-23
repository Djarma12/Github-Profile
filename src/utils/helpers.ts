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

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
