import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import { managingCommittee, projectTeams, members } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Managing Committee, project heads and members of Sahayog Samarpan Seva Foundation.",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">आमची टीम</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            The dedicated people leading Sahayog Samarpan Seva Foundation and driving
            our work across education, health, sports and outreach.
          </p>
        </div>
      </section>

      {/* Managing Committee — passport photos */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Managing Committee
          </h2>
          <p className="font-marathi mt-1 text-brand-saffron">
            व्यवस्थापन समिती
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-saffron" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {managingCommittee.map((member) => (
            <div
              key={member.role ?? member.name}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <Avatar
                name={member.name}
                photo={member.photo}
                variant="passport"
              />
              <div className="mt-3 text-center">
                <h3 className="text-sm font-semibold text-brand-navy">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="mt-0.5 text-xs font-medium text-brand-saffron">
                    {member.role}
                  </p>
                )}
                {member.roleMr && (
                  <p className="font-marathi text-xs text-gray-500">
                    {member.roleMr}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Heads & teams — portfolio-wise, names only under each heading */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
              Project Heads &amp; Teams
            </h2>
            <p className="font-marathi mt-1 text-brand-saffron">
              प्रकल्प प्रमुख व टीम
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-saffron" />
          </div>

          <div className="space-y-12">
            {projectTeams.map((group) => (
              <div key={group.title}>
                <div className="mb-5 flex items-baseline gap-3 border-b border-brand-navy/10 pb-2">
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {group.title}
                  </h3>
                  {group.titleMr && (
                    <span className="font-marathi text-sm text-gray-500">
                      {group.titleMr}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member, idx) => (
                    <div
                      key={`${member.name}-${idx}`}
                      className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                    >
                      <Avatar name={member.name} variant="round" />
                      <p className="font-semibold text-brand-navy">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Members
          </h2>
          <p className="font-marathi mt-1 text-brand-saffron">सदस्य</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-saffron" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-lg border border-black/5 bg-white p-4 shadow-sm"
            >
              <Avatar name={member.name} variant="round" />
              <p className="font-semibold text-brand-navy">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
