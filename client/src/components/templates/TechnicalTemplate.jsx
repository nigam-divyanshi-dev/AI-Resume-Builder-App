const SectionHeading = ({ children, accentColor }) => (
    <h2
        className="mb-2 border-b border-zinc-300 pb-1 text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-900"
        style={{ borderColor: accentColor }}
    >
        {children}
    </h2>
);

const TechnicalTemplate = ({ data, accentColor }) => {
    const personalInfo = data.personal_info || {};

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        if (dateStr === "Present") return dateStr;

        const [year, month] = dateStr.split("-");
        if (!year || !month) return dateStr;

        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    const formatUrl = (url) => url?.replace(/^https?:\/\/(www\.)?/, "");

    const getHref = (url) => /^https?:\/\//i.test(url) ? url : `https://${url}`;

    const renderBullets = (description) => {
        const lines = description
            .split(/\r?\n|(?=•)/)
            .map((line) => line.replace(/^[•*-]\s*/, "").trim())
            .filter(Boolean);

        return (
            <ul className="list-disc space-y-1 pl-5 text-[11px] leading-[1.45] text-zinc-700">
                {lines.map((line, index) => <li key={index}>{line}</li>)}
            </ul>
        );
    };

    return (
        <div className="mx-auto max-w-4xl bg-white px-9 py-8 font-sans text-zinc-800">
            <header className="mb-5 border-b-2 border-zinc-900 pb-3">
                <h1 className="text-[27px] font-bold leading-none tracking-tight text-zinc-950">
                    {personalInfo.full_name || "Your Name"}
                </h1>
                {personalInfo.profession && (
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: accentColor }}>
                        {personalInfo.profession}
                    </p>
                )}
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-zinc-600">
                    {personalInfo.phone && <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>}
                    {personalInfo.email && <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>}
                    {personalInfo.location && <span>{personalInfo.location}</span>}
                    {personalInfo.linkedin && (
                        <a href={getHref(personalInfo.linkedin)} target="_blank" rel="noreferrer">
                            {formatUrl(personalInfo.linkedin)}
                        </a>
                    )}
                    {personalInfo.website && (
                        <a href={getHref(personalInfo.website)} target="_blank" rel="noreferrer">
                            {formatUrl(personalInfo.website)}
                        </a>
                    )}
                </div>
            </header>

            {data.professional_summary && (
                <section className="mb-4">
                    <SectionHeading accentColor={accentColor}>Professional Summary</SectionHeading>
                    <p className="text-[11px] leading-[1.5] text-zinc-700">{data.professional_summary}</p>
                </section>
            )}

            {data.skills?.length > 0 && (
                <section className="mb-4">
                    <SectionHeading accentColor={accentColor}>Technical Skills</SectionHeading>
                    <p className="text-[11px] leading-[1.55] text-zinc-700">{data.skills.join(" • ")}</p>
                </section>
            )}

            {data.experience?.length > 0 && (
                <section className="mb-4">
                    <SectionHeading accentColor={accentColor}>Experience</SectionHeading>
                    <div className="space-y-3">
                        {data.experience.map((experience, index) => (
                            <article key={index}>
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-[12px] font-bold text-zinc-950">{experience.position}</h3>
                                    <span className="shrink-0 text-[10px] text-zinc-600">
                                        {formatDate(experience.start_date)} - {experience.is_current ? "Present" : formatDate(experience.end_date)}
                                    </span>
                                </div>
                                <p className="mb-1 text-[11px] font-semibold" style={{ color: accentColor }}>{experience.company}</p>
                                {experience.description && renderBullets(experience.description)}
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {data.project?.length > 0 && (
                <section className="mb-4">
                    <SectionHeading accentColor={accentColor}>Projects</SectionHeading>
                    <div className="space-y-3">
                        {data.project.map((project, index) => (
                            <article key={index}>
                                <h3 className="text-[12px] font-bold text-zinc-950">
                                    {project.name}{project.type && <span className="font-normal text-zinc-500"> | {project.type}</span>}
                                </h3>
                                {project.description && renderBullets(project.description)}
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {data.education?.length > 0 && (
                <section>
                    <SectionHeading accentColor={accentColor}>Education</SectionHeading>
                    <div className="space-y-2">
                        {data.education.map((education, index) => (
                            <article key={index} className="flex items-baseline justify-between gap-4 text-[11px]">
                                <div>
                                    <h3 className="font-bold text-zinc-950">
                                        {education.institution}
                                    </h3>
                                    <p className="text-zinc-700">
                                        {education.degree}{education.field && ` in ${education.field}`}
                                        {education.gpa && ` | CGPA: ${education.gpa}`}
                                    </p>
                                </div>
                                <span className="shrink-0 text-[10px] text-zinc-600">{formatDate(education.graduation_date)}</span>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default TechnicalTemplate;