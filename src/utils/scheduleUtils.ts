export function parseISODurationToMs(duration: string): number {
  if (!duration) return 0;

  const normalized = duration.toUpperCase().replace(/^PT/, "");

  const match = normalized.match(/(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return 0;

  const [, h, m, s] = match;
  return (
    (Number(h) || 0) * 3600000 +
    (Number(m) || 0) * 60000 +
    (Number(s) || 0) * 1000
  );
}

export function formatDuration(duration: string): string {
  const ms = parseISODurationToMs(duration);
  const totalMinutes = Math.floor(ms / 60000);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export function parseLocalDate(dayKey: string): Date {
  const [year, month, day] = dayKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}
