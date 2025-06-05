import { Route, Routes } from 'react-router-dom';
import Main from './pages/content/main/Main';
import AboutMe from './pages/content/aboutMe/AboutMe';
import Contents from './pages/content/Contents';
import Finish from './pages/content/finish/Finish';
import ProjectDetail from './pages/detail/ProjectDetail';
import SkillDetail from './pages/detail/SkillDetail';
import QuickBtns from './components/quickBtns/QuickBtns';
import ScrollToTop from './hooks/useScrolllToTop';
export default function App() {
  return (
    <>
    <ScrollToTop />
      <QuickBtns />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <AboutMe />
            <Contents />
            <Finish />
          </>
        } />
        <Route path="/skill" element={<SkillDetail />} />
        <Route path="/:name" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
