/* eslint-disable global-require */
// @flow

const emailTo = 'gurukalamjoyoflearning@gmail.com';
/* --------- Image paths *-----------*/
const imagesPath = {
  infraStructure: require('../src/assets/prog.png'),
  banner: require('../src/assets/banner.png'),
  homeOne: require('../src/assets/homeone.jpeg'),
  homeTwo: require('../src/assets/home2.jpeg'),
  homeThree: require('../src/assets/home3.jpeg'),
};

/* --------- data for GALLERY tab *-----------*/
const galleryPhotos = {
  gallery1: require('../src/assets/gallery/galleryone.jpeg'),
  gallery2: require('../src/assets/gallery/gallerytwo.jpeg'),
  gallery3: require('../src/assets/gallery/gallerythree.jpeg'),
  gallery4: require('../src/assets/gallery/galleryfour.jpeg'),
  gallery5: require('../src/assets/gallery/gallery15.jpeg'),

  gallery6: require('../src/assets/gallery/galleryfive.jpeg'),
  gallery7: require('../src/assets/gallery/gallerysix.jpeg'),
  gallery8: require('../src/assets/gallery/galleryseven.jpeg'),
  gallery9: require('../src/assets/gallery/galleryeight.jpeg'),
  gallery10: require('../src/assets/gallery/gallerynine.jpeg'),

  gallery11: require('../src/assets/gallery/galleryten.jpeg'),
  gallery12: require('../src/assets/gallery/gallery11.jpeg'),
  gallery13: require('../src/assets/gallery/gallery12.jpeg'),
  gallery14: require('../src/assets/gallery/gallery13.jpeg'),
  gallery15: require('../src/assets/gallery/gallery14.jpeg'),

  gallery16: require('../src/assets/gallery/gallery16.jpeg'),
  gallery17: require('../src/assets/gallery/gallery17.jpeg'),
};
const gallery = Object.values(galleryPhotos);
/* --------- data for program tab *-----------*/
const programs = [
  {
    title: 'Play Group',
    age: '02 to 2.5 years',
    eventDetails:
      'The program enables the relationship between child and the caretaker through various activities which will help toddlers to interact with their peers and get along in a pre- school setup.',
  },
  {
    title: 'Nursery',
    age: '2.5 to 3.5 years',
    eventDetails:
      'The program will provide the kids to have an early exposure with regards to school readiness activities. These include reading, writing, colouring, number identification, colour identification etc.,',
  },
  {
    title: 'Junior KG',
    age: '3.5 to 4.5 years',
    eventDetails:
      'The program familiarises children with necessary skills and concepts such as the alphabet, numbers and social skills. Special emphasis is laid on basic math and science since they play a vital role in strengthening and understanding the basics on numbers and the environment.',
  },
  {
    title: 'Senior KG',
    age: '4.5 to 5.5 years',
    eventDetails:
      'The program is designed to help children make use of their skills to understand and implement complex concepts. Also for senior kindergarten categories, we equip and train our young minds for a lifetime adventure in getting to know new and interesting things and get imbibed into the overall process of experiential learning.',
  },
];

const infraStructure = 'Our infrastructure is designed to cater our children to have the opportunity to learn through playing. The school building itself acts as a learning aid. The architecture is such that it attracts children towards the school, promotes activities and increases peer-learning experience by turning the whole campus into a fun-filled environment for the tiny tots.';

const infraStructure1 = 'CLASSROOMS ARE WELL EQUIPPED WITH CHILD FRIENDLY TOYS';
const infraStructure2 = 'INDOOR PLAY AREA WITH BALL POOL AND SAND PIT';
const infraStructure3 = 'CREATIVELY DESIGNED TEACHING AIDS';
const infraStructure4 = 'WELL VENTILATED, SPACIOUS AND SMART CLASSROOMS';
const infraStructures = [infraStructure1,
  infraStructure2,
  infraStructure3,
  infraStructure4];

/* --------- data for home tab *-----------*/
const whyGuru = 'WHY GURUKALAM?';
const whyGuruDesc = `We are much more than a play school. We provide early learning intervention curated for providing individual attention to young children. \n
We believe that every child is uniquely gifted and does posses an innate desire to excel and be passionate with something they are fond off. Our uniquely designed intervention highly values freedom, responsibility, curiosity, thinking out-of-the-box, motivation, concentration, persistence, respect for all , discipline, structure without limitations and actively contributing to the society.`;
const whyPlaySchool = 'WHY PLAY SCHOOL?';
const whyPlaySchoolDesc = 'Playing allows children to use their creativity while developing their imagination, dexterity, physical, cognitive and emotional strength. Playing is inherently connected to healthy brain development.';
const extraCur = 'EXCITING EXTRACURRICULARS!';
const extraCurDesc = ['- Block Building, basics of design and construction',
  '- Role Play',
  '- Art',
  '- Writing',
  '- Mathematics and Science',
  '- Reading and Listening',
  '- Musics',
  '- Sensory Play'];

const contactData = [
  {
    t: 'GURUKALAM',
    isClickable: false,
  },
  {
    t: '#AnuNivas, No:13 Lakshmipuram, 89 Veppampattu',
    isClickable: false,
  },
  {
    t: 'Landmark: Near Sundara Babu Nagar Football Ground',
    isClickable: false,
  },
  {
    t: '9035010974',
    isClickable: true,
  },
  {
    t: '9698810974',
    isClickable: true,
  },
  {
    t: emailTo,
    isClickable: true,
  },
];

const whys = [{
  title: whyGuru,
  desc: whyGuruDesc,
  image: imagesPath.homeTwo,
}, {
  title: whyPlaySchool,
  desc: whyPlaySchoolDesc,
  image: imagesPath.homeThree,
}];
export {
  programs,
  infraStructure,
  infraStructures,
  imagesPath,
  whys,
  extraCur,
  extraCurDesc,
  gallery,
  contactData,
  emailTo,
};
