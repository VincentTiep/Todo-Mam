export function getTime(arg: string) {
  const today = new Date(arg);

  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  date = checkTime(date);
  month = checkTime(month);

  m = checkTime(m);
  s = checkTime(s);

  return h + ":" + m + "-" + date + "/" + month + "/" + year;
}

export function getDateTime(arg: string) {
  const today = new Date(arg);

  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  date = checkTime(date);
  month = checkTime(month);

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  return year + "-" + month + "-" + date + " - " + h + ":" + m + ":" + s;
}

function checkTime(i: any) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
