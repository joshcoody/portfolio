import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components';
import { Section } from '@/components/section';
import { EmploymentHistory } from '@/components/employmentHistory';
import { Skill } from '@/components/skill';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <SiteHeader />
      <div className="sm:grid grid-cols-10">
        <div className="about-me col-span-8">
          <Section headerText="Summary">
            <p className="text-justify">
              Focused on building user friendly websites that are optimized for
              the mobile first world we live in. Always following the latest
              trends in the ever changing world of JavaScript, and actively
              trying to improve myself to better the products I put out.
            </p>
          </Section>
          <EmploymentHistory />
        </div>
        <aside className="col-span-2">
          <Section headerText="Skills">
            <Skill name="ReactJS" proficiency={100} />
            <Skill name="JavaScript" proficiency={100} />
            <Skill name="HTML" proficiency={100} />
            <Skill name="CSS / SCSS" proficiency={100} />
            <Skill name="Tailwind CSS" proficiency={40} />
            <Skill name="Vite" proficiency={75} />
            <Skill name="Vitest" proficiency={82} />
            <Skill name="Jest" proficiency={90} />
            <Skill name="webpack" proficiency={80} />
            <Skill name="Git" proficiency={98} />
            <Skill name="Node.js" proficiency={82} />
            <Skill name="PostgreSQL" proficiency={62} />
            <Skill name="Playwright" proficiency={80} />
            <Skill name="Storybook" proficiency={77} />
            <Skill name="Swift" proficiency={20} />
          </Section>
        </aside>
      </div>
    </div>
  );
}
