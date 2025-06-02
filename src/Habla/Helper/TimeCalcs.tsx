
export const utc_to_local_converter = (utcTime: Date): Date => {
    const localTime = new Date(utcTime.getTime() - utcTime.getTimezoneOffset() * 60000);
    return localTime;
}

export const get_local_time = (): Date => {
    return new Date();
}

export const stringToTimeConverter = (timeString: string): Date => {
    return new Date(timeString);
};

export const string_HHMMSS_to_time = (timeString: string): Date => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;

}

export const time_to_string_HHMMSS_format = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    return timeString;
}

export const time_to_string_HHMM_format = (time: Date): string => {
    const timeString = time_to_string_HHMMSS_format(time);
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
}

export const time_to_string_MMSS_format = (time: Date): string => {
    const timeString = time_to_string_HHMMSS_format(time);
    const [, minutes, seconds] = timeString.split(':');
    return `${minutes}:${seconds}`;
}

export const get_date_from_timestamp = (dateTimeString: string): Date => {
    const dateTime = new Date(dateTimeString);
    const date = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());

    return date;
};