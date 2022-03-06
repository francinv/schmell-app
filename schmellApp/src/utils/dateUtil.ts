export function isTimeToUpdate(date: string) {
  let last_updated = new Date(date);
  let today = new Date();
  last_updated.setDate(last_updated.getDate() + 2);
  return last_updated < today;
}

export function getDate() {
  const TODAY: Date = new Date();
  return TODAY.toJSON();
}
