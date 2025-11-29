export function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateTime(date: Date): string {
    if (!date) return "";
    return (date.toDateString() +
        " " +
        date.getHours().toString().padStart(2, '0') +
        ":" +
        date.getMinutes().toString().padStart(2, '0')
    );
}