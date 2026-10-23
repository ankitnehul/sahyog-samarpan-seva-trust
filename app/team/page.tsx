import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import PageHeading from "@/components/PageHeading";
import { managingCommittee, members, projectTeams } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Managing Committee, project heads and members of Sahayog Samarpan Seva Foundation.",
};

export default function TeamPage() {
  return (
    <div>
      <PageHeading
        surface="paper"
        titleMr="आमची टीम"
        title="Our Team"
        description="The people who keep Sahayog Samarpan Seva Foundation and its work in education, health, sports, and outreach."
      />

      <section className="surface-ink">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2>
            <span data-enter className="font-display-mr block text-3xl text-white">
              व्यवस्थापन समिती
            </span>
            <span
              data-enter="follow"
              className="font-display-en mt-1 block text-2xl font-medium text-white"
            >
              Managing Committee
            </span>
          </h2>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <ul data-enter="follow" className="border-t border-rule">
          {managingCommittee.map((member) => (
            <li
              key={member.role ?? member.name}
              className="grid min-w-0 grid-cols-1 gap-4 border-b border-rule py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-center"
            >
              {member.photo && (
                <div className="w-full max-w-[11rem]">
                  <Avatar name={member.name} photo={member.photo} />
                </div>
              )}
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-snug text-brand-navy">{member.name}</h3>
                {member.roleMr && (
                  <p className="font-display-mr mt-1 text-lg leading-snug text-brand-navy">
                    {member.roleMr}
                  </p>
                )}
                {member.role && <p className="mt-1 text-ink-soft">{member.role}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="surface-paper-deep border-t border-rule">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2>
            <span data-enter className="font-display-mr block text-3xl text-brand-navy">
              प्रकल्प प्रमुख व टीम
            </span>
            <span
              data-enter="follow"
              className="font-display-en mt-1 block text-2xl font-medium text-ink"
            >
              Project heads and teams
            </span>
          </h2>
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2>
          <span data-enter className="font-display-mr block text-3xl text-brand-navy">
            सदस्य
          </span>
          <span data-enter="follow" className="font-display-en mt-1 block text-2xl font-medium text-ink">
            Members
          </span>
        </h2>
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
      </section>
    </div>
  );
}
