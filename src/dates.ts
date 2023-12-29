export function formatDate(date: Date, format: string, locale: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat(locale, options);
    const formattedDate = formatter.format(date);

    // Replace placeholders with corresponding values
    const result = format
        .replace(/y+/g, (match) => formattedDate.slice(-match.length))
        .replace(/M+/g, (match) => {
            const month = date.getMonth() + 1;
            return match.length > 1 ? String(month).padStart(2, '0') : String(month);
        })
        .replace(/d+/g, (match) => {
            const day = date.getDate();
            return match.length > 1 ? String(day).padStart(2, '0') : String(day);
        });

    return result;
}

export function formatToServe(date: Date) {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();

    const newFormat = [year, month, day].join('/');

    return newFormat + ' 12:00:00 AM';
}

export function onWithoutDate(withoutDate: boolean): {start: Date, end: Date} {
    if (withoutDate) {
        const start = new Date();
        const end = new Date();
        end.setFullYear(end.getFullYear() + 20);
        end.setDate(end.getDate() + 5);
        return {start, end};
    } else {
        const last = new Date();
        last.setDate(last.getDate() + 5);
        return {start: new Date(), end: last};
    }
}
