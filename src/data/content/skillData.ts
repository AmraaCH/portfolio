export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillData: SkillCategory[] = [
  {
    category: 'FrontEnd',
    skills: [
      { name: 'Flutter', level: 'Intermediate' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Intermediate' },
    ],
  },
  {
    category: 'BackEnd',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Beginner' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 'Advanced' },
      { name: 'Notion', level: 'Advanced' },
      { name: 'Discord', level: 'Intermediate' },
    ],
  },
];