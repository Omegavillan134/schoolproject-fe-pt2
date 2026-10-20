export default function Calendar() {
    const today = new Date();
    const year = today.getFullYear();
    const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const cells: (number | null)[] = [
        ...Array(firstDayOfMonth).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ]
    return (
        <div className="card flex h-full flex-col items-center justify-center gap-2">
            <p className="mb-2 text-center font-semibold">
                {today.toLocaleString("en-US", { month: "long", year: "numeric" })}
            </p>
            <div className="grid grid-cols-7 gap-1 text-center text-lg">
                {weekdays.map((d) => (
          <div key={d} className="font-medium text-gray-500">{d}</div>
        ))}
        {cells.map((day, i) =>
          day === null ? (
            <div key={"b" + i} />
          ) : (
            <div
              key={day}
              className={`flex items-center justify-center rounded-full p-1 ${
                day === today.getDate()
                  ? "bg-sky-500 text-white"
                  : "text-gray-700"
              }`}
            >
              {day}
                    </div>
                ))}
            </div>
        </div>
    )
}