export const project1 = {
  name: 'Dowajo (Hospital Nurse Assistant System)',
  pointcolor: 'before:bg-[#7c29a7]',
  title: 'Dowajo (Hospital Nurse Assistant System)',
  subtext:
    'A capstone design project aimed at improving nurse efficiency and patient safety in hospitals using the integrated nursing care service. Patients can make specific requests via a bedside touchscreen tablet, and nurses receive these requests in real-time through a mobile app. The system helps nurses distinguish between urgent and non-urgent calls, reducing unnecessary movement and improving responsiveness.',
  data: 'Sep 2023 ~ June 2024',
  team: 'Contribution: 30%',
  members: '6 members',
  tag: ['Capstone', 'Healthcare', 'Mobile App', 'IoT'],

  tools: [
    {
      title: 'Flutter',
      detail: 'Used to build the mobile application for nurses with real-time request alerts and patient information.',
    },
    {
      title: 'Raspberry Pi',
      detail: 'Implemented as the hardware platform for the patient-facing touchscreen interface.',
    },
    {
      title: 'Firebase',
      detail: 'Utilized as a cloud-based real-time database to sync patient requests and nurse responses.',
    },
  ],

  featinfo: [],
  detailimginfo: [
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1.png',
      caption: 'Home screen, Sign-up page, ID duplication check during sign-up',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(1).png',
      caption: ' Login page, Login success notification appears upon successful login, Failure notification appears upon unsuccessful login attempt ',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(2).png',
      caption: 'Patient lookup page, alert message shown when patient ID is incorrect, patient information page appears on success.',
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(3).png',
      caption: 'Patient-specific page showing patient information, with menus on the left for injections, medication administration, macro settings (patient pad), and notification overview.',
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(4).png',
      caption: 'Medication notification add feature screen. Users input medication photo, day of the week, and time to take it. An alert message appears if any information is missing.',
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(5).png',
      caption: 'Medication screen, medications are categorized by morning, lunch, and dinner. Clicking on a medication brings up options to edit, delete, or close.',
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(6).png',
      caption: 'Notification receiving screen',
        
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(7).png',
      caption: 'Record tab screen, when marked as taken, the medication is removed from the remaining schedule.',
      
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(8).png',
      caption: 'Injection page, injection addition page.',
      
    },
        {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project1(9).png',
      caption: 'The medication alert feature is very similar. The difference is that there is a timer function when administering IV fluids.',
      
    },

  ],

  parts: [
    {
      title: 'Project Background',
      detailList: [
        'Hospitals using integrated nursing care services have a high nurse-to-patient ratio, and no caregivers to assist with daily patient needs.',
        'There was a lack of distinction between emergency and general requests, leading to delayed response and safety issues.',
        'Our solution helps streamline communication and task delegation between patients and nurses using digital interfaces.',
      ],
    },
    {
      title: 'Touchscreen Interface for Patients',
      detailList: [
        'Patients can use a simple touchscreen to request items like water, blankets, or call for medical attention.',
        'Request options are pre-configured but also allow custom inputs for more detailed communication.',
      ],
    },
    {
      title: 'Real-Time Mobile App for Nurses',
      detailList: [
        'Nurses receive real-time alerts when a patient makes a request.',
        'Notifications allow nurses to judge urgency without visiting the room first, saving time and effort.',
        'Includes features like medication alerts, patient data (name, condition, photo), and task history.',
      ],
    },
    {
      title: 'Improved Workflow and Safety',
      detailList: [
        'The system significantly reduces unnecessary back-and-forth movements.',
        'Improves overall response time for both routine and urgent needs.',
        'Enables better tracking and sharing of patient status among nursing staff.',
      ],
    },
    {
      title: 'Team Structure',
      detailList: [
        'Led by Suhwan Ma (team leader), hardware was developed by Suhwan Ma and Seunghyun Kang.',
        'Mobile app development was handled by Jungmin Kim, Minseok Yang, Amarjargal (me), and Doyun Hwang.',
        'The team consisted entirely of Computer Science majors.',
      ],
    },
  ],
};
