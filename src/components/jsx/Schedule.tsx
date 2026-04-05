import { useMemo } from "react";
import {
  formatDuration,
  parseISODurationToMs,
  parseLocalDate,
} from "./scheduleUtils";

type ScheduleJson = {
  schedule: {
    items: {
      data: string[];
      length: string;
    }[];
    start: string;
    timezone: string;
  };
};

type Run = {
  category: string;
  estimate: string;
  game: string;
  runners: string;
  start: Date;
};

type DayGroup = {
  day: string;
  runs: Run[];
};

type Props = {
  data: ScheduleJson;
};

export default function Schedule({ data }: Props) {
 const groupedSchedule = useMemo<DayGroup[]>(() => {
    const { schedule } = data;
    let currentTime = new Date(schedule.start).getTime();

    const runs: Run[] = [];

    for (const item of schedule.items) {
      const [runners, game, category, , , , customData] = item.data;

      const runDurationMs = parseISODurationToMs(item.length);

      if (!runners || runners.trim() === "") {
        currentTime += runDurationMs;
        continue;
      }

      let setupTimeMs = 0;

      if (customData) {
        try {
          const parsed = JSON.parse(customData);
          if (parsed.setup) {
            setupTimeMs = parseISODurationToMs(parsed.setup);
          }
        } catch {
          
        }
      }

      runs.push({
        start: new Date(currentTime),
        runners,
        game,
        category,
        estimate: formatDuration(item.length),
      });

      currentTime += runDurationMs + setupTimeMs;
    }

    const map = new Map<string, Run[]>();

    runs.forEach((run) => {
      const dayKey = run.start.toLocaleDateString("en-CA");
      if (!map.has(dayKey)) map.set(dayKey, []);
      map.get(dayKey)!.push(run);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([day, runs]) => ({ day, runs }));
  }, [data]);

  return (
    <>
      {groupedSchedule.map((day) => (
        <table
          className="w-full table-fixed ring-2 rounded-sm drop-shadow-sm drop-shadow-black"
          key={day.day}
        >
          <caption className="bs-h2 text-left mb-5 drop-shadow-md drop-shadow-black">
            {parseLocalDate(day.day).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </caption>

          <colgroup>
            <col className="w-[10%]" />
            <col className="w-[40%]" />
            <col className="w-[20%]" />
            <col className="w-[10%] hidden sm:table-column" />
          </colgroup>

          <thead className="bg-bs-primary/30">
            <tr>
              <th className="px-3 py-2 italic text-xs sm:text-sm text-left">
                Time
              </th>
              <th className="px-3 py-2 italic text-xs sm:text-sm text-left">
                Game
              </th>
              <th className="px-3 py-2 italic text-xs sm:text-sm text-left">
                Category
              </th>
              <th className="px-3 py-2 italic text-sm hidden sm:table-cell text-left">
                Estimate
              </th>
            </tr>
          </thead>

          <tbody>
            {day.runs.map((run, idx) => (
              <tr
                key={`${run.game}-${run.category}`}
                className={idx & 1 ? "bg-[#289289]" : "bg-bs-primary"}
              >
                <th scope="row" className="px-3 py-2 text-sm sm:text-base">
                  {run.start.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </th>
                <td className="px-3 py-2 whitespace-normal wrap-break-word">
                  {run.game}
                </td>
                <td className="px-3 py-2 whitespace-normal wrap-break-word">
                  {run.category}
                </td>
                <td className="px-3 py-2 hidden sm:table-cell">
                  {run.estimate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
}
