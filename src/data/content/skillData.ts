export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type Skill = {
  name: string;
  level: SkillLevel;
  icon: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

const ICON_URL = 'https://raw.githubusercontent.com/AmraaCH/portfolio/c33da129596bae5fee072f03b2694619f33f6548/src/assets/icons/icon_';

export const skillData: SkillCategory[] = [
  {
    category: 'FrontEnd',
    skills: [
      { name: 'Flutter', level: 'Intermediate', icon: `${ICON_URL}flutter.svg` },
      { name: 'HTML', level: 'Advanced', icon: `${ICON_URL}html.svg` },
      { name: 'CSS', level: 'Advanced', icon: `${ICON_URL}css.svg` },
      { name: 'JavaScript', level: 'Intermediate', icon: `${ICON_URL}javascript.svg` },
      { name: 'React', level: 'Intermediate', icon: `${ICON_URL}react.svg` },
    ],
  },
  {
    category: 'BackEnd',
    skills: [
      { name: 'Python', level: 'Intermediate', icon: `${ICON_URL}python.svg` },
      { name: 'C++', level: 'Beginner', icon: `${ICON_URL}cpp.svg` },
      { name: 'Firebase', level: 'Intermediate', icon: `${ICON_URL}firebase.svg` },
      { name: 'SQL', level: 'Intermediate', icon: `${ICON_URL}sql.svg` },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 'Advanced', icon: `${ICON_URL}github.svg` },
      { name: 'Notion', level: 'Advanced', icon: `${ICON_URL}notion.svg` },
      { name: 'Discord', level: 'Intermediate', icon: `${ICON_URL}discord.svg` },
    ],
  },
];
