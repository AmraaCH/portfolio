import tw from 'tailwind-styled-components';
import ThumbnailImg from '../atoms/thumbnail/ThumbnailImg';
import { ProjectDataT } from '../../types/type';
import TagText from '../atoms/tag/TagTxt';
import useModal from '../../hooks/useModal';

type ProjectDataProps = {
  imgurl?: string;
}

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  justify-start
  gap-8
  rounded
  bg-lightGray
  relative
  h-[25rem]
  group
  transition-all
  
  hover:shadow-black
  hover:shadow-2xl
  hover:translate-y-[-5px]
`;

export const CardThumbnail = tw.div`
  overflow-hidden
  w-full
  h-[45%]
`;

export const TxtWrap = tw.div<ProjectDataProps>`
  px-5
  flex
  flex-col
  justify-start
  gap-3
  text-white
  ${(props) => !props.imgurl && 'mt-10'}
`;

export const Tit = tw.h4`
  font-bold
  text-2xl
  group-hover:text-center
`;

export const Txt = tw.p`
  text-base
  text-[#A6A6A6]
`;

export const Tags = tw.div`
  absolute
  bottom-0
  p-5
  flex
  gap-1
`;

export const HoverBox = tw.div`
  absolute
  z-[3]
  flex
  flex-col
  items-center
  justify-center
  gap-10
  text-white
  w-full
  h-full
  p-5
  bg-[#323232]
  opacity-0
  transition

  group-hover:opacity-100
`;

export const BtnBox = tw.div`
  w-2/3
  flex
  flex-col
  gap-3
`;

export const Button = tw.button`
  p-3
  border-[1px]
  border-solid
  border-white
  text-white
  rounded
  transition
  
  hover:bg-white
  hover:text-mainBlack
`;

function ProjectCard({ title, subject, tag, imgurl, name, giturl, depoloyurl }: ProjectDataT) {
  const { openModal } = useModal();

  return (
    <CardContainer>
      <HoverBox>
        <Tit>{title}</Tit>
        <BtnBox>
          <Button onClick={() => openModal(name)}>Details</Button>
          {giturl &&
            <Button onClick={() => window.open(giturl)}>Go to Github</Button>
          }
          {depoloyurl &&
            <Button onClick={() => window.open(depoloyurl)}>Go to Site</Button>
          }
        </BtnBox>
      </HoverBox>

      {imgurl && (
        <CardThumbnail>
          <ThumbnailImg url={imgurl} />
        </CardThumbnail>
      )}

      <TxtWrap imgurl={imgurl}>
        <Tit>{title}</Tit>
        <Txt>{subject}</Txt>
      </TxtWrap>
      <Tags>
        {tag.map((tag, idx) => (
          <TagText key={idx} tag={tag} />
        ))}
      </Tags>
    </CardContainer>
  );
}

export default ProjectCard;