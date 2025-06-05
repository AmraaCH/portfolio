import { useState } from 'react';
import tw from 'tailwind-styled-components';
import IcSkill from '../../assets/icons/IcSkill';

export const SkillButton = tw.button`
  relative
  flex  
  items-center
  justify-between
  gap-12
  bg-mainGray
  rounded-full
  py-3
  px-5
  shadow-lg
  transition-all

  after:absolute
  after:left-[50%]
  after:top-[50%]
  after:translate-y-[-50%]
  after:translate-x-[-50%]
  after:rounded-full
  after:w-full
  after:h-full
  after:bg-white
  after:opacity-0
  after:z-[0]
  after:transition-all

  hover:after:opacity-40
  hover:after:scale-y-[1.22]
  hover:after:scale-x-[1.06]
`;

interface BtnTxtProps {
  $active?: boolean;
}

export const BtnTxt = tw.span<BtnTxtProps>`
  relative
  z-[2]
  font-bold
  text-sm
  ${({ $active }) => ($active ? 'text-blue-600' : 'text-mainBlack')}
`;

export const ArrowWrap = tw.span`
  relative
  z-[2]
  rotate-90
`;

interface SkillBtnProps {
  children: React.ReactNode;
  handelImgChange?: () => void;
  onClick?: () => void;
}

function SkillBtn({ children, handelImgChange, onClick }: SkillBtnProps) {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(prev => !prev);
    if (onClick) onClick();
  };

  return (
    <SkillButton
      onMouseEnter={handelImgChange}
      onMouseLeave={handelImgChange}
      onClick={toggleSkills}
    >
      <BtnTxt $active={showSkills}>{children}</BtnTxt>
      <ArrowWrap>
        <IcSkill width="20" height="20" />
      </ArrowWrap>
    </SkillButton>
  );
}

export default SkillBtn;
