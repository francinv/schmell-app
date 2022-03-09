export function isTimeToUpdate(date: string) {
  let last_updated = new Date(date);
  let today = new Date();
  return last_updated < today;
}

export function getDate() {
  const TODAY: Date = new Date();
  return TODAY.toJSON();
}

export function getWeekNumber() {
  var tdt: any = new Date();
  var dayn = (tdt.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}
