import type { SkillProps } from './types';

export const Skill: React.FC<SkillProps> = ({ name, proficiency = 0 }) => {
  return (
    <div data-testid="skill" className="mb-2">
      <span
        data-testid="skill-name"
        className="font-bold text-sm text-gray-600"
      >
        {name}
      </span>
      <div
        data-testid="proficiency-bar"
        className="relative bg-slate-300 w-full h-1 mt-1"
      >
        <div
          data-testid="proficiency"
          className="absolute top-0 left-0 bg-blue-400 h-1"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};
