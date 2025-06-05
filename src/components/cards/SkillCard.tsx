import tw from 'tailwind-styled-components';
import { SkillCategory, SkillLevel } from '../../data/content/skillData';


const Container = tw.div`
  w-full
  max-w-4xl
  mx-auto
  p-6
  bg-white
  rounded-lg
  shadow-md
`;

const CategoryTitle = tw.h2`
  text-2xl
  font-semibold
  mb-6
  border-b
  border-gray-300
  pb-2
`;

const SkillList = tw.div`
  flex
  flex-col
  gap-4
`;

const SkillRow = tw.div`
  flex
  items-center
  gap-4
`;

const SkillIcon = tw.img`
  w-10
  h-10
  rounded-md
  object-contain
`;

const SkillName = tw.span`
  flex-[1]
  font-medium
  text-gray-800
  capitalize
`;

const SkillBarContainer = tw.div`
  flex-[2]
  bg-gray-200
  rounded-full
  h-6
  overflow-hidden
`;

const SkillBarFill = tw.div<{ level: SkillLevel }>`
  h-full
  rounded-full
  transition-all
  duration-500
  ease-in-out
  ${p => 
    p.level === 'Beginner' 
      ? 'bg-red-400 w-1/3' 
      : p.level === 'Intermediate' 
        ? 'bg-yellow-400 w-2/3' 
        : 'bg-green-500 w-full'
  }
`;

const SkillLevelText = tw.span`
  ml-4
  w-24
  text-right
  font-semibold
  text-gray-700
  uppercase
`;

interface SkillCardProps {
  category: SkillCategory;
}

const ICON_URL =
  'https://raw.githubusercontent.com/AmraaCH/portfolio/c33da129596bae5fee072f03b2694619f33f6548/src/assets/icons/icon_';

function SkillCard({ category }: SkillCardProps) {
  return (
    <Container>
      <CategoryTitle>{category.category}</CategoryTitle>
      <SkillList>
        {category.skills.map((skill) => (
          <SkillRow key={skill.name}>
            <SkillIcon
              src={`${ICON_URL}${skill.name.toLowerCase()}.svg`}
              alt={`${skill.name} icon`}
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://via.placeholder.com/40?text=No+Icon';
              }}
            />
            <SkillName>{skill.name}</SkillName>
            <SkillBarContainer>
              <SkillBarFill level={skill.level} />
            </SkillBarContainer>
            <SkillLevelText>{skill.level}</SkillLevelText>
          </SkillRow>
        ))}
      </SkillList>
    </Container>
  );
}

export default SkillCard;
