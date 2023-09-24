export function ExperienceCard({
  startDate,
  endDate,
  position,
  company,
  otherPositionsAtCompany,
  description,
  technologies,
}) {
  return (
    <div className="overflow-hidden rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6 flex">
        <div className="h-full w-1/5 border-purple-500 overflow-hidden">
          <p className="overflow-hidden text-ellipsis">
            {startDate} – {endDate}
          </p>
        </div>
        <div className="h-full w-4/5 border-purple-500">
          <div className="pb-2">
            <p>
              {position} * {company}
            </p>
            {otherPositionsAtCompany.map((pos) => (
              <p>{pos}</p>
            ))}
          </div>

          <p className="pb-2">{description}</p>

          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <div className="rounded-full bg-zinc-100 w-fit px-3 py-1 text-slate-500">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
