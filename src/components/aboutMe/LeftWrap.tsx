import tw from "tailwind-styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // 추가
import myImgIm from '../../assets/images/avatar_im.webp';
import myImgImOn from '../../assets/images/avatar_im2.webp';
import TagText from "../atoms/tag/TagTxt";
import { aboutMetags } from "../../data/content/aboutmeData";
import SkillBtn from "../button/SkillBtn";
// import { skillData } from "../../data/content/skillData"; // 더 이상 여기서 필요 없을 수 있음
// import SkillCard from "../cards/SkillCard"; // 마찬가지

const LeftContainer = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-2
`;

const Img = tw.img`
  max-md:w-[60vw]
`;

const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
`;

const TagTxtWrap = tw.div`
  flex
  gap-1
`;

const LeftWrap = () => {
  const [isImgChange, setIsImgChange] = useState(false);
  // const [showSkillCard, setShowSkillCard] = useState(false); // 더이상 필요없음

  const navigate = useNavigate();

  const handleImgChange = () => {
    setIsImgChange(prev => !prev);
  };

  const goToSkillPage = () => {
    navigate('/skill');  // /skill 페이지로 이동
  };

  return (
    <LeftContainer>
      <FlexBox>
        <Img src={isImgChange ? myImgImOn : myImgIm} loading='lazy' alt="Emoji image" />
        <TagTxtWrap>
          {aboutMetags.map((tag, idx) => (
            <TagText key={idx} tag={tag.name} />
          ))}
        </TagTxtWrap>
      </FlexBox>

      {/* 버튼 클릭 시 스킬 페이지로 이동 */}
      <SkillBtn handelImgChange={handleImgChange} onClick={goToSkillPage}>
        Skill & Tools
      </SkillBtn>

      {/* 이전 방식대로 아래에 펼치기 하지 않음 */}
    </LeftContainer>
  );
};

export default LeftWrap;
