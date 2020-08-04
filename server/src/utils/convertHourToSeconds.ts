export default function convertHourToSeconds(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInSeconds = (hour * 3600) + (minutes * 60);

    return timeInSeconds
}