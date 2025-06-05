import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import CloseBtn from '../../components/button/CloseBtn'; // 닫기 버튼 컴포넌트 경로 맞게 수정하세요
import SkillCard from '../../components/cards/SkillCard';
import { skillData } from '../../data/content/skillData';

const Container = tw.div`
  max-w-4xl
  mx-auto
  p-6
  mt-8
`;

const Header = tw.div`
  flex
  justify-end
`;

const Title = tw.h1`
  text-3xl
  font-bold
  mb-6
  text-center
`;

const SkillList = tw.div`
  flex
  flex-col
  gap-6
`;

const SkillDetail = () => {
  const navigate = useNavigate();

  // 닫기 버튼 클릭 시 이전 페이지로 이동 (또는 원하는 경로로)
  const handleClose = () => {
    navigate(-1); // 이전 페이지로
    // 또는 navigate('/') 등 특정 경로로 이동 가능
  };

  return (
    <Container>
      <Header>
        <CloseBtn closeModal={handleClose} />
      </Header>

      <Title>My Skills & Tools</Title>

      <SkillList>
        {skillData.map((category, idx) => (
          <SkillCard key={idx} category={category} />
        ))}
      </SkillList>
    </Container>
  );
};

export default SkillDetail;
