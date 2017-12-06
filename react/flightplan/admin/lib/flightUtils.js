export function dateToday(includeHour) {

	//arrival time (format today's date)
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1; //months from 1-12
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();
  let hours = dateObj.getUTCHours();
	let today = year + "/" + month + "/" + day ;
  if(includeHour) {
    today = today + `/${hours}`;
  }

	return today;
}

export function getStatus(statusCode) {

    const status = {
        A: 'Active',
        C: 'Canceled',
        D: 'Diverted',
        DN: 'Data source needed',
        L: 'Landed',
        NO: 'Not Operational',
        R: 'Redirected',
        S: 'Scheduled',
        U: 'Unknown'
    }

    if(status[statusCode]) {
        return status[statusCode];
    } else {
        return 'no data'
    }

}

//convert: 2017-01-17T12:13:00.000
//to: Tue, 17 Jan 2017 12:13:00 GMT
export function convertISO8601toDate(dtstr) {

  // replace anything but numbers by spaces
  dtstr = dtstr.replace(/\D/g," ");

  // trim any hanging white space
  dtstr = dtstr.replace(/\s+$/,"");

  // split on space
  var dtcomps = dtstr.split(" ");

  // not all ISO 8601 dates can convert, as is
  // unless month and date specified, invalid
  if (dtcomps.length < 3) return "invalid date";
  // if time not provided, set to zero
  if (dtcomps.length < 4) {
    dtcomps[3] = 0;
    dtcomps[4] = 0;
    dtcomps[5] = 0;
  }
  // modify month between 1 based ISO 8601 and zero based Date
  dtcomps[1]--;

  var convdt = new
  Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));

  return convdt.toUTCString();
}