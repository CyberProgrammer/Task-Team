export function getDaysBetweenDates(date1: string, date2: string): number {
    // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    // Parse the dates
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(secondDate.getTime() - firstDate.getTime());

    // Convert the difference to days
    return Math.round(differenceInMilliseconds / oneDayInMilliseconds);
}

export function convertToLocalTime(isoDateString: string): string {
    const date = new Date(isoDateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();

    let dayWithSuffix: string;
    switch (day % 10) {
        case 1:
            dayWithSuffix = day + 'st';
            break;
        case 2:
            dayWithSuffix = day + 'nd';
            break;
        case 3:
            dayWithSuffix = day + 'rd';
            break;
        default:
            dayWithSuffix = day + 'th';
    }

    return `${month} ${dayWithSuffix}`;
}