import { useState } from 'react';
import { EmploymentRecord } from '../employmentRecord';
import { Section } from '../section';

export const EmploymentHistory: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section headerText="Employment history">
      <EmploymentRecord
        companyName="Amazon Web Services"
        jobTitle="Front End Development Engineer"
        employmentRange={{
          start: Temporal.PlainDate.from('2018-12-17'),
        }}
      ></EmploymentRecord>

      <EmploymentRecord
        companyName="RPU Metrics"
        jobTitle="Senior Frontend Developer"
        employmentRange={{
          start: Temporal.PlainDate.from('2017-02-01'),
          end: Temporal.PlainDate.from('2018-12-01'),
        }}
      >
        <p>
          Focused on building and maintaining various landing pages built with
          React. Have to maintain some older legacy systems built in Angular.js,
          while we’re in the process of migrating.
        </p>
        <p>
          Also responsible for building and maintaining our internal GUI for
          managing content on the landing pages. These are built with React,
          Node, GraphQL, PostgreSQL, and some older pieces are using RethinkDB.
        </p>
      </EmploymentRecord>

      <EmploymentRecord
        companyName="Q Interactive"
        jobTitle="Lead UIE (User Interface Engineer)"
        employmentRange={{
          start: Temporal.PlainDate.from('2014-08-01'),
          end: Temporal.PlainDate.from('2017-02-01'),
        }}
      >
        <p>
          Same responsibilities as regular UIE's. See UIE (User Interface
          Engineer) for details.
        </p>
        <p>
          Manage the UIE team via assigning projects to members, and ensuring
          their completion. Technical resource for any questions related to
          HTML5, CSS3, and JavaScript.
        </p>
        <p>
          Upgraded entire survey path to use modern technologies and standards
          for easy maintainability and consistency.
        </p>
        <p>
          In charge of fixing any emergencies that may come up, or correcting
          any issues in UIE team's work.
        </p>
        <p>
          Trains current and new UIE's on how to use current system and
          technologies, as well as ensuring their knowledge of web technologies
          are up to date.
        </p>
      </EmploymentRecord>

      {!showMore && (
        <button
          className="print:hidden border-1 border-gray-300 bg-gray-100 cursor-pointer mx-auto px-5 py-1 mt-3 font-bold text-gray-500 rounded-sm"
          onClick={() => setShowMore(true)}
        >
          Show all
        </button>
      )}

      {showMore && (
        <>
          <EmploymentRecord
            companyName="Q Interactive"
            jobTitle="UIE (User Interface Engineer)"
            employmentRange={{
              start: Temporal.PlainDate.from('2014-01-01'),
              end: Temporal.PlainDate.from('2014-08-01'),
            }}
          >
            <p>
              Front-end web development and UI/UX design HTML5, CSS3 (Sass,
              Stylus, LESS) and JavaScript(jQuery, AngularJS). Some NodeJS.
            </p>
            <p>
              Rebuilt templates to use more modern technologies to improve build
              times and user friendliness, e.g SASS for more manageable CSS,
              merging JavaScript files down to reduce HTTP requests.
            </p>
            <p>
              Innovate with front end technologies to bypass environment
              limitations, e.g used HTML5 Local Storage to simulate storing data
              on server for more personalized experiences.
            </p>
          </EmploymentRecord>

          <EmploymentRecord
            companyName="Q Interactive"
            jobTitle="HTML Web Artist"
            employmentRange={{
              start: Temporal.PlainDate.from('2012-07-01'),
              end: Temporal.PlainDate.from('2014-01-01'),
            }}
          >
            <p>
              Edit and tweak site designs submitted by Graphic Designers, and
              then build them out.
            </p>
            <p>
              Updated the process of building Landing Pages to use responsive
              layouts, e.g CSS Grid layouts, mobile friendly forms.
            </p>
          </EmploymentRecord>

          <EmploymentRecord
            companyName="TrekAlert"
            jobTitle="Freelance - Web Developer"
            employmentRange={{
              start: Temporal.PlainDate.from('2012-03-01'),
              end: Temporal.PlainDate.from('2012-06-01'),
            }}
          >
            <p>
              Created fully fledged registration form, login form, and login
              cookies.
            </p>
            <p>
              Created trekking system for storing current times, dates, and
              estimated return time.
            </p>
            <p>
              Ability to update all existing information as well as add
              additional information.
            </p>
          </EmploymentRecord>
          <EmploymentRecord
            companyName="BCNPSA (Broward County Non-Public School Association)"
            jobTitle="Freelance - Web Developer"
            employmentRange={{
              start: Temporal.PlainDate.from('2012-03-01'),
              end: Temporal.PlainDate.from('2012-05-01'),
            }}
          >
            <p>
              Created simple website for client to upload content and keep all
              events current using Wordpress.
            </p>
          </EmploymentRecord>
        </>
      )}
    </Section>
  );
};
