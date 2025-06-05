export const project2 = {
  name: 'shift-scheduler',
  pointcolor: 'before:bg-[#a8d5ba]',
  title: 'Shift Scheduler Web App',
  subtext:
    'A web-based scheduling tool tailored for Oyu Tolgoi\'s employee shift management. The app automatically generates monthly work schedules based on uploaded Excel files. It considers factors such as employee availability, paid leave, and fairness in shift distribution.',
  data: '2025 - 6 month',
  team: 'Solo project',
  tag: ['automation', 'Streamlit', 'Python', 'Excel'],
  depoloyurl: '', // Add if deployed online
  tools: [
    {
      title: 'Python',
      detail: 'Used to build the logic for shift distribution, data validation, and Excel export.',
    },
    {
      title: 'Pandas',
      detail: 'Utilized for data manipulation, including parsing employee info and generating structured schedules.',
    },
    {
      title: 'Streamlit',
      detail: 'Enabled quick deployment of a modern and user-friendly web UI for file upload, settings, and downloads.',
    },
    {
      title: 'Excel',
      detail: 'The final schedule is exported as an Excel file for practical use in the workplace.',
    },
  ],
  featinfo: [],
  detailimginfo: [
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project2.png',
      caption:
        '① Home screen — users can drag and drop an Excel file containing employee shift data.',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project2(1).png',
      caption:
        '② After file upload — if successful, a confirmation message appears. If not, an error is shown. Then, the user selects year/month and clicks "Generate Shift Schedule".',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/AmraaCH/portfolio/main/src/assets/images/project2(2).png',
      caption:
        '③ Generated Schedule — the monthly shift schedule is displayed in Excel format. Users can click "Download Excel File" to save it.',
    },
  ],
  parts: [
    {
      title: 'Automated shift scheduling based on Excel input',
      detailList: [
        'Developed a script that reads employee data from an Excel file and creates a fair shift schedule.',
        'Supports monthly shift planning for small to medium teams.',
      ],
    },
    {
      title: 'Modern and intuitive UI using Streamlit',
      detailList: [
        'Created a clean UI that allows users to upload files and download the final schedule without dealing with code.',
        'UI is entirely in English to support global teams.',
      ],
    },
    {
      title: 'Fair and balanced shift algorithm',
      detailList: [
        'Ensures fair rotation among employees, avoiding overworking and respecting leave policies.',
        'Flexible to add constraints like days off and special shift rules (e.g. holidays).',
      ],
    },
    {
      title: 'No local file output – cloud download only',
      detailList: [
        'Modified the app to avoid saving files on the server. Users can directly download the Excel schedule from the browser.',
      ],
    },
    {
      title: 'Expandable for future features',
      detailList: [
        'Designed the app structure so it can be expanded to include night shifts, multiple departments, or REST API integration in the future.',
      ],
    },
  ],
};
