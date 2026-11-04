import {
  Baby,
  GraduationCap,
  HeartPulse,
  Leaf,
  Rocket,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { focusAreas } from "@/data/focus-areas";

const icons: Record<string, LucideIcon> = {
  education: GraduationCap,
  healthcare: HeartPulse,
  women: Users,
  children: Baby,
  environment: Leaf,
  youth: Rocket,
  farmers: Wheat,
};

/** The areas of work as icon tiles. Two across on a phone, up to four on a desktop. */
export default function FocusAreas() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {focusAreas.map((area) => {
        const Icon = icons[area.id] ?? Leaf;
        return (
          <li key={area.id} className="flex min-w-0 flex-col gap-3 border border-white/20 p-4">
            <span className="flex items-center gap-2">
              <Icon className="h-6 w-6 shrink-0 text-brand-gold" aria-hidden="true" />
              {area.growth && <span className="h-1 w-6 bg-brand-green" aria-hidden="true" />}
            </span>
            <span className="min-w-0">
              <span className="font-display-mr block text-[clamp(1.25rem,4vw,1.6rem)] leading-tight text-white">
                {area.labelMr}
              </span>
              <span className="mt-1 block text-base leading-snug text-white">{area.label}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
