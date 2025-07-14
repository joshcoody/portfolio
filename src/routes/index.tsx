import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components';
import { Section } from '@/components/section';
import { EmploymentHistory } from '@/components/employmentHistory';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="App max-w-3xl mx-auto">
      <SiteHeader />

      <Section headerText="Summary">
        <p className='text-justify'>
          Focused on building user friendly websites that are optimized for the
          mobile first world we live in. Always following the latest trends in
          the ever changing world of JavaScript, and actively trying to improve
          myself to better the products I put out.
        </p>
      </Section>

      <EmploymentHistory />
    </div>
  );
}
