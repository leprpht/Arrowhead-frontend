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

export function formatPercentage(value: string): string {
    if (value === "No data yet" || value === "Loading...") return value;
    const num = Number(value);

    if (num === null) return "";

    const rounded = Math.round(num * 10) / 10;
    return Number.isInteger(rounded)
        ? rounded.toFixed(0) + "%"
        : rounded.toFixed(1) + "%";
}