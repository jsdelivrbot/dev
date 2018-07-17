Cron job format:
<Minute> <Hour> <Day_of_the_Month> <Month_of_the_Year> <Day_of_the_Week>
* * * * *                        Each minute

59 23 31 12 5                      One minute  before the end of year if the last day of the year is Friday

59 23 31 DEC Fri                   Same as above (different notation)

45 17 7 6 *                        Every  year, on June 7th at 17:45

45 17 7 6 *            Once a   year, on June 7th at 17:45

0,15,30,45 0,6,12,18 1,15,31 * 1-5     At 00:00, 00:15, 00:30, 00:45, 06:00, 06:15, 06:30,
                                    06:45, 12:00, 12:15, 12:30, 12:45, 18:00, 18:15,
                                    18:30, 18:45, on 1st, 15th or  31st of each  month, but not on weekends

*/15 */6 1,15,31 * 1-5 *            Same as above (different notation)

* * * 1,3,5,7,9,11 *             Each minute in January,  March,  May, July, September, and November

1,2,3,5,20-25,30-35,59 23 31 12 * * On the  last day of year, at 23:01, 23:02, 23:03, 23:05,
                                    23:20, 23:21, 23:22, 23:23, 23:24, 23:25, 23:30,
                                    23:31, 23:32, 23:33, 23:34, 23:35, 23:59

0 9 1-7 * 1                       First Monday of each month, at 9 a.m.

0 0 1 * *                         At midnight, on the first day of each month

* 0-11 * * *                        Each minute before midday

* * * 1,2,3 *                     Each minute in January, February or March

* * * Jan,Feb,Mar *               Same as above (different notation)

0 0 * * *                         Daily at midnight

0 0 * * 3                         Each Wednesday at midnight


For php to handle picking up the cron:
public function due_today($now = false)
{
	$time = strtotime(date('Y-m-d H:i:s'));
	$run_time = date('Y-m-d 08:00:00');

	$pre_run_time = strtotime($run_time.' -2 minutes');
	$post_run_time = strtotime($run_time.' +2 minutes');

	if ($now == true || ($time >= $pre_run_time && $time <= $post_run_time)) {
		// do stuff...
	} else {
		dbug('Invalid time. Time needs to be between '.date('g:i a', $pre_run_time).' and '.date('g:i a', $post_run_time), 'Lock and Key', 'Scheduler', 'info');
	}
}
