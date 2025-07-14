import type { SectionProps } from './types';

export const Section: React.FC<SectionProps> = ({ headerText, actions, children }) => {
  const headerTextElement = <h2 className="text-xl font-bold">{headerText}</h2>;
  return (
  <section className="flex flex-col px-3 my-5">
    {actions ? <div className="header-wrapper">{headerTextElement} <div className="actions">{actions}</div> </div> : headerTextElement}
    {children}
  </section>
)};
