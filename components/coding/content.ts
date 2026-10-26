import { pick, type Lang } from '@/lib/lang';

const flag = (on: boolean) => (on ? 'true' : 'false') as 'true' | 'false';

/** Text and data of the Coding page, in English and Mongolian. */
export function codingContent(lang: Lang) {
  const L = pick(lang);

  const t = {
    pageTitle: L('Coding at MindMaze', 'MindMaze-ийн кодлол'),
    heroAlt: L('MindMaze coding students and mentors gathered in front of a carved stone wall', 'Сийлбэртэй чулуун хананы өмнө зогсож буй MindMaze-ийн кодлолын сурагчид, менторууд'),
    whyTitle: L('Why coding?', 'Яагаад кодлол гэж?'),
    whyLead: L('Puzzles spark curiosity. Coding gives it somewhere to go.', 'Оньсого сониуч занг төрүүлдэг. Кодлол түүнд очих газрыг өгдөг.'),
    whyA: L('At MindMaze, coding isn’t a separate subject. It’s ', 'MindMaze-д кодлол бол тусдаа хичээл биш. Энэ бол '),
    whyHi: L('the next step of the habit our puzzles already teach', 'манай оньсогын хичээлүүдийн суулгадаг зуршлын дараагийн алхам'),
    whyB: L(': look at a problem, take it apart, try an idea, and keep going until it works.', ': асуудлыг харж, задлан, санаагаа туршиж, болтол нь хичээх.'),
    whyClose: L('Our goal stays the same: spark curiosity, unravel inspiration, and share the true merit of learning.', 'Бидний зорилго хэвээр: сониуч занг өдөөж, урам зоригийг нээж, суралцахын жинхэнэ үнэ цэнийг хуваалцах.'),
    howTitle: L('How we teach', 'Хэрхэн заадаг вэ'),
    howLead: L('Two formats, one approach: understand the logic first, then build something real.', 'Хоёр хэлбэр, нэг арга барил: эхлээд логикийг ойлгож, дараа нь бодит зүйл бүтээх.'),
    ipLabel: L('In-person class', 'Танхимын хичээл'),
    ipTitle: L('14-day coding program', '14 хоногийн кодлолын хөтөлбөр'),
    ipText: L('In partnership with Pinecone Academy, we brought together 20 students from two provinces and the rural districts of Ulaanbaatar for a 14-day coding program, fully covered by scholarships.', 'Pinecone Academy-тай хамтран хоёр аймаг болон Улаанбаатарын алслагдсан дүүргүүдийн 20 сурагчийг 14 хоногийн кодлолын хөтөлбөрт бүрэн тэтгэлэгтэйгээр хамруулсан.'),
    ipAlt: L('A mentor and two students review a program together', 'Ментор хоёр сурагчтай хамт програмаа шалгаж байна'),
    olLabel: L('Online class', 'Онлайн хичээл'),
    slideLabel: L('Photos from MindMaze coding classes', 'MindMaze-ийн кодлолын хичээлийн зургууд'),
    olAlt: L('A student writes code at an iMac during a weekend class', 'Амралтын өдрийн хичээл дээр сурагч iMac дээр код бичиж байна'),
    olTitle: L('7-week weekend course', '7 долоо хоногийн сургалт'),
    olText: L('We teach a 7-week online coding course for students at our partner schools, held on weekends.', 'Бид хамтрагч сургуулиудынхаа сурагчдад зориулж 7 долоо хоногийн турш амралтын өдрүүдэд онлайн кодлолын хичээл заадаг.'),
    learnTitle: L('What we teach', 'Юу заадаг вэ'),
    learnLead: L('Logic first, then projects of their own.', 'Эхлээд логик, дараа нь өөрсдийн төсөл.'),
    puzTitle: L('Puzzles in coding', 'Кодлол дахь оньсого'),
    puzText: L('We don’t just teach which syntax to use. We teach the logic behind it: how to think a problem through, not just how the front end looks.', 'Бид зөвхөн аль синтаксийг ашиглахыг заадаггүй. Түүний цаад логикийг заадаг: дэлгэц дээр юу харагдахаас гадна асуудлыг хэрхэн бодож шийдэхийг.'),
    puzNote: L('Every exercise is a small puzzle. This one asks students to read the word “mind” backwards, without the shortcut.', 'Даалгавар бүр жижиг оньсого. Энэ даалгавар “mind” үгийг товчлолгүйгээр урвуугаар нь уншихыг шаарддаг.'),
    codeCap: L('Try it before you peek.', 'Харахаасаа өмнө өөрөө оролдоорой.'),
    solLabel: L('One possible solution', 'Боломжит нэг шийдэл'),
    pbTitle: L('Project based', 'Төсөлд суурилсан'),
    pbText: L('We don’t stop at coding languages. We help every student turn an idea into a working project of their own.', 'Бид програмчлалын хэл заагаад зогсдоггүй. Сурагч бүрт өөрийн санааг ажилладаг төсөл болгоход нь тусалдаг.'),
    pbText2: L('In just two weeks, each student built three projects of their own.', 'Хоёрхон долоо хоногт сурагч бүр өөрийн гэсэн гурван төсөл бүтээсэн.'),
    statA: L('projects built by each student', 'төслийг сурагч бүр бүтээсэн'),
    statB: L('in just two weeks', 'хоёрхон долоо хоногт'),
    seeProjects: L('See their projects →', 'Тэдний төслүүдийг үзэх →'),
    shapedTitle: L('Projects we shaped', 'Бидний бүтээсэн төслүүд'),
    shapedLead: L('Games and websites our students built, from the first idea to a finished project.', 'Сурагчдын маань анхны санаанаас эхлээд дуусгасан тоглоом, апп-ууд.'),
    viewP: L('View project →', 'Төслийг үзэх →'),
    projTitle: L('Hangman', 'Үг таах тоглоом'),
    projType: L('Game', 'Тоглоом'),
    stripAlt: L('A film strip of student projects: tic-tac-toe, a memory card game, Hangman, a to-do list and a calculator', 'Сурагчдын төслүүдийн хальс: X ба O, карт тааруулах тоглоом, үг таах тоглоом, хийх ажлын жагсаалт, тооны машин'),
    applyTitle: L('Apply for online coding', 'Онлайн кодлолд бүртгүүлэх'),
    applyLead: L('Our next 7-week online coding course starts on 3 December. Classes run on weekends, and students build real projects from the first week. Fill in the form and we will contact you to confirm a place.', 'Дараагийн 7 долоо хоногийн онлайн кодлолын сургалт 12-р сарын 3-нд эхэлнэ. Хичээл амралтын өдрүүдэд орох бөгөөд сурагчид эхний долоо хоногоос бодит төсөл бүтээнэ. Маягтыг бөглөвөл бид тантай холбогдож суудлыг баталгаажуулна.'),
    fStart: L('Starts', 'Эхлэх'),
    fStartV: L('3 December', '12-р сарын 3'),
    fLength: L('Length', 'Үргэлжлэх'),
    fLengthV: L('7 weeks', '7 долоо хоног'),
    fFormat: L('Format', 'Хэлбэр'),
    fFormatV: L('Online, weekends', 'Онлайн, амралтын өдрүүдэд'),
    studentName: L('Student name', 'Сурагчийн нэр'),
    grade: L('Grade', 'Анги'),
    gradePick: L('Choose', 'Сонгох'),
    parentPhone: L('Parent phone', 'Эцэг эхийн утас'),
    why: L('Why do you want to join?', 'Яагаад хамрагдахыг хүсэж байна вэ?'),
    submit: L('Apply now', 'Бүртгүүлэх'),
    email: L('Email', 'Имэйл'),
    phone: L('Phone', 'Утас'),
    school: L('School', 'Сургууль'),
    footer: L('Mongolian heritage, one puzzle at a time.', 'Монгол өв соёл, оньсого бүрээр.')
  };

  // one link per section on this page; Home leads back to the homepage
  const nav = [
    { href: '/', label: L('Home', 'Нүүр') },
    { href: '#why', label: L('Why coding', 'Яагаад кодлол') },
    { href: '#how', label: L('How we teach', 'Хэрхэн заадаг') },
    { href: '#learn', label: L('What we teach', 'Юу заадаг') },
    { href: '#projects', label: L('Projects', 'Төслүүд') },
    { href: '#apply', label: L('Apply', 'Бүртгүүлэх') }
  ];
  const heroStats = [
    { k: L('Students', 'Сурагч'), n: '20', l: L('students in our in-person program', 'сурагч танхимын хөтөлбөрт'), c: '#E2574C' },
    { k: L('Program', 'Хөтөлбөр'), n: '14', l: L('days, fully on scholarship', 'хоног, бүрэн тэтгэлэгтэй'), c: '#F3EFE6' },
    { k: L('Projects', 'Төсөл'), n: '3', l: L('projects built by each student', 'төслийг сурагч бүр бүтээсэн'), c: '#E2574C' },
    { k: L('Online', 'Онлайн'), n: '7', l: L('weeks of online weekend classes', 'долоо хоногийн онлайн хичээл'), c: '#F3EFE6' }
  ];
  const pillars = [
    { n: '1', sq: '#072039', title: L('One way of thinking, two tools', 'Нэг сэтгэлгээ, хоёр хэрэгсэл'), text: L('A wooden burr and a line of code ask the same thing of a student. Break the problem into parts, test an idea, learn from what fails, and try again. Traditional puzzles build that habit by hand. Coding carries it onto the screen.', 'Модон түгжээ ч, нэг мөр код ч сурагчаас адилхан зүйл шаарддаг: асуудлыг хэсэгчлэн задлах, санаагаа турших, алдаанаасаа суралцаж дахин оролдох. Уламжлалт оньсого энэ зуршлыг гараар суулгадаг бол кодлол түүнийг дэлгэц рүү авчирдаг.') },
    { n: '2', sq: '#8B0F0F', title: L('From screen time to making time', 'Дэлгэцийн цагаас бүтээх цаг руу'), text: L('Children already spend hours online, mostly using things other people built. Our coding classes turn that time into making. Students design their own games, tools and ideas, and learn that technology is something they can shape, not just consume.', 'Хүүхдүүд цахим орчинд олон цагийг өнгөрөөж, ихэвчлэн бусдын бүтээсэн зүйлийг хэрэглэдэг. Манай кодлолын хичээл тэр цагийг бүтээх цаг болгодог. Сурагчид өөрсдийн тоглоом, хэрэгсэл, санаагаа бүтээж, технологийг зөвхөн хэрэглэх бус өөрсдөө хэлбэржүүлж чадна гэдгээ мэдэрдэг.') },
    { n: '3', sq: '#E2574C', title: L('Closing the gap for teenagers', 'Өсвөр насныханд боломжийн зөрүүг багасгах'), text: L('For teenagers who have outgrown puzzles, coding opens a door that many schools can’t offer yet. With the help of volunteers and partners, we bring project-based coding lessons to the schools we work with.', 'Оньсогоноос ахисан өсвөр насныханд кодлол олон сургууль одоогоор санал болгож чадахгүй байгаа боломжийг нээж өгдөг. Сайн дурынхан, түншүүдийнхээ тусламжтайгаар бид хамтран ажилладаг сургуулиудадаа төсөлд суурилсан кодлолын хичээл заадаг.') }
  ];
  const ipFacts = [
    { k: L('format', 'Хэлбэр'), v: L('In-person', 'Танхимаар') },
    { k: L('Length', 'Хугацаа'), v: L('14 days', '14 хоног') },
    { k: L('partner', 'Түнш'), v: 'Pinecone Academy' }
  ];
  const olFacts = [
    { k: L('Format', 'Хэлбэр'), v: L('Online', 'Онлайн') },
    { k: L('Length', 'Хугацаа'), v: L('7 weeks', '7 долоо хоног') },
    { k: L('When', 'Хэзээ'), v: L('Weekends', 'Амралтын өдрүүд') }
  ];
  const slideOnce = [
    { img: '/media/ab5f6e7ac7b63e77e518f7f327913fb8.jpg', alt: L('A student reads through his code on an iMac', 'Сурагч iMac дээрх кодоо уншиж байна') },
    { img: '/media/359356f40941b4cd2d79db90b7e79a9d.jpg', alt: L('A student in a striped shirt writes code on an iMac', 'Судалтай цамцтай сурагч iMac дээр код бичиж байна') },
    { img: '/media/4920fa3d593153ad46faaadbf57d1f82.jpg', alt: L('Two students work on their laptops together on a sofa', 'Хоёр сурагч буйдан дээр зөөврийн компьютер дээрээ хамт ажиллаж байна') },
    { img: '/media/c1f4436b1b4fbc23d29aff680acb7a71.jpg', alt: L('A student works on her laptop', 'Сурагч зөөврийн компьютер дээрээ ажиллаж байна') }
  ];
  // two identical halves so the row loops seamlessly; each half repeats the photos to cover wide screens
  const slideHalf = Array.from({ length: slideOnce.length * 3 }, (_, i) => ({ ...slideOnce[i % slideOnce.length], hid: flag(i >= slideOnce.length) }));
  const slidePics = slideHalf.concat(slideHalf.map((p) => ({ ...p, hid: flag(true) })));

<<<<<<< HEAD
  return { t, nav, heroStats, pillars, ipFacts, olFacts, slidePics };
=======
  // student projects on the film reel in "Projects we shaped" (screens in /public/media/projects)
  const projects = [
    { title: L('Hangman', 'Үг таах тоглоом'), type: L('Game', 'Тоглоом'), img: '/media/projects/hangman.webp' },
    { title: L('My to-do list', 'Хийх ажлын жагсаалт'), type: L('Web app', 'Веб апп'), img: '/media/projects/todo.webp' },
    { title: L('Calculator', 'Тооны машин'), type: L('Web app', 'Веб апп'), img: '/media/projects/calc.webp' },
    { title: L('Tic-tac-toe', 'X ба O'), type: L('Game', 'Тоглоом'), img: '/media/projects/ttt.webp' },
    { title: L('Memory', 'Санах ойн тоглоом'), type: L('Card game', 'Картын тоглоом'), img: '/media/projects/memory.webp' },
  ];

  return { t, nav, heroStats, pillars, ipFacts, olFacts, slidePics, projects };
>>>>>>> 20672e8 (fixed)
}
