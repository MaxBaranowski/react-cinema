export const timeStamp = {
  full: () => {
    let today = new Date(),
      year = today.getFullYear(),
      month = today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth(),
      day = today.getDay() < 10 ? "0" + today.getDay() : today.getDay(),
      hour = today.getHours(),
      minute = today.getMinutes(),
      seconds = today.getSeconds(),
      miliseconds = today.getMilliseconds();
    return `${day}.${month}.${year} ${hour}:${minute}:${seconds}:${miliseconds}`;
  }
}