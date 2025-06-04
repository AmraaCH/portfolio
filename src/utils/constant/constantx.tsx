import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";
import { EMAILL } from "./constant";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: EMAILL,
    tooltiptype: 'left',
    icon: <MailSentBtn name='Copy email' />
  },
  {
    id: 2,
    datatooltip: 'Go to Top',
    tooltiptype: 'left',
    icon: <GoTopBtn name='Go to Top' />
  }
]