import { tim } from '@/images/auth';
export const CURRENCY = '€';
export const DUMMY_USER_IMAGE =
  'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
export const GOOGLE_AUTH_URL =
  process.env.NEXT_PUBLIC_BASE_URL + '/auth/client/google';
export const LiveLink = process.env.NEXT_PUBLIC_LIVE_BASE_URL;
export const PLATFORM_EMAIL = 'info@skillami.com';
export const PLATFORM_NAME = 'Skillami';

export enum SOCIAL_LINKS {
  INSTAGRAM = 'https://instagram.com/skillami',
  YOUTUBE = 'https://youtube.com/skillami',
  LINKEDIN = 'https://linkedin.com/skillami',
  TWITTER = 'https://twitter.com/skillami',
  FACEBOOK = 'https://facebook.com/skillami',
  TIKTOK = 'https://tiktok.com/skillami',
}

export enum ADDRESS_TYPE {
  BILLING = 'billing',
  SHIPPING = 'shipping',
  OTHER = 'other',
}

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const INFLUENCERS: {
  id: string;
  label: string;
  image: string;
  link: string;
  specialty: string;
  category: string;
  slug: string;
}[] = [
  {
    id: 'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Mathew Walker',
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'mat-walker',
  },
  {
    id: 'https://images.pexels.com/photos/4241697/pexels-photo-4241697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Jamie Oscar',
    image:
      'https://images.pexels.com/photos/4241697/pexels-photo-4241697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/',
    specialty: 'Business politics',
    category: 'arts',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in8.png',
    label: 'Ashley Tim',
    image: '/img/influencers/in8.png',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in5.jpg',
    label: 'Jollen K',
    image: '/img/influencers/in5.jpg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'jollen-k',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
  {
    id: '/img/influencers/in3.jpeg',
    label: 'Jamie Oscar',
    image: '/img/influencers/in3.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Design',
    slug: 'jamie-oscar',
  },
  {
    id: '/img/influencers/in4.jpeg',
    label: 'Ashley Tim',
    image: '/img/influencers/in4.jpeg',
    link: '/',
    specialty: 'Business politics',
    category: 'Business',
    slug: 'ashley-tim',
  },
];

export const COURSES: any = [
  {
    id: 'https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Meet Your Instructor',
    image:
      'https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'meet-your-instructor',
    rating: '4.5',
    views: '345',
    influencerSlug: 'kevin-hart',
  },
  {
    id: 'https://images.pexels.com/photos/1524620/pexels-photo-1524620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Keep pushing Yourself',
    image:
      'https://images.pexels.com/photos/1524620/pexels-photo-1524620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'keep-pushing-yourself',
    rating: '3',
    views: '345',
    influencerSlug: 'kevin-hart',
  },
  {
    id: 'https://images.pexels.com/photos/6077806/pexels-photo-6077806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: '1000 Days Training',
    image:
      'https://images.pexels.com/photos/6077806/pexels-photo-6077806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '1000-days-training',
    rating: '5',
    views: '3345',
    influencerSlug: 'kevin-hart',
  },
  {
    id: 'https://images.pexels.com/photos/4241697/pexels-photo-4241697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label: 'Worlds Best Ballerina',
    image:
      'https://images.pexels.com/photos/4241697/pexels-photo-4241697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'worlds-best-ballerina',
    rating: '4.1',
    views: '34',
    influencerSlug: 'kevin-hart',
  },
  {
    label: 'Rope Climbing',
    image:
      'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '',
    rating: '2.8',
    views: '3',
    influencerSlug: 'kevin-hart',
  },
  {
    label: 'Your personal Tennis Coach',
    image:
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '',
    rating: '4.2',
    views: '677',
    influencerSlug: 'kevin-hart',
  },
  {
    label: 'Hoops and Loops',
    image:
      'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/',
    rating: '4.5',
    views: '345',
    influencerSlug: 'kevin-hart',
  },
];

export enum QuizResult {
  PASS = 'pass',
  FAIL = 'fail',
}

export const CHAPTERS = {
  minutes: 60,
  chapters: [
    {
      id: 1,
      name: 'Chapter 1',
      progress: 100,
      watched: '25 of 120m',
      minutes: '30',
    },
    {
      id: 2,
      name: 'Chapter 2',
      progress: 50,
      minutes: '30',
      watched: '25 of 120m',
    },
    {
      id: 3,
      name: 'Chapter 3',
      progress: 0,
      watched: '25 of 120m',
      minutes: '30',
    },
    {
      id: 4,
      name: 'Chapter 4',
      progress: 0,
      watched: '25 of 120m',
      minutes: '30',
    },
    {
      id: 5,
      name: 'Chapter 5',
      progress: 0,
      minutes: '30',
    },
    {
      id: 6,
      name: 'Chapter 6',
      progress: 0,
      minutes: '30',
    },
    {
      id: 7,
      name: 'Chapter 7',
      minutes: '30',
      progress: 0,
    },
    {
      id: 8,
      name: 'Chapter 8',
      progress: 0,
      minutes: '30',
    },
  ],
  quizes: [
    {
      id: 1,
      name: 'Chapter 1',
      completed: true,
    },
    {
      id: 2,
      name: 'Chapter 2',
      completed: false,
    },
    {
      id: 3,
      name: 'Chapter 3',
      completed: false,
    },
    {
      id: 4,
      name: 'Chapter 4',
      completed: false,
    },
    {
      id: 5,
      name: 'Chapter 5',
      completed: false,
    },
  ],
};

export const AUTH_TESTIMONIALS = [
  {
    name: 'Timson K',
    image: tim,
    job: 'Influencer',
    quote:
      '“ Simply unbelievable! I am really satisfied with the tutorials and stuff. This is Absolutely wonderful! “',
    key: 1,
  },
  {
    name: 'John Doe',
    image: tim,
    job: 'Freelancer',
    quote:
      '“ Simply unbelievable! I am really satisfied with the tutorials and stuff“',
    key: 2,
  },
  {
    name: 'John Doe',
    image: tim,
    job: 'Freelancer',
    quote:
      '“ I am really satisfied with the tutorials and stuff. This is Absolutely wonderful! “',
    key: 3,
  },
];

export const HOME_QUESTIONAIRE = [
  {
    id: 1,
    option: 'Improve my professional or leadership skills',
    selected: true,
  },
  {
    id: 2,
    option: 'Become a better artist, musician, or writer',
  },
  {
    id: 3,
    option: 'Become a better chef',
  },
  {
    id: 4,
    option: 'Improve my style (interior design or fashion)',
  },
  {
    id: 5,
    option: 'Something else',
  },
];

export const CATEGORIES = [
  {
    label: 'Arts & Entertainment',
    value: 'arts',
  },
  {
    label: 'Business',
    value: 'Business',
  },
  {
    label: 'Community',
    value: 'Community',
  },
  {
    label: 'Design & Style',
    value: 'Design',
  },
  {
    label: 'Evolution',
    value: 'Evolution',
  },
  {
    label: 'Food',
    value: 'Food',
  },
  {
    label: 'Home & Lifestyle',
    value: 'Home',
  },
  {
    label: 'Mindset',
    value: 'Mindset',
  },
  {
    label: 'Music',
    value: 'Music',
  },
  {
    label: 'Science & Tech',
    value: 'Science',
  },
  {
    label: 'Sports',
    value: 'Sports',
  },
  {
    label: 'Wellness',
    value: 'Wellness',
  },
  {
    label: 'Writing',
    value: 'Writing',
  },
];

export const PAYMENT_DATA = [
  {
    id: '#113',
    item: 'Course 1',
    payment: 'Paypal',
    amount: '$20',
    date: '12/12/2021',
  },
  {
    id: '#113',
    item: 'Course 2',
    payment: 'Cash',
    amount: '$20',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 3',
    payment: 'Paypal',
    amount: '$10',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 4',
    payment: 'Paypal',
    amount: '$50',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 1',
    payment: 'Paypal',
    amount: '$20',
    date: '12/12/2021',
  },
  {
    id: '#113',
    item: 'Course 2',
    payment: 'Cash',
    amount: '$20',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 3',
    payment: 'Paypal',
    amount: '$10',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 4',
    payment: 'Paypal',
    amount: '$50',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 1',
    payment: 'Paypal',
    amount: '$20',
    date: '12/12/2021',
  },
  {
    id: '#113',
    item: 'Course 2',
    payment: 'Cash',
    amount: '$20',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 3',
    payment: 'Paypal',
    amount: '$10',
    date: '12/12/2024',
  },
  {
    id: '#113',
    item: 'Course 4',
    payment: 'Paypal',
    amount: '$50',
    date: '12/12/2024',
  },
];

export const COUNTRIES = [
  { id: 'AsdfsdfF', label: 'Afghanistan' },
  { id: 'AX', label: 'Åland Islands', code: 'AX' },
  { id: 'AsdfsdfL', label: 'Albania' },
  { id: 'DZ', label: 'Algeria', code: 'DZ' },
  { id: 'AS', label: 'American Samoa', code: 'AS' },
  { id: 'AE', label: 'United Arab Emirates', code: 'AE' },
];

export const CITIES = [
  {
    id: '1',
    label: 'New York',
    growth_from_2000_to_2013: '4.8%',
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: '8405837',
    rank: '1',
    state: 'New York',
  },
  {
    id: '1',
    label: 'Los Angeles',
    growth_from_2000_to_2013: '4.8%',
    latitude: 34.0522342,
    longitude: -118.2436849,
    population: '3884307',
    rank: '2',
    state: 'California',
  },
  {
    id: '1',
    label: 'Chicago',
    growth_from_2000_to_2013: '-6.1%',
    latitude: 41.8781136,
    longitude: -87.6297982,
    population: '2718782',
    rank: '3',
    state: 'Illinois',
  },
  {
    id: '1',
    label: 'Houston',
    growth_from_2000_to_2013: '11.0%',
    latitude: 29.7604267,
    longitude: -95.3698028,
    population: '2195914',
    rank: '4',
    state: 'Texas',
  },
  {
    id: '1',
    label: 'Philadelphia',
    growth_from_2000_to_2013: '2.6%',
    latitude: 39.9525839,
    longitude: -75.1652215,
    population: '1553165',
    rank: '5',
    state: 'Pennsylvania',
  },
  {
    id: '1',
    label: 'Phoenix',
    growth_from_2000_to_2013: '14.0%',
    latitude: 33.4483771,
    longitude: -112.0740373,
    population: '1513367',
    rank: '6',
    state: 'Arizona',
  },
  {
    id: '1',
    label: 'Phoenix',
    growth_from_2000_to_2013: '14.0%',
    latitude: 33.4483771,
    longitude: -112.0740373,
    population: '1513367',
    rank: '6',
    state: 'Dubai',
  },
];

export const STATES = [
  {
    id: 'AL',
    label: 'Alabama',
    code: 'AL',
  },
  {
    id: 'AK',
    label: 'Alaska',
    code: 'AK',
  },
  {
    id: 'AZ',
    label: 'Arizona',
    code: 'AZ',
  },
  {
    id: 'AR',
    label: 'Arkansas',
    code: 'AR',
  },
  {
    id: 'CA',
    label: 'California',
    code: 'CA',
  },
  {
    id: 'CO',
    label: 'Colorado',
    code: 'CO',
  },
  {
    id: 'CT',
    label: 'Connecticut',
    code: 'CT',
  },
  {
    id: 'DE',
    label: 'Delaware',
    code: 'DE',
  },
  {
    id: 'FL',
    label: 'Florida',
    code: 'FL',
  },
  {
    id: 'GA',
    label: 'Georgia',
    code: 'GA',
  },
  {
    id: 'HI',
    label: 'Hawaii',
    code: 'HI',
  },
  {
    id: 'AE',
    label: 'Dubai',
    code: 'AE',
  },
];

export const COUNTRYCODES = [
  {
    name: 'Afghanistan',
    dial_code: '+93',
    emoji: '🇦🇫',
    code: 'AF',
  },
  {
    name: 'Aland Islands',
    dial_code: '+358',
    emoji: '🇦🇽',
    code: 'AX',
  },
  {
    name: 'Albania',
    dial_code: '+355',
    emoji: '🇦🇱',
    code: 'AL',
  },
  {
    name: 'Algeria',
    dial_code: '+213',
    emoji: '🇩🇿',
    code: 'DZ',
  },
  {
    name: 'AmericanSamoa',
    dial_code: '+1684',
    emoji: '🇦🇸',
    code: 'AS',
  },
  {
    name: 'Andorra',
    dial_code: '+376',
    emoji: '🇦🇩',
    code: 'AD',
  },
  {
    name: 'Angola',
    dial_code: '+244',
    emoji: '🇦🇴',
    code: 'AO',
  },
  {
    name: 'Anguilla',
    dial_code: '+1264',
    emoji: '🇦🇮',
    code: 'AI',
  },
  {
    name: 'Antarctica',
    dial_code: '+672',
    emoji: '🇦🇶',
    code: 'AQ',
  },
  {
    name: 'Antigua and Barbuda',
    dial_code: '+1268',
    emoji: '🇦🇬',
    code: 'AG',
  },
  {
    name: 'Argentina',
    dial_code: '+54',
    emoji: '🇦🇷',
    code: 'AR',
  },
  {
    name: 'Armenia',
    dial_code: '+374',
    emoji: '🇦🇲',
    code: 'AM',
  },
  {
    name: 'Aruba',
    dial_code: '+297',
    emoji: '🇦🇼',
    code: 'AW',
  },
  {
    name: 'Australia',
    dial_code: '+61',
    emoji: '🇦🇺',
    code: 'AU',
  },
  {
    name: 'Austria',
    dial_code: '+43',
    emoji: '🇦🇹',
    code: 'AT',
  },
  {
    name: 'Azerbaijan',
    dial_code: '+994',
    emoji: '🇦🇿',
    code: 'AZ',
  },
  {
    name: 'Bahamas',
    dial_code: '+1242',
    emoji: '🇧🇸',
    code: 'BS',
  },
  {
    name: 'Bahrain',
    dial_code: '+973',
    emoji: '🇧🇭',
    code: 'BH',
  },
  {
    name: 'Bangladesh',
    dial_code: '+880',
    emoji: '🇧🇩',
    code: 'BD',
  },
  {
    name: 'Barbados',
    dial_code: '+1246',
    emoji: '🇧🇧',
    code: 'BB',
  },
  {
    name: 'Belarus',
    dial_code: '+375',
    emoji: '🇧🇾',
    code: 'BY',
  },
  {
    name: 'Belgium',
    dial_code: '+32',
    emoji: '🇧🇪',
    code: 'BE',
  },
  {
    name: 'Belize',
    dial_code: '+501',
    emoji: '🇧🇿',
    code: 'BZ',
  },
  {
    name: 'Benin',
    dial_code: '+229',
    emoji: '🇧🇯',
    code: 'BJ',
  },
  {
    name: 'Bermuda',
    dial_code: '+1441',
    emoji: '🇧🇲',
    code: 'BM',
  },
  {
    name: 'Bhutan',
    dial_code: '+975',
    emoji: '🇧🇹',
    code: 'BT',
  },
  {
    name: 'Bolivia, Plurinational State of',
    dial_code: '+591',
    emoji: '🇧🇴',
    code: 'BO',
  },
  {
    name: 'Bosnia and Herzegovina',
    dial_code: '+387',
    emoji: '🇧🇦',
    code: 'BA',
  },
  {
    name: 'Botswana',
    dial_code: '+267',
    emoji: '🇧🇼',
    code: 'BW',
  },
  {
    name: 'Brazil',
    dial_code: '+55',
    emoji: '🇧🇷',
    code: 'BR',
  },
  {
    name: 'British Indian Ocean Territory',
    dial_code: '+246',
    emoji: '🇮🇴',
    code: 'IO',
  },
  {
    name: 'Brunei Darussalam',
    dial_code: '+673',
    emoji: '🇧🇳',
    code: 'BN',
  },
  {
    name: 'Bulgaria',
    dial_code: '+359',
    emoji: '🇧🇬',
    code: 'BG',
  },
  {
    name: 'Burkina Faso',
    dial_code: '+226',
    emoji: '🇧🇫',
    code: 'BF',
  },
  {
    name: 'Burundi',
    dial_code: '+257',
    emoji: '🇧🇮',
    code: 'BI',
  },
  {
    name: 'Cambodia',
    dial_code: '+855',
    emoji: '🇰🇭',
    code: 'KH',
  },
  {
    name: 'Cameroon',
    dial_code: '+237',
    emoji: '🇨🇲',
    code: 'CM',
  },
  {
    name: 'Canada',
    dial_code: '+1',
    emoji: '🇨🇦',
    code: 'CA',
  },
  {
    name: 'Cape Verde',
    dial_code: '+238',
    emoji: '🇨🇻',
    code: 'CV',
  },
  {
    name: 'Cayman Islands',
    dial_code: '+345',
    emoji: '🇰🇾',
    code: 'KY',
  },
  {
    name: 'Central African Republic',
    dial_code: '+236',
    emoji: '🇨🇫',
    code: 'CF',
  },
  {
    name: 'Chad',
    dial_code: '+235',
    emoji: '🇹🇩',
    code: 'TD',
  },
  {
    name: 'Chile',
    dial_code: '+56',
    emoji: '🇨🇱',
    code: 'CL',
  },
  {
    name: 'China',
    dial_code: '+86',
    emoji: '🇨🇳',
    code: 'CN',
  },
  {
    name: 'Christmas Island',
    dial_code: '+61',
    emoji: '🇨🇽',
    code: 'CX',
  },
  {
    name: 'Cocos (Keeling) Islands',
    dial_code: '+61',
    emoji: '🇨🇨',
    code: 'CC',
  },
  {
    name: 'Colombia',
    dial_code: '+57',
    emoji: '🇨🇴',
    code: 'CO',
  },
  {
    name: 'Comoros',
    dial_code: '+269',
    emoji: '🇰🇲',
    code: 'KM',
  },
  {
    name: 'Congo',
    dial_code: '+242',
    emoji: '🇨🇬',
    code: 'CG',
  },
  {
    name: 'Congo, The Democratic Republic of the Congo',
    dial_code: '+243',
    emoji: '🇨🇩',
    code: 'CD',
  },
  {
    name: 'Cook Islands',
    dial_code: '+682',
    emoji: '🇨🇰',
    code: 'CK',
  },
  {
    name: 'Costa Rica',
    dial_code: '+506',
    emoji: '🇨🇷',
    code: 'CR',
  },
  {
    name: "Cote d'Ivoire",
    dial_code: '+225',
    emoji: '🇨🇮',
    code: 'CI',
  },
  {
    name: 'Croatia',
    dial_code: '+385',
    emoji: '🇭🇷',
    code: 'HR',
  },
  {
    name: 'Cuba',
    dial_code: '+53',
    emoji: '🇨🇺',
    code: 'CU',
  },
  {
    name: 'Cyprus',
    dial_code: '+357',
    emoji: '🇨🇾',
    code: 'CY',
  },
  {
    name: 'Czech Republic',
    dial_code: '+420',
    emoji: '🇨🇿',
    code: 'CZ',
  },
  {
    name: 'Denmark',
    dial_code: '+45',
    emoji: '🇩🇰',
    code: 'DK',
  },
  {
    name: 'Djibouti',
    dial_code: '+253',
    emoji: '🇩🇯',
    code: 'DJ',
  },
  {
    name: 'Dominica',
    dial_code: '+1767',
    emoji: '🇩🇲',
    code: 'DM',
  },
  {
    name: 'Dominican Republic',
    dial_code: '+1849',
    emoji: '🇩🇴',
    code: 'DO',
  },
  {
    name: 'Ecuador',
    dial_code: '+593',
    emoji: '🇪🇨',
    code: 'EC',
  },
  {
    name: 'Egypt',
    dial_code: '+20',
    emoji: '🇪🇬',
    code: 'EG',
  },
  {
    name: 'El Salvador',
    dial_code: '+503',
    emoji: '🇸🇻',
    code: 'SV',
  },
  {
    name: 'Equatorial Guinea',
    dial_code: '+240',
    emoji: '🇬🇶',
    code: 'GQ',
  },
  {
    name: 'Eritrea',
    dial_code: '+291',
    emoji: '🇪🇷',
    code: 'ER',
  },
  {
    name: 'Estonia',
    dial_code: '+372',
    emoji: '🇪🇪',
    code: 'EE',
  },
  {
    name: 'Ethiopia',
    dial_code: '+251',
    emoji: '🇪🇹',
    code: 'ET',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    dial_code: '+500',
    emoji: '🇫🇰',
    code: 'FK',
  },
  {
    name: 'Faroe Islands',
    dial_code: '+298',
    emoji: '🇫🇴',
    code: 'FO',
  },
  {
    name: 'Fiji',
    dial_code: '+679',
    emoji: '🇫🇯',
    code: 'FJ',
  },
  {
    name: 'Finland',
    dial_code: '+358',
    emoji: '🇫🇮',
    code: 'FI',
  },
  {
    name: 'France',
    dial_code: '+33',
    emoji: '🇫🇷',
    code: 'FR',
  },
  {
    name: 'French Guiana',
    dial_code: '+594',
    emoji: '🇬🇫',
    code: 'GF',
  },
  {
    name: 'French Polynesia',
    dial_code: '+689',
    emoji: '🇵🇫',
    code: 'PF',
  },
  {
    name: 'Gabon',
    dial_code: '+241',
    emoji: '🇬🇦',
    code: 'GA',
  },
  {
    name: 'Gambia',
    dial_code: '+220',
    emoji: '🇬🇲',
    code: 'GM',
  },
  {
    name: 'Georgia',
    dial_code: '+995',
    emoji: '🇬🇪',
    code: 'GE',
  },
  {
    name: 'Germany',
    dial_code: '+49',
    emoji: '🇩🇪',
    code: 'DE',
  },
  {
    name: 'Ghana',
    dial_code: '+233',
    emoji: '🇬🇭',
    code: 'GH',
  },
  {
    name: 'Gibraltar',
    dial_code: '+350',
    emoji: '🇬🇮',
    code: 'GI',
  },
  {
    name: 'Greece',
    dial_code: '+30',
    emoji: '🇬🇷',
    code: 'GR',
  },
  {
    name: 'Greenland',
    dial_code: '+299',
    emoji: '🇬🇱',
    code: 'GL',
  },
  {
    name: 'Grenada',
    dial_code: '+1473',
    emoji: '🇬🇩',
    code: 'GD',
  },
  {
    name: 'Guadeloupe',
    dial_code: '+590',
    emoji: '🇬🇵',
    code: 'GP',
  },
  {
    name: 'Guam',
    dial_code: '+1671',
    emoji: '🇬🇺',
    code: 'GU',
  },
  {
    name: 'Guatemala',
    dial_code: '+502',
    emoji: '🇬🇹',
    code: 'GT',
  },
  {
    name: 'Guernsey',
    dial_code: '+44',
    emoji: '🇬🇬',
    code: 'GG',
  },
  {
    name: 'Guinea',
    dial_code: '+224',
    emoji: '🇬🇳',
    code: 'GN',
  },
  {
    name: 'Guinea-Bissau',
    dial_code: '+245',
    emoji: '🇬🇼',
    code: 'GW',
  },
  {
    name: 'Guyana',
    dial_code: '+595',
    emoji: '🇬🇾',
    code: 'GY',
  },
  {
    name: 'Haiti',
    dial_code: '+509',
    emoji: '🇭🇹',
    code: 'HT',
  },
  {
    name: 'Holy See (Vatican City State)',
    dial_code: '+379',
    emoji: '🇻🇦',
    code: 'VA',
  },
  {
    name: 'Honduras',
    dial_code: '+504',
    emoji: '🇭🇳',
    code: 'HN',
  },
  {
    name: 'Hong Kong',
    dial_code: '+852',
    emoji: '🇭🇰',
    code: 'HK',
  },
  {
    name: 'Hungary',
    dial_code: '+36',
    emoji: '🇭🇺',
    code: 'HU',
  },
  {
    name: 'Iceland',
    dial_code: '+354',
    emoji: '🇮🇸',
    code: 'IS',
  },
  {
    name: 'India',
    dial_code: '+91',
    emoji: '🇮🇳',
    code: 'IN',
  },
  {
    name: 'Indonesia',
    dial_code: '+62',
    emoji: '🇮🇩',
    code: 'ID',
  },
  {
    name: 'Iran, Islamic Republic of Persian Gulf',
    dial_code: '+98',
    emoji: '🇮🇷',
    code: 'IR',
  },
  {
    name: 'Iraq',
    dial_code: '+964',
    emoji: '🇮🇷',
    code: 'IQ',
  },
  {
    name: 'Ireland',
    dial_code: '+353',
    emoji: '🇮🇪',
    code: 'IE',
  },
  {
    name: 'Isle of Man',
    dial_code: '+44',
    emoji: '🇮🇲',
    code: 'IM',
  },
  {
    name: 'Israel',
    dial_code: '+972',
    emoji: '🇮🇱',
    code: 'IL',
  },
  {
    name: 'Italy',
    dial_code: '+39',
    emoji: '🇮🇹',
    code: 'IT',
  },
  {
    name: 'Jamaica',
    dial_code: '+1876',
    emoji: '🇯🇲',
    code: 'JM',
  },
  {
    name: 'Japan',
    dial_code: '+81',
    emoji: '🇯🇵',
    code: 'JP',
  },
  {
    name: 'Jersey',
    dial_code: '+44',
    emoji: '🇯🇪',
    code: 'JE',
  },
  {
    name: 'Jordan',
    dial_code: '+962',
    emoji: '🇯🇴',
    code: 'JO',
  },
  {
    name: 'Kazakhstan',
    dial_code: '+77',
    emoji: '🇰🇿',
    code: 'KZ',
  },
  {
    name: 'Kenya',
    dial_code: '+254',
    emoji: '🇰🇪',
    code: 'KE',
  },
  {
    name: 'Kiribati',
    dial_code: '+686',
    emoji: '🇰🇮',
    code: 'KI',
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: '+850',
    emoji: '🇰🇵',
    code: 'KP',
  },
  {
    name: 'Korea, Republic of South Korea',
    dial_code: '+82',
    emoji: '🇰🇷',
    code: 'KR',
  },
  {
    name: 'Kuwait',
    dial_code: '+965',
    emoji: '🇰🇼',
    code: 'KW',
  },
  {
    name: 'Kyrgyzstan',
    dial_code: '+996',
    emoji: '🇰🇬',
    code: 'KG',
  },
  {
    name: 'Laos',
    dial_code: '+856',
    emoji: '🇱🇦',
    code: 'LA',
  },
  {
    name: 'Latvia',
    dial_code: '+371',
    emoji: '🇱🇻',
    code: 'LV',
  },
  {
    name: 'Lebanon',
    dial_code: '+961',
    emoji: '🇱🇧',
    code: 'LB',
  },
  {
    name: 'Lesotho',
    dial_code: '+266',
    emoji: '🇱🇸',
    code: 'LS',
  },
  {
    name: 'Liberia',
    dial_code: '+231',
    emoji: '🇱🇷',
    code: 'LR',
  },
  {
    name: 'Libyan Arab Jamahiriya',
    dial_code: '+218',
    emoji: '🇱🇾',
    code: 'LY',
  },
  {
    name: 'Liechtenstein',
    dial_code: '+423',
    emoji: '🇱🇮',
    code: 'LI',
  },
  {
    name: 'Lithuania',
    dial_code: '+370',
    emoji: '🇱🇹',
    code: 'LT',
  },
  {
    name: 'Luxembourg',
    dial_code: '+352',
    emoji: '🇱🇺',
    code: 'LU',
  },
  {
    name: 'Macao',
    dial_code: '+853',
    emoji: '🇲🇴',
    code: 'MO',
  },
  {
    name: 'Macedonia',
    dial_code: '+389',
    emoji: '🇲🇰',
    code: 'MK',
  },
  {
    name: 'Madagascar',
    dial_code: '+261',
    emoji: '🇲🇬',
    code: 'MG',
  },
  {
    name: 'Malawi',
    dial_code: '+265',
    emoji: '🇲🇼',
    code: 'MW',
  },
  {
    name: 'Malaysia',
    dial_code: '+60',
    emoji: '🇲🇾',
    code: 'MY',
  },
  {
    name: 'Maldives',
    dial_code: '+960',
    emoji: '🇲🇻',
    code: 'MV',
  },
  {
    name: 'Mali',
    dial_code: '+223',
    emoji: '🇲🇱',
    code: 'ML',
  },
  {
    name: 'Malta',
    dial_code: '+356',
    emoji: '🇲🇹',
    code: 'MT',
  },
  {
    name: 'Marshall Islands',
    dial_code: '+692',
    emoji: '🇲🇭',
    code: 'MH',
  },
  {
    name: 'Martinique',
    dial_code: '+596',
    emoji: '🇲🇶',
    code: 'MQ',
  },
  {
    name: 'Mauritania',
    dial_code: '+222',
    emoji: '🇲🇷',
    code: 'MR',
  },
  {
    name: 'Mauritius',
    dial_code: '+230',
    emoji: '🇲🇺',
    code: 'MU',
  },
  {
    name: 'Mayotte',
    dial_code: '+262',
    emoji: '🇾🇹',
    code: 'YT',
  },
  {
    name: 'Mexico',
    dial_code: '+52',
    emoji: '🇲🇽',
    code: 'MX',
  },
  {
    name: 'Micronesia, Federated States of Micronesia',
    dial_code: '+691',
    emoji: '🇫🇲',
    code: 'FM',
  },
  {
    name: 'Moldova',
    dial_code: '+373',
    emoji: '🇲🇩',
    code: 'MD',
  },
  {
    name: 'Monaco',
    dial_code: '+377',
    emoji: '🇲🇨',
    code: 'MC',
  },
  {
    name: 'Mongolia',
    dial_code: '+976',
    emoji: '🇲🇳',
    code: 'MN',
  },
  {
    name: 'Montenegro',
    dial_code: '+382',
    emoji: '🇲🇪',
    code: 'ME',
  },
  {
    name: 'Montserrat',
    dial_code: '+1664',
    emoji: '🇲🇸',
    code: 'MS',
  },
  {
    name: 'Morocco',
    dial_code: '+212',
    emoji: '🇲🇦',
    code: 'MA',
  },
  {
    name: 'Mozambique',
    dial_code: '+258',
    emoji: '🇲🇿',
    code: 'MZ',
  },
  {
    name: 'Myanmar',
    dial_code: '+95',
    emoji: '🇲🇲',
    code: 'MM',
  },
  {
    name: 'Namibia',
    emoji: '🇳🇦',
    dial_code: '+264',
    code: 'NA',
  },
  {
    name: 'Nauru',
    dial_code: '+674',
    emoji: '🇳🇷',
    code: 'NR',
  },
  {
    name: 'Nepal',
    dial_code: '+977',
    emoji: '🇳🇵',
    code: 'NP',
  },
  {
    name: 'Netherlands',
    dial_code: '+31',
    emoji: '🇳🇱',
    code: 'NL',
  },
  {
    name: 'Netherlands Antilles',
    dial_code: '+599',
    emoji: '🇧🇶',
    code: 'AN',
  },
  {
    name: 'New Caledonia',
    dial_code: '+687',
    emoji: '🇳🇨',
    code: 'NC',
  },
  {
    name: 'New Zealand',
    dial_code: '+64',
    emoji: '🇳🇿',
    code: 'NZ',
  },
  {
    name: 'Nicaragua',
    dial_code: '+505',
    emoji: '🇳🇮',
    code: 'NI',
  },
  {
    name: 'Niger',
    dial_code: '+227',
    emoji: '🇳🇪',
    code: 'NE',
  },
  {
    name: 'Nigeria',
    dial_code: '+234',
    emoji: '🇳🇬',
    code: 'NG',
  },
  {
    name: 'Niue',
    dial_code: '+683',
    emoji: '🇳🇺',
    code: 'NU',
  },
  {
    name: 'Norfolk Island',
    dial_code: '+672',
    emoji: '🇳🇫',
    code: 'NF',
  },
  {
    name: 'Northern Mariana Islands',
    dial_code: '+1670',
    emoji: '🇲🇵',
    code: 'MP',
  },
  {
    name: 'Norway',
    dial_code: '+47',
    emoji: '🇳🇴',
    code: 'NO',
  },
  {
    name: 'Oman',
    dial_code: '+968',
    emoji: '🇴🇲',
    code: 'OM',
  },
  {
    name: 'Pakistan',
    dial_code: '+92',
    emoji: '🇵🇰',
    code: 'PK',
  },
  {
    name: 'Palau',
    dial_code: '+680',
    emoji: '🇵🇼',
    code: 'PW',
  },
  {
    name: 'Palestinian Territory, Occupied',
    dial_code: '+970',
    emoji: '🇵🇸',
    code: 'PS',
  },
  {
    name: 'Panama',
    dial_code: '+507',
    emoji: '🇵🇦',
    code: 'PA',
  },
  {
    name: 'Papua New Guinea',
    dial_code: '+675',
    emoji: '🇵🇬',
    code: 'PG',
  },
  {
    name: 'Paraguay',
    dial_code: '+595',
    emoji: '🇵🇾',
    code: 'PY',
  },
  {
    name: 'Peru',
    dial_code: '+51',
    emoji: '🇵🇪',
    code: 'PE',
  },
  {
    name: 'Philippines',
    dial_code: '+63',
    emoji: '🇵🇭',
    code: 'PH',
  },
  {
    name: 'Pitcairn',
    dial_code: '+872',
    emoji: '🇵🇳',
    code: 'PN',
  },
  {
    name: 'Poland',
    dial_code: '+48',
    emoji: '🇵🇱',
    code: 'PL',
  },
  {
    name: 'Portugal',
    dial_code: '+351',
    emoji: '🇵🇹',
    code: 'PT',
  },
  {
    name: 'Puerto Rico',
    dial_code: '+1939',
    emoji: '🇵🇷',
    code: 'PR',
  },
  {
    name: 'Qatar',
    dial_code: '+974',
    emoji: '🇶🇦',
    code: 'QA',
  },
  {
    name: 'Romania',
    dial_code: '+40',
    emoji: '🇷🇴',
    code: 'RO',
  },
  {
    name: 'Russia',
    dial_code: '+7',
    emoji: '🇷🇺',
    code: 'RU',
  },
  {
    name: 'Rwanda',
    dial_code: '+250',
    emoji: '🇷🇼',
    code: 'RW',
  },
  {
    name: 'Reunion',
    dial_code: '+262',
    emoji: '🇷🇪',
    code: 'RE',
  },
  {
    name: 'Saint Barthelemy',
    dial_code: '+590',
    emoji: '🇧🇱',
    code: 'BL',
  },
  {
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
    dial_code: '+290',
    emoji: '🇸🇭',
    code: 'SH',
  },
  {
    name: 'Saint Kitts and Nevis',
    dial_code: '+1869',
    emoji: '🇰🇳',
    code: 'KN',
  },
  {
    name: 'Saint Lucia',
    dial_code: '+1758',
    emoji: '🇱🇨',
    code: 'LC',
  },
  {
    name: 'Saint Martin',
    dial_code: '+590',
    emoji: '🇲🇫',
    code: 'MF',
  },
  {
    name: 'Saint Pierre and Miquelon',
    dial_code: '+508',
    emoji: '🇵🇲',
    code: 'PM',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    dial_code: '+1784',
    emoji: '🇻🇨',
    code: 'VC',
  },
  {
    name: 'Samoa',
    dial_code: '+685',
    emoji: '🇼🇸',
    code: 'WS',
  },
  {
    name: 'San Marino',
    dial_code: '+378',
    emoji: '🇸🇲',
    code: 'SM',
  },
  {
    name: 'Sao Tome and Principe',
    dial_code: '+239',
    emoji: '🇸🇹',
    code: 'ST',
  },
  {
    name: 'Saudi Arabia',
    dial_code: '+966',
    emoji: '🇸🇦',
    code: 'SA',
  },
  {
    name: 'Senegal',
    dial_code: '+221',
    emoji: '🇸🇳',
    code: 'SN',
  },
  {
    name: 'Serbia',
    dial_code: '+381',
    emoji: '🇷🇸',
    code: 'RS',
  },
  {
    name: 'Seychelles',
    dial_code: '+248',
    emoji: '🇸🇨',
    code: 'SC',
  },
  {
    name: 'Sierra Leone',
    dial_code: '+232',
    emoji: '🇸🇱',
    code: 'SL',
  },
  {
    name: 'Singapore',
    dial_code: '+65',
    emoji: '🇸🇬',
    code: 'SG',
  },
  {
    name: 'Slovakia',
    dial_code: '+421',
    emoji: '🇸🇰',
    code: 'SK',
  },
  {
    name: 'Slovenia',
    dial_code: '+386',
    emoji: '🇸🇮',
    code: 'SI',
  },
  {
    name: 'Solomon Islands',
    dial_code: '+677',
    emoji: '🇸🇧',
    code: 'SB',
  },
  {
    name: 'Somalia',
    dial_code: '+252',
    emoji: '🇸🇴',
    code: 'SO',
  },
  {
    name: 'South Africa',
    dial_code: '+27',
    emoji: '🇿🇦',
    code: 'ZA',
  },
  {
    name: 'South Sudan',
    dial_code: '+211',
    emoji: '🇸🇸',
    code: 'SS',
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    dial_code: '+500',
    emoji: '🇬🇸',
    code: 'GS',
  },
  {
    name: 'Spain',
    dial_code: '+34',
    emoji: '🇪🇸',
    code: 'ES',
  },
  {
    name: 'Sri Lanka',
    dial_code: '+94',
    emoji: '🇱🇰',
    code: 'LK',
  },
  {
    name: 'Sudan',
    dial_code: '+249',
    emoji: '🇸🇩',
    code: 'SD',
  },
  {
    name: 'Suriname',
    dial_code: '+597',
    emoji: '🇸🇷',
    code: 'SR',
  },
  {
    name: 'Svalbard and Jan Mayen',
    dial_code: '+47',
    emoji: '🇸🇯',
    code: 'SJ',
  },
  {
    name: 'Swaziland',
    dial_code: '+268',
    emoji: '🇸🇿',
    code: 'SZ',
  },
  {
    name: 'Sweden',
    dial_code: '+46',
    emoji: '🇸🇪',
    code: 'SE',
  },
  {
    name: 'Switzerland',
    dial_code: '+41',
    emoji: '🇨🇭',
    code: 'CH',
  },
  {
    name: 'Syrian Arab Republic',
    dial_code: '+963',
    emoji: '🇸🇾',
    code: 'SY',
  },
  {
    name: 'Taiwan',
    dial_code: '+886',
    emoji: '🇹🇼',
    code: 'TW',
  },
  {
    name: 'Tajikistan',
    dial_code: '+992',
    emoji: '🇹🇯',
    code: 'TJ',
  },
  {
    name: 'Tanzania, United Republic of Tanzania',
    dial_code: '+255',
    emoji: '🇹🇿',
    code: 'TZ',
  },
  {
    name: 'Thailand',
    dial_code: '+66',
    emoji: '🇹🇭',
    code: 'TH',
  },
  {
    name: 'Timor-Leste',
    dial_code: '+670',
    emoji: '🇹🇱',
    code: 'TL',
  },
  {
    name: 'Togo',
    dial_code: '+228',
    emoji: '🇹🇬',
    code: 'TG',
  },
  {
    name: 'Tokelau',
    dial_code: '+690',
    emoji: '🇹🇰',
    code: 'TK',
  },
  {
    name: 'Tonga',
    dial_code: '+676',
    emoji: '🇹🇴',
    code: 'TO',
  },
  {
    name: 'Trinidad and Tobago',
    dial_code: '+1868',
    emoji: '🇹🇹',
    code: 'TT',
  },
  {
    name: 'Tunisia',
    dial_code: '+216',
    emoji: '🇹🇳',
    code: 'TN',
  },
  {
    name: 'Turkey',
    dial_code: '+90',
    emoji: '🇹🇷',
    code: 'TR',
  },
  {
    name: 'Turkmenistan',
    dial_code: '+993',
    emoji: '🇹🇲',
    code: 'TM',
  },
  {
    name: 'Turks and Caicos Islands',
    dial_code: '+1649',
    emoji: '🇹🇨',
    code: 'TC',
  },
  {
    name: 'Tuvalu',
    dial_code: '+688',
    emoji: '🇹🇻',
    code: 'TV',
  },
  {
    name: 'Uganda',
    dial_code: '+256',
    emoji: '🇺🇬',
    code: 'UG',
  },
  {
    name: 'Ukraine',
    dial_code: '+380',
    emoji: '🇺🇦',
    code: 'UA',
  },
  {
    name: 'United Arab Emirates',
    dial_code: '+971',
    emoji: '🇦🇪',
    code: 'AE',
  },
  {
    name: 'United Kingdom',
    dial_code: '+44',
    emoji: '🇬🇧',
    code: 'GB',
  },
  {
    name: 'United States',
    dial_code: '+1',
    emoji: '🇺🇸',
    code: 'US',
  },
  {
    name: 'Uruguay',
    dial_code: '+598',
    emoji: '🇺🇾',
    code: 'UY',
  },
  {
    name: 'Uzbekistan',
    dial_code: '+998',
    emoji: '🇺🇿',
    code: 'UZ',
  },
  {
    name: 'Vanuatu',
    dial_code: '+678',
    emoji: '🇻🇺',
    code: 'VU',
  },
  {
    name: 'Venezuela, Bolivarian Republic of Venezuela',
    dial_code: '+58',
    emoji: '🇻🇪',
    code: 'VE',
  },
  {
    name: 'Vietnam',
    dial_code: '+84',
    emoji: '🇻🇳',
    code: 'VN',
  },
  {
    name: 'Virgin Islands, British',
    dial_code: '+1284',
    emoji: '🇻🇬',
    code: 'VG',
  },
  {
    name: 'Virgin Islands, U.S.',
    dial_code: '+1340',
    emoji: '🇻🇮',
    code: 'VI',
  },
  {
    name: 'Wallis and Futuna',
    dial_code: '+681',
    emoji: '🇼🇫',
    code: 'WF',
  },
  {
    name: 'Yemen',
    dial_code: '+967',
    emoji: '🇾🇪',
    code: 'YE',
  },
  {
    name: 'Zambia',
    dial_code: '+260',
    emoji: '🇿🇲',
    code: 'ZM',
  },
  {
    name: 'Zimbabwe',
    dial_code: '+263',
    emoji: '🇿🇼',
    code: 'ZW',
  },
];

export const CARDS = [
  {
    cardNumber: '4242424242424242',
    cardName: 'John Doe',
    cardType: 'visa',
    expiryDate: '1223',
    cvv: '123',
    isDefault: true,
  },
  {
    cardNumber: '4242424242424242',
    cardName: 'Tset card',
    cardType: 'mastercard',
    expiryDate: '1223',
    cvv: '456',
    isDefault: false,
  },
];

export const PEOPLE = [
  {
    name: 'Caleb Joe',
    image:
      'https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet.',
    rating: 4.5,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
        Sit at nisl accumsan feugiat etiam vivamus tempor. \
       Sagittis id mi integer lectus quis praesent velit eget. Sed eu id consequat amet congue ultricies. at nisl accumsan feugiat etiam vivamus tempor.',
  },
  {
    name: 'Emma Nike',
    image:
      'https://images.pexels.com/photos/24244074/pexels-photo-24244074/free-photo-of-processed-with-vsco-with-av8-preset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    rating: 5,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor. \
        Sagittis id mi integer lectus quis praesent velit eget. Sed eu id consequat amet congue ultricies.',
  },
  {
    name: 'Xavi Hernandez',
    image:
      'https://images.pexels.com/photos/13189881/pexels-photo-13189881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet 🧡🧡',
    rating: 4,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor',
  },
  {
    name: 'Zinedine Zidane',
    image:
      'https://images.pexels.com/photos/2404662/pexels-photo-2404662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    rating: 5,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor. \
        Sagittis id mi integer lectus quis praesent velit eget. Sed eu id consequat amet congue ultricies.',
  },
  {
    name: 'Carlos Ancelotti',
    image:
      'https://images.pexels.com/photos/2364607/pexels-photo-2364607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet 🧡🧡',
    rating: 4,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor',
  },
  {
    name: 'Pep Guordiola',
    image:
      'https://images.pexels.com/photos/2737003/pexels-photo-2737003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    rating: 5,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor. \
        Sagittis id mi integer lectus quis praesent velit eget. Sed eu id consequat amet congue ultricies.',
  },
  {
    name: 'Jurgenn Klopp',
    image:
      'https://images.pexels.com/photos/1853351/pexels-photo-1853351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet 🧡🧡',
    rating: 4,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor',
  },
  {
    name: 'Lionel Scalloni',
    image:
      'https://images.pexels.com/photos/2451600/pexels-photo-2451600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    rating: 5,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor. \
        Sagittis id mi integer lectus quis praesent velit eget. Sed eu id consequat amet congue ultricies.',
  },
  {
    name: 'Arsene Wenger',
    image:
      'https://images.pexels.com/photos/1804665/pexels-photo-1804665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Lorem ipsum dolor sit amet 🧡🧡',
    rating: 4,
    passage:
      'Lorem ipsum dolor sit amet consectetur. Sollicitudin ultricies lorem pellentesque turpis a ultricies augue elementum scelerisque.\
         Sit at nisl accumsan feugiat etiam vivamus tempor',
  },
];

export type TDummy_Plans = {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  bestValue: boolean;
  features: {
    description: string;
    available: string;
  }[];
};

export const DUMMY_PLANS = [
  {
    id: '1',
    title: 'Free',
    description: 'Free',
    price: 0,
    discount: 0,
    bestValue: false,
    features: [
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: false,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: false,
      },
    ],
  },
  {
    id: '2',
    title: 'Monthly',
    description: 'monthly',
    price: 50,
    discount: 0,
    bestValue: false,
    features: [
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: false,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: false,
      },
    ],
  },
  {
    id: '3',
    title: 'Quaterly',
    description: 'quaterly',
    price: 99,
    discount: 50,
    totalAmount: 105,
    totalDuration: 'billed for 3 months',
    bestValue: false,
    features: [
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
    ],
  },
  {
    id: '4',
    title: 'Annual',
    description: 'monthly',
    price: 199,
    discount: 60,
    totalAmount: 300,
    totalDuration: 'billed annually',
    saveUpto: 50,
    bestValue: true,
    features: [
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
    ],
  },
  {
    id: '5',
    title: 'Lifetime',
    description: 'monthly',
    price: 15,
    discount: 0,
    totalAmount: 2000,
    totalDuration: 'billed for lifetime',
    bestValue: false,
    features: [
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur.',
        available: true,
      },
      {
        description:
          'Neque aliquet eu consequat tempus ultricies commodo enim.',
        available: true,
      },
    ],
  },
];

export const DEVICES = [
  {
    id: '1',
    user: 'User 1',
    device: 'pc',
    deviceType: 'Chrome',
    ipAddress: '192.158.1.38',
    location: 'Venice, Italy',
    recentActivity: new Date().toDateString(),
  },
  {
    id: '2',
    user: 'User 2',
    device: 'pc',
    deviceType: 'Chrome',
    ipAddress: '192.158.1.38',
    location: 'Karachi, Pakistan',
    recentActivity: new Date().toDateString(),
  },
  {
    id: '3',
    user: 'User 3',
    device: 'mobile',
    deviceType: 'IOS',
    ipAddress: '192.158.1.38',
    location: 'Dubai, UAE',
    recentActivity: new Date().toDateString(),
  },
  {
    id: '4',
    user: 'User 4',
    device: 'pc',
    deviceType: 'Chrome',
    ipAddress: '192.158.1.38',
    location: 'Karachi, Pakistan',
    recentActivity: new Date().toDateString(),
  },
  {
    id: '5',
    user: 'User 5',
    device: 'pc',
    deviceType: 'Chrome',
    ipAddress: '192.158.1.38',
    location: 'Dubai, UAE',
    recentActivity: new Date().toDateString(),
  },
];

export const PLANS = [
  {
    feature: 'Lorem ipsum dolor sit amet consectetur',
    monthly: 'Yes',
    quaterly: '-',
    annually: 'Yes',
    lifetime: 'Yes',
  },
  {
    feature: 'Lorem ipsum dolor sit amet consectetur',
    monthly: 'Yes',
    quaterly: '-',
    annually: 'Yes',
    lifetime: 'Yes',
  },
  {
    feature: 'Lorem ipsum dolor sit amet consectetur',
    monthly: '-',
    quaterly: 'Yes',
    annually: 'Yes',
    lifetime: 'Yes',
  },
];

export const REFERRAL_HISTORY = [
  {
    id: '1',
    userName: 'Marco',
    activities: 'subscribed',
    date: new Date().toLocaleDateString(),
  },
  {
    id: '2',
    userName: 'Jordyn Rangel',
    activities: 'subscribed',
    date: new Date().toLocaleDateString(),
  },
  {
    id: '3',
    userName: 'Jordyn Rangel',
    activities: 'Joined',
    date: new Date().toLocaleDateString(),
  },
];

export const FEEDBACKS = [
  {
    page: 1,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    review:
      "<p>You can't really just print the custom logs into the console with Winston. Winston was actually built to save logs; you can download them later or look at them through some other service. So, if you are looking for a logger with a dashboard, maybe look for something else that fits better, there is one <a href='https://github.com/errsole/errsole.js' rel='nofollow noreferrer'>errsole.js</a> opensource.</p>",
    userType: 'Student',
    replies: [
      {
        name: 'Kevin Hart',
        userType: 'Author',
        image:
          'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Thank you for your feedback.',
      },
    ],
  },
  {
    page: 1,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    review:
      "<div class='s-prose js-post-body' itemprop='text'><p>A couple of thing i would try:</p><p>I would make myself sure that the <code>JWKSelector</code> used by the <code>NimbusJwtEncoder</code> matches exactly the criteria you expect, Otherwise the selector could be looking for specific attributes (like use or alg) that you did not define.</p><p>I would also add an exception or loggin error to help with the debugging processfor JWKSource</p><p>Lastly you could try siplyfy the configuration before testing to see if there is anything abnormal, something like this:</p><pre class='lang-java s-code-block' style='position: relative;'><code class='hljs language-java'><span class='hljs-comment'>/* rest of code */</span><span class='hljs-meta'>@Bean</span><span class='hljs-keyword'>public</span> JwtEncoder <span class='hljs-title function_'>jwtEncoder</span><span class='hljs-params'>()</span> {    <span class='hljs-type'>String</span> <span class='hljs-variable'>jwtSecret</span> <span class='hljs-operator'>=</span> <span class='hljs-string'>'your-secret-key'</span>; <span class='hljs-comment'>// non-Base64 encoded secret for testing</span>    <span class='hljs-type'>SecretKeySpec</span> <span class='hljs-variable'>secretKeySpec</span> <span class='hljs-operator'>=</span> <span class='hljs-keyword'>new</span> <span class='hljs-title class_'>SecretKeySpec</span>(jwtSecret.getBytes(), <span class='hljs-string'>'HmacSHA256'</span>);    <span class='hljs-keyword'>return</span> <span class='hljs-keyword'>new</span> <span class='hljs-title class_'>NimbusJwtEncoder</span>(secretKeySpec);}<span class='hljs-comment'>/* rest of code */</span></code><div class='open_grepper_editor' title='Edit &amp; Save To Grepper'></div></pre><p>If this configuration works without errors, the issue is probably in the custom JWK selection logic, publish your findings after this and we go from there</p></div>",
    userType: 'Student',
    replies: [],
  },
  {
    page: 1,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 1,
    name: 'Octavia',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 2,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 2,
    name: 'Octavia',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 2,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 2,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 3,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 3,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 3,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 3,
    name: 'Octavia',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 4,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 4,
    name: 'Octavia',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 4,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 4,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 5,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 5,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 5,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 5,
    name: 'Octavia',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 6,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 6,
    name: 'Octavia',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 6,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 6,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 7,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 7,
    name: 'Mike Hanson',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 7,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 7,
    name: 'Octavia',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 8,
    name: 'Katy Perri',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 8,
    name: 'Octavia',
    userId: 12,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 3.5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
  {
    page: 8,
    name: 'Lily Snow',
    userId: 13,
    image:
      'https://s3-alpha-sig.figma.com/img/5c77/196f/3951263d11a50896f1c4c4313dd4b57b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7RNPJm4U95MCKWXKuVOmaC5R5Nee7gplbPbv5ZC5vaXOBGVKnRXsb3az4u4syrSubcrHZfgHRFxReUTQWYJNIZwiuckvXwUfuA27HWW5mtrkwzMKx0KNXR7FYGPVTqIPxN9HlwugqVO4Dx9uknRE~sbYVjIfSr2W8kyVcoBLcNt5gt5p1ar~CnCj7hc6EX2Nxp6D7N8rT6WfEkkAHULknqufmhsIz~69H97jCDpUVvF-X9WViiyagXzYpK-t9p~paKM9-eXfWOUpRVlRKE9b0vVOMHk139KtBbeLBY2sfrr3Vmqiu887UZ6Sg4528hk5EW8RvvoHRhG9-4pNuNd9Q__',
    rating: 4.6,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi at ipsum maximus gravida eu nec arcu.',
    userType: 'Student',
    replies: [],
  },
];
