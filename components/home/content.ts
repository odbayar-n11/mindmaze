import { pick, type Lang } from '@/lib/lang';

type Person = { ini: string; name: string; role: string; img?: string; poster?: boolean };
type Photo = { img: string; w: string; alt: string };

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/** Text and data of the homepage, in English and Mongolian. */
export function homeContent(lang: Lang) {
  const L = pick(lang);

  const t = {
    part: L('Part.', 'Хэсэг'),
    heroWord: L('mindmaze', 'Өв соёл'),
    heroPlace: L('Mongolia', 'Монгол'),
    heroA: L('Mongolian heritage,', 'Монгол өв соёл,'),
    heroB: L('one puzzle at a time.', 'оньсого бүрээр.'),
    heroSub: L('Traditional wooden puzzles that train focus and critical thinking — brought back into today’s classrooms.', 'Анхаарал төвлөрөл, сэтгэн бодох чадварыг хөгжүүлдэг уламжлалт модон тоглоомуудыг өнөөгийн ангид эргүүлэн авчирч байна.'),
    btnPrograms: L('Our programs', 'Хөтөлбөрүүд'),
    btnContact: L('Contact →', 'Холбоо барих →'),
    readMore: L('Read more', 'Дэлгэрэнгүй'),
    whyEyebrow: L('WHAT WE SERVE', 'БИДНИЙ ҮЙЛЧИЛДЭГ ЗҮЙЛ'),
    whyA: L('MindMaze was founded to ignite curiosity, sharpen focus, and restore the joy of ', 'MindMaze нь хүүхдийн сониуч занг сэрээж, анхаарлыг нь хурцалж, '),
    whyHi: L('hands-on play', 'гараараа тоглох баяр баясгаланг'),
    whyB: L('. We bring educational value to young minds through cultural games that are slowly being forgotten.', ' сэргээх зорилгоор байгуулагдсан. Бид мартагдаж буй соёлын тоглоомуудаар дамжуулан бяцхан хүүхдүүдэд боловсролын үнэ цэнийг хүргэдэг.'),
    impactTitle: L('Impact', 'Үр нөлөө'),
    cardEyebrow: L('Mini projects by local students', 'Орон нутгийн сурагчдын төслүүд'),
    openProject: L('Open project ↗', 'Төслийг нээх ↗'),
    cardHint: L('Click the province to open the project ↗', 'Төслийг нээхийн тулд аймаг дээр дарна уу ↗'),
    programsEyebrow: L('Our programs', 'Хөтөлбөрүүд'),
    programsLead: L('We bring traditional puzzles into school classrooms — and we are growing aimag by aimag.', 'Бид уламжлалт оньсон тоглоомыг сургуулийн ангид авчирч, аймаг аймгаар тэлж байна.'),
    teamTitle: L('Meet the team', 'Манай хамт олон'),
    membersLabel: L('Our team', 'Манай баг'),
    teamLead: L('', 'Манай хамт олонтой танилцаарай.'),
    progA: L('Our', 'Бидний'),
    progB: L('approach', 'арга барил'),
    progLead: L('From educating young children to bridging the educational gap for teenagers, MindMaze serves every age through coding lessons and the freedom to build your own games and ideas. The goal stays the same: spark curiosity, unravel inspiration, and share the true merit of learning.', 'Бага насны хүүхдүүдийг сургахаас эхлээд өсвөр насныхны боловсролын зөрүүг нөхөх хүртэл MindMaze кодлолын хичээл болон өөрийн тоглоом, санаагаа бүтээх эрх чөлөөгөөр дамжуулан бүх насныханд үйлчилдэг. Зорилго маань хэвээрээ: сониуч занг асааж, урам зоригийг нээж, суралцахын жинхэнэ үнэ цэнийг хуваалцах.'),
    involvedEyebrow: L('Get involved', 'Нэгдээрэй'),
    involvedA: L('Bring MindMaze', 'MindMaze-г'),
    involvedB: L('to you', 'танд хүргэе'),
    involvedLead: L('We work with schools across Mongolia, student volunteers and organisations who care about how children learn.', 'Бид Монгол даяарх сургууль, сайн дурын оюутнууд болон хүүхдийн суралцахуйд анхаардаг байгууллагуудтай хамтран ажилладаг.'),
    contactTitle: L('Contact', 'Холбоо барих'),
    contactLead: L('Have a question, want to bring MindMaze to your school, or support our work? Write to us — we would love to hear from you.', 'Асуулт байна уу? MindMaze-г сургуульдаа авчрах эсвэл бидний ажлыг дэмжихийг хүсвэл бидэнд бичээрэй.'),
    email: L('Email', 'Имэйл'),
    phone: L('Phone', 'Утас'),
    name: L('Name', 'Нэр'),
    message: L('Message', 'Зурвас'),
    send: L('Send message', 'Илгээх'),
    footer: L('Mongolian heritage, one puzzle at a time.', 'hehehhe')
  };

  // one link per section on this page, named like its heading
  const nav = [
    { href: '#top', label: L('Home', 'Нүүр') },
    { href: '#why', label: L('about', 'Бидний үйлчилдэг зүйл') },
    { href: '#our-programs', label: L('approach', 'Хоёр арга') },
    { href: '#impact', label: L('Impact', 'Үр нөлөө') },
    { href: '#team', label: L('Team', 'Хамт олон') },
    { href: '#involved', label: L('Get involved', 'Нэгдээрэй') },
    { href: '#contact', label: L('Contact', 'Холбоо барих') }
  ];
  const vOnce = [
    { img: '/media/6d7b07d19d89ac27c85255c91e38ceb0.jpg', alt: 'Students cup a wooden burr puzzle together in their hands' },
    { img: '/media/57b48f4bb694a7bae51bcc3e2aca0795.jpg', alt: 'A boy assembles a wooden puzzle at his desk' },
    { img: '/media/63e8a5d759c8af8dc32625f94043c96e.jpg', alt: 'Two boys work a wooden cross puzzle together' },
    { img: '/media/ae4e4fb8fe980c71504ad4555a4d2036.jpg', alt: 'Students fit the pieces of a wooden puzzle together' },
    { img: '/media/4504b7a14aa019336758573bdc1f5094.jpg', alt: 'A mentor shows two students a round wooden puzzle' },
    { img: '/media/58082a3be1c62e50173fb9eda497d3a6.jpg', alt: 'Two students hold a wooden star puzzle in their hands' },
    { img: '/media/fe472fef0eaa23f0e710f3d7579204ae.jpg', alt: 'A student writes code at an iMac' },
    { img: '/media/a79e3eda1dc04abf37481273e852a77d.jpg', alt: 'A student codes at an iMac in a computer lab' }
  ];
  const vPhotos = vOnce.concat(vOnce);
  const stats = [
    { num: '5', label: L('Aimags', 'Аймаг'), sq: '#E2574C' },
    { num: '12', label: L('Schools', 'Сургууль'), sq: '#F3EFE6' },
    { num: '840+', label: L('Children reached', 'Хүүхэд'), sq: '#E2574C' }
  ];
  const programs = [
    { n: '01', title: L('Classroom puzzle sessions', 'Ангийн оньсогын хичээл'), status: L('Ongoing', 'Хэрэгжиж буй'), badgeBg: '#1A1A1A', badgeFg: '#FBF8F1', text: L('5 aimags · 12 schools · 5000+ children solving traditional puzzles together in class.', '5 аймаг · 12 сургууль · 5000+ хүүхэд ангидаа уламжлалт оньсого хамтдаа тайлж байна.'), hasSchools: false, schools: [] as string[] },
    { n: '02', title: L('Our partner schools', 'Дараагийн хамтрагч сургуулиуд'), status: L('Coming soon', 'Тун удахгүй'), badgeBg: '#8B0F0F', badgeFg: '#FFFFFF', text: L('MindMaze puzzle sessions are coming to five more schools in Ulaanbaatar, Uvurkhangai and Erdenet.', 'MindMaze-ийн оньсогын хичээл Улаанбаатар, Өвөрхангай, Эрдэнэт дэх таван сургуульд удахгүй хүрнэ.'), hasSchools: true, schools: [
      L('21st Secondary School, Ulaanbaatar', 'Улаанбаатар хотын 21-р дунд сургууль'),
      L('24th School, Ulaanbaatar', 'Улаанбаатар хотын 24-р сургууль'),
      L('1st School, Uvurkhangai', 'Өвөрхангай аймгийн 1-р сургууль'),
      L('2nd School, Uvurkhangai', 'Өвөрхангай аймгийн 2-р сургууль'),
      L('1st School, Erdenet', 'Эрдэнэт хотын 1-р сургууль')
    ] }
  ];
  // Marquee photos: new 1800px classroom shots + AI-upscaled Figma photos. w = width at 340px height.
  const photos: Photo[] = [
    { img: '/media/6d6535198893d3984dd633bcccbe2994.jpg', w: '453px', alt: 'A boy holds up the wooden puzzle he solved' },
    { img: '/media/705f964d52d3c5a0760ad62c17a3267f.jpg', w: '233px', alt: 'A volunteer shows a smiling girl how to assemble burr pieces' },
    { img: '/media/a0d362b47bb52fabdb96905c3a4ba3a7.jpg', w: '255px', alt: 'Girls lean in together over a small wooden puzzle' },
    { img: '/media/8d4a40df32b25c9c4d6409476af54708.jpg', w: '453px', alt: 'A mentor works through a puzzle with two students' },
    { img: '/media/9a904884f81334bbfd76cc9c89e5635f.jpg', w: '509px', alt: 'A teacher demonstrates a string puzzle to a crowd of students' },
    { img: '/media/381eb04b0622409559863dbdac1e6c2c.jpg', w: '255px', alt: 'Two girls pose with their puzzles in front of class artwork' },
    { img: '/media/91730b2f237ced1326202138e691816c.jpg', w: '453px', alt: 'A full classroom working on puzzles at their desks' },
    { img: '/media/079b6f2d3e5cd41fbe6c1484b8401601.jpg', w: '297px', alt: 'A student and mentor comparing puzzle pieces' },
    { img: '/media/85c3fd420c1caa3b45516b47e39cd448.jpg', w: '453px', alt: 'Students and a volunteer show off their solved puzzles' },
    { img: '/media/2ebafec98b326fe2d4a40f3d9d1adc3d.jpg', w: '453px', alt: 'A girl concentrates on a wooden puzzle at her desk' },
    { img: '/media/bda9831b91fe76d1344edb5a53506107.jpg', w: '526px', alt: 'A girl works a puzzle with a teacher' },
    { img: '/media/ce6530da0884e38bbc26bdab65702082.jpg', w: '255px', alt: 'Three girls solve a puzzle together by the window' },
    { img: '/media/17c1762258e831ff2738fa0e93e67dbf.jpg', w: '453px', alt: 'A classroom during a MindMaze puzzle session' },
    { img: '/media/46a8840470e3be9b8717dd0acb6c07b5.jpg', w: '297px', alt: 'A mentor guiding a student through a puzzle' },
    { img: '/media/6027490db2b03f5cb61fdbb780c304fd.jpg', w: '453px', alt: 'Students and mentors gathered around desks with puzzles' },
    { img: '/media/35c88ac9157b419451e821c9aaeeab6f.jpg', w: '526px', alt: 'Students with puzzles on their desks under a painted space mural' },
    { img: '/media/722120e1f8548aaf91d088f993c5d4bb.jpg', w: '453px', alt: 'A boy shows his puzzle to the camera' },
    { img: '/media/f129ae99795099ee17def44faf8b0be2.jpg', w: '297px', alt: 'Children untangling a bone and string puzzle' },
    { img: '/media/676eafd65dc82ec1c4c4bdb23216aecc.jpg', w: '453px', alt: 'A bright classroom of students solving puzzles' },
    { img: '/media/ff719adf90f9d93ebc2158b853568787.jpg', w: '526px', alt: 'A full classroom raising hands during a session' },
    { img: '/media/1580bff8fbba99918bde3d5b236ec983.jpg', w: '453px', alt: 'Students at their desks working on puzzles' }
  ];
  const at300 = (p: Photo): Photo => ({ ...p, w: Math.round((parseInt(p.w, 10) * 300) / 340) + 'px' });
  const success = photos.concat(photos).map(at300);
  const progCards = [
    { sq: '#072039', img: '/media/9fc8ee90d5070beb45d32114201ee56a.jpg', alt: 'A hand holds up a bone-and-string puzzle in front of a painted space mural', href: '/puzzles', label: L('Puzzle', 'Оньсого'), title: L('Traditional puzzle lessons', 'Уламжлалт оньсогын хичээл'), text: L('Hands-on sessions with interlocking wood, string-and-ring puzzles and puzzle locks. Students slow down, test ideas and finish what they start.', 'Модон түгжээ, утас цагирагтай оньсого, оньсон цоожоор гар ажиллагаатай хичээл. Сурагчид тайван бодож, санаагаа туршиж, эхэлснээ дуусгаж сурдаг.') },
    { sq: '#8B0F0F', img: '/media/384de71f7e5afc649c9f73176bb7c061.jpg', alt: 'A student writes code at an iMac in front of a wood-panelled wall', href: '/coding', label: L('Coding', 'Кодлол'), title: L('Coding classes', 'Кодлолын хичээл'), text: L('For kids who already live online, we turn screen time into making time: break a problem down, try, debug, repeat.', 'Онлайн орчинд өсөж буй хүүхдүүдэд дэлгэцийн цагийг бүтээх цаг болгоно: асуудлыг задлах, туршиж үзэх, алдаагаа засах, давтах.') }
  ];
  const involve = [
    { title: L('Schools', 'Сургуулиуд'), text: L('Host a workshop or adapt puzzle lessons into your curriculum.', 'Сургалт зохион байгуулах эсвэл оньсогын хичээлийг сургалтын хөтөлбөртөө оруулаарай.'), points: [L('Workshops for any grade', 'Бүх ангид зориулсан сургалт'), L('Lesson plans for teachers', 'Багш нарт зориулсан хичээлийн төлөвлөгөө')], cta: L('Request a workshop', 'Сургалт захиалах'), sq: '#8B0F0F' },
    { title: L('Students', 'Оюутнууд'), text: L('Start or join a university chapter and lead sessions in local schools.', 'Их сургуульдаа салбар байгуулж эсвэл нэгдэж, орон нутгийн сургуулиудад хичээл удирдаарай.'), points: [L('Training from our team', 'Манай багаас сургалт авна'), L('Volunteer experience', 'Сайн дурын туршлага')], cta: L('Join a chapter', 'Салбарт нэгдэх'), sq: '#072039' },
    { title: L('Partners', 'Түншүүд'), text: L('Help us reach more aimags with puzzles, computers and venues.', 'Оньсого, компьютер, байраар дэмжиж илүү олон аймагт хүрэхэд тусална уу.'), points: [L('Sponsor a school', 'Сургуулийг ивээн тэтгэх'), L('Donate puzzle kits', 'Оньсогын иж бүрдэл хандивлах')], cta: L('Partner with us', 'Хамтран ажиллах'), sq: '#8B0F0F' }
  ];
  const person = (m: Person, i: number) => ({
    ...m,
    hasPhoto: !!m.img,
    noPhoto: !m.img,
    cap: !m.poster,
    bg: ['#072039', '#8B0F0F', '#072039', '#8B0F0F'][i % 4],
  });
  const leads = (
    [
    { ini: 'АӨ', name: L('Anujin Ulziidelger', 'Анужин Өлзийдэлгэр'), role: L('Founder & President', 'Үүсгэн байгуулагч, Ерөнхийлөгч'), img: '/media/cd048eecf80469ed02d2a3288bcdcf77.jpg', poster: true },
    { ini: 'ЭГ', name: L('Erkhem Ganzorig', 'Эрхэм Ганзориг'), role: L('Chief Technology Officer', 'Технологийн захирал'), img: '/media/dcc00b6d0eab1d4bd2d3f0a6997b6810.jpg', poster: true },
    { ini: 'МЧ', name: L('Michid-Erdene Chadraabal', 'Мичид-Эрдэнэ Чадраабал'), role: L('Lead member', 'Удирдах гишүүн'), img: '/media/48927a094aa6084d881cd76a28ca8d54.jpg', poster: true },
    { ini: 'ОН', name: L('Odbayar Nyambayar', 'Одбаяр Нямбаяр'), role: L('Lead member', 'Удирдах гишүүн'), img: '/media/57f73ea335c251b0c3c1442ce3694be3.jpg', poster: true }
  ] as Person[]
  ).map(person);
  const members = (
    [
    { ini: 'ДУ', name: L('Dulguun Uuganbaatar', 'Дөлгөөн Ууганбаатар'), role: L('UW Chapter Leader', 'Вашингтоны их сургуулийн салбарын ахлагч'), img: '/media/d967f981655b5e83531052a80573b5c8.jpg', poster: true },
    { ini: 'МБ', name: L('Munkhdalai Batbayar', 'Мөнхдалай Батбаяр'), role: L('School Administrator', 'Сургуулийн администратор'), img: '/media/6b92678bb898a1dba561b7a2e903be54.jpg', poster: true },
    { ini: 'УГ', name: L('', 'Ундрам Ганзориг'), role: L('Team member', 'Багийн гишүүн') }
  ] as Person[]
  ).map(person);
  // Sliding rows repeat the people until each half is wider than a big screen; repeats are hidden from screen readers.
  const loopOf = <T extends object>(arr: T[]) => {
    const k = Math.max(1, Math.ceil(12 / arr.length)); // enough people per half to cover very wide screens
    const half = Array.from({ length: arr.length * k }, (_, i) => ({ ...arr[i % arr.length], hid: flag(i >= arr.length) }));
    return half.concat(half.map((m) => ({ ...m, hid: flag(true) })));
  };
  const membersLoop = loopOf(leads.concat(members)); // one row: lead members first, then the team

  return { t, nav, vPhotos, stats, programs, success, progCards, involve, membersLoop };
}
