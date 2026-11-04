import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { managingCommittee, members, projectTeams } from "@/data/team";

/** The people of the foundation. Lives on the About page, under `#team`. */
export default function TeamSections() {
  return (
    <div id="team">
      <Section tone="navy">
        <Heading as="h2" titleMr="आमची टीम" title="Our Team" size="page" />
        <h3 className="mt-10">
          <span className="font-display-mr block text-2xl leading-tight text-white">
            व्यवस्थापन समिती
          </span>
          <span className="font-display-en mt-1 block text-xl font-medium text-white">
            Managing Committee
          </span>
        </h3>
        <ul className="mt-6 border-t border-white/20">
          {managingCommittee.map((member) => (
            <li
              key={member.role ?? member.name}
              className="grid min-w-0 grid-cols-1 gap-4 border-b border-white/20 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-center"
            >
              {member.photo && (
                <div className="w-full max-w-[11rem]">
                  <Avatar name={member.name} photo={member.photo} />
                </div>
              )}
              <div className="min-w-0">
                <h4 className="text-lg font-semibold leading-snug text-white">{member.name}</h4>
                {member.roleMr && (
                  <p className="font-display-mr mt-1 text-lg leading-snug text-white">
                    {member.roleMr}
                  </p>
                )}
                {member.role && <p className="mt-1 text-white">{member.role}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper-deep">
        <Heading titleMr="प्रकल्प प्रमुख व टीम" title="Project heads and teams" />
        <div className="mt-10 space-y-10">
          {projectTeams.map((group) => (
            <section key={group.title}>
              <h3 className="border-b border-rule pb-2">
                {group.titleMr && (
                  <span className="font-display-mr block text-2xl leading-tight text-brand-navy">
                    {group.titleMr}
                  </span>
                )}
                <span className="mt-1 block text-lg text-ink">{group.title}</span>
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {group.members.map((member, index) => (
                  <li
                    key={`${member.name}-${index}`}
                    className="min-w-0 border-b border-rule py-3 text-base leading-6 text-ink"
                  >
                    {member.name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Heading titleMr="सदस्य" title="Members" />
        <ul className="mt-6 grid grid-cols-1 border-t border-rule sm:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <li
              key={member.name}
              className="min-w-0 border-b border-rule py-3 text-base leading-6 text-ink"
            >
              {member.name}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
