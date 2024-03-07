export default function transfromDateRegex(dateValue) {
  const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
  const match = dateValue.match(dateTimeRegex);
  const year = match[1];
  const month = match[2];
  const day = match[3];
  const hour = match[4];
  const minute = match[5];
  const second = match[6];
  const formattedDateTime = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  
  return formattedDateTime;
}
