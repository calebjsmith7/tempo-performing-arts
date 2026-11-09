// All copy and links scraped from https://tempocastlerock.weebly.com/
// Edit here to update the site.

export const studio = {
  name: "Tempo School of Performing Arts",
  short: "Tempo",
  established: 2016,
  season: "10th",
  address: {
    street: "1022 Evalena Road",
    city: "Castle Rock",
    region: "Colorado",
    zip: "80108",
  },
  phone: "(303) 918-4527",
  phoneHref: "tel:+13039184527",
  email: "sara.taylor8@yahoo.com",
  facebook: "https://www.facebook.com/tempocastlerock",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=1022+Evalena+Road+Castle+Rock+CO+80108",
  hours: ["By scheduled appointment only", "Closed on weekends & holidays"],
};

export const recital = {
  title: "Halloween Fright Night",
  edition: "Tempo's 10th Annual Dance Recital",
  tagline: "By the pricking of my thumbs… something wicked this way comes.",
  dates: [
    { label: "Mandatory Dress Rehearsal", date: "2026-04-24", display: "Fri · April 24, 2026" },
    { label: "Dance Recital", date: "2026-04-25", display: "Sat · April 25, 2026" },
  ],
  tickets: "https://www.etix.com/ticket/p/40621713/halloween-fright-night",
  program: "/docs/recital-program.pdf",
  poster: "/images/stage/stage-5.jpg",
};

export const styles = [
  "Ballet",
  "Pointe",
  "Jazz",
  "Tap",
  "Lyrical",
  "Contemporary",
  "Hip Hop",
  "Improv",
  "Combo",
  "Competition",
];

export const welcome = {
  lead: "Everyone can dance.",
  paragraphs: [
    "At our studio, we strive to have our students become the best they can be in the art of dance. We still call ourselves students to the art. Dance is at times difficult and a struggle — but from that comes an individual beauty.",
    "Maybe not everyone can do a pirouette or jeté, but there isn't a person we know that doesn't express joy by dancing sometimes. Some people dance to express anger. Some dance to express sadness. It is a universal language.",
    "We strive for students who are interested in pursuing a career in dance to be well-rounded, which is why we try to broaden their horizons as much as possible.",
  ],
  pullQuote: "Grace glides on blistered feet.",
  noCant: "And most of all, Tempo doesn't believe in the word “can't.”",
  ownerQuote:
    "I welcome anyone who is enthusiastic about studying the technique and art of dance to my studio.",
};

export const beliefs = [
  "I believe in structure.",
  "I believe young students can push themselves to accomplish what they didn't dream was possible.",
  "I believe in having fun while also learning.",
  "I believe hard work can break down the boundaries students give themselves.",
  "I believe dance is the most beautiful, tiring, athletic form of art.",
  "I believe that art is universal.",
];

export const stats = [
  { value: 2016, label: "Established", plain: true },
  { value: 10, suffix: "th", label: "Season in Castle Rock" },
  { value: 30, suffix: "+", label: "Years of Miss Sara's dancing" },
  { value: 100, suffix: "%", label: "Belief that everyone can dance" },
];

export const instructors = [
  {
    name: "Sara Taylor",
    role: "Owner · Dance Instructor · Competitive Coach",
    photo: "/images/sara-taylor.jpg",
    summary:
      "Originally from the Chicago suburbs and the youngest in a family of eleven, Miss Sara has been dancing since she was three. Moving often meant studying at many studios — and quietly writing down the best of each so she could one day open her own. This is her 10th year serving Castle Rock.",
    story: [
      "When I was in high school I attended Adagio School of Performing Arts. It was there that I knew exactly what I wanted for my future: I wanted to teach dance. Once I went to college to study dance even more, I sank my teeth into genres my previous studios didn't provide.",
      "In the 30+ years that I have been dancing, I have trained in Pointe Ballet, Jazz, Tap, Clogging, World Dance, Modern, Contemporary, Hip Hop, and my all-time favorite, Polynesian.",
      "As I went from studio to studio, some unconditional truths remained the same. I want to give my love of dance to as many young students as possible so that they too can believe in dance.",
    ],
    credentials: [
      "30+ years of dancing",
      "Minor in dance, BYU-Idaho",
      "Student teacher (World Dance), BYU-Idaho",
      "Dancer, Polynesian Cultural Association",
      "Former Secretary & Choreographer, PCA",
      "Instructor & Choreographer, Dance Dynamics — 4 years",
      "Dance workshops & conventions",
    ],
    email: "sara.taylor8@yahoo.com",
  },
  {
    name: "Autumn Snow",
    role: "Tap · Jazz · Lyrical Instructor",
    photo: "/images/autumn-snow.jpg",
    summary:
      "Autumn has danced at Tempo for 7 years and has been teaching for almost 4. Tap is her favorite — she loves the sounds and rhythms your shoes and feet can make — with jazz a close second for getting to be sassy and fast.",
    story: [
      "I love dance so much because it's a way for me to be myself and for others to see what I'm great at. I love to go to competitions and conventions because you get to see each other's talents and see how you can challenge yourself.",
      "I love to teach here because I love getting to show students what they can do and how they can express themselves as much as I can!",
    ],
    credentials: ["7 years at Tempo", "~4 years teaching", "6 years of tap"],
  },
];

export const quotes = [
  {
    text: "Those who were seen dancing were thought to be insane by those who could not hear the music.",
    by: "Friedrich Nietzsche",
  },
  {
    text: "To dance is to be out of yourself. Larger, more beautiful, more powerful.",
    by: "Agnes de Mille",
  },
  {
    text: "I don't want people that want to dance. I want people that need to dance!",
    by: "George Balanchine",
  },
  {
    text: "Great dancers are not great because of their technique, they are great because of their passion.",
    by: "Martha Graham",
  },
  {
    text: "You don't enter a dance studio and say, “I can't do that.” If you do, then why are you in the studio in the first place?",
    by: "Judith Jamison",
  },
];

export type Photo = { src: string; w: number; h: number; alt: string };

export const gallery: Photo[] = [
  { src: "/images/stage/stage-1.jpg", w: 1800, h: 1198, alt: "A dancer reaches skyward with a flowing gold scarf under a single spotlight" },
  { src: "/images/gallery/tap-3.jpg", w: 826, h: 1100, alt: "Tap dancers mid-routine on stage" },
  { src: "/images/stage/stage-2.jpg", w: 1800, h: 1198, alt: "A hip hop group in pink tops celebrating on stage" },
  { src: "/images/gallery/lyrical-lift.jpg", w: 1100, h: 824, alt: "Lyrical students lifting a dancer overhead in the studio" },
  { src: "/images/gallery/spice-girls.jpg", w: 862, h: 1100, alt: "Dancers posing in costume for a themed routine" },
  { src: "/images/gallery/elite-team.jpg", w: 1100, h: 824, alt: "The Elite team posing at a competition" },
  { src: "/images/stage/stage-7.jpg", w: 1800, h: 1199, alt: "A dancer in white lace extends an arm upward against a violet backdrop" },
  { src: "/images/gallery/jazz-2.jpg", w: 675, h: 1100, alt: "A jazz dancer in costume" },
  { src: "/images/gallery/stand-by-me.jpg", w: 1100, h: 733, alt: "Two dancers in synchronized floor extensions" },
  { src: "/images/gallery/groove.jpg", w: 1100, h: 824, alt: "Competition dancers in sequined costumes at Groove" },
  { src: "/images/stage/stage-6.jpg", w: 1800, h: 1198, alt: "Two young dancers in yellow dresses kneeling on a violet-lit stage" },
  { src: "/images/gallery/avery-lift.jpg", w: 825, h: 1100, alt: "A partnered lift" },
  { src: "/images/gallery/bohemian-rhapsody-group.jpg", w: 825, h: 1100, alt: "The Bohemian Rhapsody group in costume" },
  { src: "/images/stage/stage-3.jpg", w: 1800, h: 1198, alt: "Contemporary dancers in burgundy reaching across the stage" },
  { src: "/images/gallery/ballet-2-split-lift.jpg", w: 1100, h: 825, alt: "Ballet students performing a split lift" },
  { src: "/images/gallery/all-stars.jpg", w: 1100, h: 824, alt: "The All Stars team together" },
  { src: "/images/stage/stage-4.jpg", w: 1800, h: 1198, alt: "Dancers in white embracing at the end of a lyrical piece" },
  { src: "/images/gallery/sleeping-beauty.jpg", w: 1100, h: 825, alt: "A Sleeping Beauty performance" },
  { src: "/images/gallery/olivia-showcase.jpg", w: 1100, h: 1012, alt: "A soloist at a showcase" },
  { src: "/images/gallery/rehearsal-night.jpg", w: 1100, h: 824, alt: "Rehearsal night at the studio" },
];

export const newsletters = [
  { month: "April", year: 2026, file: "april_2026" },
  { month: "March", year: 2026, file: "march_2026" },
  { month: "February", year: 2026, file: "february_2026" },
  { month: "January", year: 2026, file: "january_2026" },
  { month: "December", year: 2025, file: "december_2025" },
  { month: "November", year: 2025, file: "november_2025" },
  { month: "October", year: 2025, file: "october_2025" },
  { month: "September", year: 2025, file: "september_2025" },
];

export const nav = [
  { href: "#studio", label: "Studio" },
  { href: "#recital", label: "Recital" },
  { href: "#faculty", label: "Faculty" },
  { href: "#gallery", label: "Gallery" },
  { href: "#news", label: "Newsletters" },
  { href: "#visit", label: "Visit" },
];
