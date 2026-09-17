import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";

const STATUS_META = [
  { key: "not_tested", label: "Not tested", color: "#9ca3af" },
  { key: "mastered", label: "Mastered", color: "#2f9e44" },
  { key: "gap_in_tutoring", label: "In tutoring", color: "#e8a33d" },
  { key: "gap_unresolved", label: "Unresolved", color: "#d0503f" },
];

export default function MasteryOverviewChart({ nodes }) {
  const counts = Object.fromEntries(STATUS_META.map((s) => [s.key, 0]));
  nodes.forEach((n) => {
    counts[n.status] = (counts[n.status] || 0) + 1;
  });
  const data = STATUS_META.map((s) => ({ name: s.label, value: counts[s.key], color: s.color }));

  return (
    <div className="rail-section">
      <p className="rail-heading">Mastery overview</p>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 12, top: 0, bottom: 0 }}>
          <XAxis type="number" hide allowDecimals={false} />
          <YAxis
            type="category"
            dataKey="name"
            width={82}
            tick={{ fontSize: 11, fill: "var(--ink-soft)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            contentStyle={{ fontSize: 12, borderRadius: 6, border: "1px solid var(--border)" }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={14}>
            {data.map((d) => (
              <Cell key={d.name} fill={d.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
