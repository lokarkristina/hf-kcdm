export const highlight = 'This is the Highlight. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.'
export const quote = {
  text: 'This is the quote. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ',
  author: 'Jaka Jaklič',
  company: 'Podjetje d.o.o.',
}
export const image = {
  default: '/images/person-presenting.png',
  images: [
    { src: '/images/person-presenting.png', media: '(max-width: calc(var(--breakpoint-sm) - 1px))' },
    { src: '/images/peope-chatting.png', media: '(min-width: var(--breakpoint-sm)) and (max-width: calc(var(--breakpoint-md) - 1px))' },
    { src: '/images/person-presenting.png', media: '(min-width: var(--breakpoint-md)) and (max-width: calc(var(--breakpoint-lg) - 1px))' },
    { src: '/images/image-awards.png', media: '(min-width: var(--breakpoint-lg)) and (max-width: calc(var(--breakpoint-xl) - 1px))' },
    { src: '/images/person-presenting.png', media: '(min-width: var(--breakpoint-xl)) and (max-width: calc(var(--breakpoint-2xl) - 1px))' },
    { src: '/images/image-awards.png', media: '(min-width: var(--breakpoint-2xl))' },
  ],
  description: 'Lorem ipsum dolor sit amet consectetur. Morbi consequat ut sollicitudin lorem. Platea auctor sit. Lorem ipsum dolor sit amet consectetur. Morbi consequat ut sollicitudin lorem. Platea auctor sit.',
}

export const teaserText = 'Teaser text - Kompetenčni center za design management svojim članom ponuja nabor pristopov, orodij in znanj -, ki podjetju omogoča, da design uporablja za doseganje poslovnih ciljev.'
export const text = 'Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.'
export const textLink = `Celostno razumevanje in učinkovito upravljanje področij designa: <a href="#">link design raziskav</a>, storitvenega oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki.`
export const textList = `
  <ul>
    <li>design raziskav,</li>
    <li>storitvenega oblikovanja,</li>
    <li>trajnostnega oblikovanja, načrtovanja uporabniških izkušenj,</li>
    <li>upravljanja uporabniških poti in stičnih točk znamke z uporabniki,</li>
    <li>design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti</li>
  </ul>
`

const content = {
  h1: 'Nagrada Good Design Award Avstralija za projekt KCDM',
  image,
  date: '03-05-2025',
  heading2: 'To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga',
  heading3: 'To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga',
  highlight,
  quote,
  teaserText,
  text,
  textLink,
  textList,
}

export default content
