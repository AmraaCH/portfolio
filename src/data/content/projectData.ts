import { project1 } from './projecsDetailDatas/project1';
import { project2 } from './projecsDetailDatas/project2';


export const projectData = [
  {
    name: project1.name,
    type: 'team',
    title: project1.title,
    subject: 'A mobile app that supports nurses in integrated nursing care wards, allowing patients to send requests through a bedside tablet directly to nurses devices',
    tag: project1.tag,
  },
  {
    name: project2.name,
    type: 'single',
    title: project2.title,
    subject: 'A shift scheduling app designed to automate and simplify employee shift management, improving workflow efficiency and reducing manual errors.',
    tag: project2.tag,
    depoloyurl: project2.depoloyurl,
  },
];
