import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { overlayActions } from "../store/overlay-slice";

const useModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let scrollY = 0;

  const openScroll = () => {
    document.body.style.removeProperty('overflow');
     window.scrollTo(0, scrollY); 
  };

  const lockScroll = () => {
    scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    openScroll();
  navigate('/', { replace: true });
  };

  const openModal = (name: string) => {
    dispatch(overlayActions.targetName(name));
    navigate(`/${name}`);
    lockScroll();
  };

  return { closeModal, openModal }

};

export default useModal;