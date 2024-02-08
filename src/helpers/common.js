import moment from 'moment-timezone';

export function getUTCTimestamp() {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return (
    `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  );
}

export function get_UTC_time() {
  return new Date().getTime();
}

export function getUnixTimeStamp() {
  return (Date.now() / 1000) | 0;
}

export function convertTimeStampUTCToLocal(timestamp) {
  const localDateTimeString = moment(timestamp).local().format('YYYY-MM-DD HH:mm:ss');
  return localDateTimeString;
}

export function formatDate(timestamp) {
  return moment(timestamp).format('MMMM Do YYYY, HH:mm');
}

export const getCurrentTimestamp = () => {
  // Get the current date and time
  const now = new Date();
  // Format the date components
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are zero-based, so add 1
  const year = now.getFullYear();
  // Format the time components
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // Get the current timestamp in nanoseconds using performance.now()
  const nanoseconds = performance.now() * 1e6;
  // Assemble the formatted timestamp
  const formattedTimestamp = `${day}_${month}_${year}_${hours}_${minutes}_${seconds}_${nanoseconds}`;
  return formattedTimestamp;
};
