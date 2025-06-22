import { store } from '@/store/store';
import { TPackageFeatures } from './../store/membership/membershipSlice';
import * as yup from 'yup';
import UniversalCookie from 'universal-cookie';

export const changeTheme = (theme: string) => {
  document.querySelector('html')?.setAttribute('data-theme', theme);
};

export const getCardType = (cardNumber: string) => {
  const visaRegex = /^4/;
  const mastercardRegex = /^5[1-5]/;

  if (visaRegex.test(cardNumber)) {
    return 'visa';
  } else if (mastercardRegex.test(cardNumber)) {
    return 'master-card';
  }
  return 'unknown';
};

export function convertToTime(decimalHours: number) {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);

  // Ensure minutes are always two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes}`;
}

export const formatTime = (time: any) => {
  //formarting duration of video
  if (isNaN(time)) {
    return '00:00';
  }

  const date = new Date(time * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  if (hours) {
    //if video have hours
    return `${hours}:${minutes.toString().padStart(2, '0')} `;
  } else return `${minutes}:${seconds}`;
};

export const convertTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return date.toLocaleString('en-US', options).replace(',', '');
};

import {
  format,
  parseISO,
  parse,
  getTime,
  intervalToDuration,
  formatDuration,
} from 'date-fns';
import moment from 'moment';
import {
  TCourse,
  TCourseDetails,
  TCourseLanguages,
  TPodcast,
} from '@/store/influencer/influencerSlice';

export function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export const formatDateFns = (inputDate: string) => {
  if (inputDate) {
    const desiredFormat = 'yyyy-MM-dd HH:mm:ss';

    const formattedDate = format(new Date(inputDate), desiredFormat);

    return formattedDate;
  }
};

export const formatDateAndTime = (dateString: string) => {
  const date = parseISO(dateString);

  const formattedDate = format(date, 'MMM do, yyyy');
  const formattedTime = format(date, 'h:mm a');

  return {
    formattedDate,
    formattedTime,
  };
};

export const formatStringToDOB = (isoDateString: string) => {
  if (isoDateString) {
    const date = parseISO(isoDateString);

    const formattedDate = format(date, 'yyyy-MM-dd');

    return formattedDate.toString();
  }
};

export const formatDate = (dateString: string): string => {
  return moment(dateString).format('D MMMM, YYYY');
};

export function formatTimestampToTime(timestamp: string): string {
  const formattedTime = moment(timestamp).format('hh:mm A');
  return formattedTime;
}

export function convertToDateFormat(isoString: string) {
  const date = new Date(isoString); // Parse the ISO string into a Date object

  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function formatDateNormal(dateString: string) {
  if (dateString) {
    // Parse the ISO date string
    const date = parseISO(dateString);

    // Extract the day, month, and year
    const day = date.getDate();
    const month = format(date, 'MMMM');
    const year = date.getFullYear();

    // Get the ordinal suffix for the day
    const ordinalSuffix = getOrdinalSuffix(day);

    // Return the formatted date string
    return `${day}${ordinalSuffix} ${month} ${year}`;
  }
}

export const formatUnixTimestamp = (dateString: string) => {
  const date = parse(dateString, 'do MMM yyyy', new Date());

  // Convert the Date object to a Unix timestamp in milliseconds
  const timestamp = getTime(date);

  return timestamp;
};

export const transformPackageFeatureObject = (packages: TPackageFeatures[]) => {
  const transformed: {
    feature: string;
  }[] = [];

  packages[0].pkgFeatureStates.forEach((featureObj, index) => {
    const newFeature: any = { feature: featureObj.feature };

    packages.forEach((pkg) => {
      newFeature[pkg.name.toLowerCase()] = pkg.pkgFeatureStates[index].state
        ? 'Yes'
        : 'No';
    });

    transformed.push(newFeature);
  });

  return transformed;
};

export const filterParams = (params: object) => {
  let queryParams = Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== '' && // Check for empty string
        (!Array.isArray(value) || value.length > 0) &&
        (Array.isArray(value) || value.length !== 0)
    )
  );

  if (Object.entries(queryParams).length) {
    return queryParams;
  }

  // return queryParams;
};

export const generateAbsoluteImageUrl = (imageId: string | null): string => {
  if (!imageId) return '/img/extras/default.svg';
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/client/media/image/${imageId}?token=${store.getState().user.accessToken}`;
};

export const generateAbsoluteVideoSubtitle = (
  subtitleField: string | null
): string => {
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/public/media/subtitle/video/${subtitleField}?token=${store.getState().user.accessToken}`;
};

export const generateAbsolutePublicVideoSubtitle = (
  subtitleField: string | null
): string => {
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/public/subtitle/video/${subtitleField}`;
};

export const generateAbsoluteImageUrlSync = (
  imageId: string | null
): string => {
  if (!imageId) return '/img/extras/default.svg';
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/client/media/image/${imageId}?token=${store.getState().user.accessToken}`;
};

export const generateAbsoluteVideoUrl = (videoId: string | null): string => {
  if (!videoId) return '/img/extras/default.svg';
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/client/media/stream/${videoId}?token=${store.getState().user.accessToken}`;
};

export const generatePublicAbsoluteImageUrl = (
  imageId: string | null
): string => {
  if (!imageId) return '/img/extras/default.svg';
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/public/media/image/${imageId}`;
};

export const generatePublicAbsoluteVideoUrl = (
  videoId: string | null
): string => {
  if (!videoId) return '/img/extras/default.svg';
  return `${
    process.env.NEXT_PUBLIC_FTP_BASE_URL
  }/public/media/stream/${videoId}`;
};

export const extractVideoIdFromUrl = (url: string): string | null => {
  try {
    const videoIdMatch = url.match(/\/media\/stream\/([^/]+)/);
    return videoIdMatch ? videoIdMatch[1] : null;
  } catch (error) {
    console.error('Error extracting videoId:', error);
    return null;
  }
};

export const removeSlashFromStart = (value: string) => {
  return value.replace(/^\/+/, '');
};

export const transformCourseCard = async (courses: TCourse[]) => {
  try {
    return courses?.map((_course) => ({
      label: _course.course.title,
      image: _course.course.thumbnail
        ? generatePublicAbsoluteImageUrl(_course.course.thumbnail.imageId)
        : 'https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: Number(Number(_course.averageRating).toFixed(2)),
      views: _course.numberOfReviews,
      influencerSlug: _course.course._id,
      link: _course.course._id,
    }));
  } catch (error) {
    console.log({ error });
  }
};

export const transformCourseCardSync = (courses: TCourse[]) => {
  return courses.map((_course) => ({
    label: _course.course.title,
    image: _course.course.thumbnail
      ? generatePublicAbsoluteImageUrl(_course.course.thumbnail.imageId)
      : 'https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: Number(Number(_course.averageRating).toFixed(2)),
    views: _course.numberOfReviews,
    influencerSlug: '',
    link: `/${_course.course._id}`,
    isInLibrary: _course.isInLibrary,
  }));
};

export const transformPodcastCardSync = (podcasts: TPodcast[]) => {
  return podcasts?.map((_podcast) => ({
    label: _podcast.title,
    image: _podcast.thumbnail?.imageId
      ? generatePublicAbsoluteImageUrl(_podcast.thumbnail.imageId)
      : 'https://plus.unsplash.com/premium_photo-1683195787943-deceacb3f1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    podcastSlug: _podcast._id,
    link: _podcast._id,
  }));
};

import Cookies from 'js-cookie';
import { Option } from '@/components/common/GlobalAutoComplete';
import { TThemeColor } from '@/store/theme/types/Ttheme.type';
import { COUNTRYCODES } from './constants';

export function updateCookie(name: string, value: object, days: number) {
  Cookies.set(name, JSON.stringify(value), { expires: days, path: '/' });
}

export const generateProfileImageUrl = (imageId: string) =>
  `${process.env.NEXT_PUBLIC_FTP_BASE_URL}/public/media/image/${imageId}`;

export const getThemeLocalStorage = () => localStorage.getItem('theme');

export const setThemeLocalStorage = (theme: TThemeColor) =>
  localStorage.setItem('theme', theme);

export const getCourseLocalStorage = () =>
  localStorage.getItem('personalityScore');

export const setCourseLocalStorage = (score: string) =>
  localStorage.setItem('personalityScore', score);

export const transformCourseChapterResponse = (
  course: TCourseDetails,
  language:
    | (Option & {
        languageId: string;
      })
    | null
) => {
  const filteredLanguageChapters = course.course.chapters.filter(
    (chapter) => chapter.language._id === language?.languageId
  );

  return filteredLanguageChapters.map((_chapter) => ({
    _id: _chapter._id,
    id: _chapter.chapterNumber,
    name: _chapter.title,
    progress: _chapter?.progress?.lastWatchTime || 0,
    watched: `${(_chapter?.progress?.lastWatchTime || 0) > 60 ? ((_chapter?.progress?.lastWatchTime || 0) / 60).toFixed(2) || 0 : _chapter?.progress?.lastWatchTime?.toFixed(2) || 0} of ${(_chapter?.duration || 0) > 60 ? `${((_chapter?.duration || 0) / 60).toFixed(2)}m` : (_chapter?.duration || 0).toFixed(2) || 0}s`,
    minutes: _chapter.duration > 60 ? (_chapter.duration / 60).toString() : '0',
    seconds: _chapter.duration,
    completedPercentage: _chapter.completedPercentage,
  }));
};

export const filterLanguageCourseDetails = (
  courseDetails: TCourseDetails | null,
  language:
    | (Option & {
        languageId: string;
      })
    | null
) => {
  if (courseDetails) {
    const filteredLanguageCourseChapters =
      courseDetails?.course.chapters.filter(
        (chapter) => chapter.language._id === language?.languageId
      );

    const filterLanguageCourseTotalDuration =
      filteredLanguageCourseChapters.reduce(
        (acc, currVal) => acc + currVal.duration,
        0
      );

    const totalChapterDuration = formatDurationData(
      filterLanguageCourseTotalDuration
    );

    const filteredLanguageDescription =
      courseDetails.course.courseDescriptions?.find(
        (course) => course.language._id === language?.languageId
      );

    const filteredLanguageTrailer = courseDetails.trailers?.filter(
      (chapter) => chapter.language._id === language?.languageId
    )[0];

    const filteredLanguageThumbnail = courseDetails.thumbnails?.filter(
      (chapter) => chapter.language._id === language?.languageId
    )[0];

    return {
      filteredLanguageCourseChapters,
      filteredLanguageDescription,
      filteredLanguageTrailer,
      filteredLanguageThumbnail,
      filterLanguageCourseTotalDuration,
      totalChapterDuration,
    };
  }
};

export const transformCourseLanguage = (courseLanguage: TCourseLanguages[]) => {
  return courseLanguage.map((language) => ({
    id: language.countryCode,
    label: language.name,
    languageId: language._id,
  }));
};

export const generateTotalCourseMinutes = (
  course: {
    id: number;
    name: string;
    progress: number;
    watched: string;
    minutes: string;
    completedPercentage: number;
  }[]
) => {
  let initialValue = 0;
  let result = course.reduce(
    (acc, curr) => acc + Number(curr.minutes),
    initialValue
  );

  return result;
};

export function formatTimeFromSeconds(seconds: number): string {
  // Convert seconds into a duration object
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  // Format the duration object into a readable string
  const formattedDuration = formatDuration(duration, {
    format: ['hours', 'minutes', 'seconds'],
  });

  return formattedDuration || '0 seconds';
}

export function camelToCapitalized(text: string) {
  // Insert a space before each uppercase letter and capitalize the first word
  const result = text
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
  return result;
}

export function checkValueType(value: string) {
  if (value.trim().endsWith('*')) {
    return true;
  }
  return false;
}

export function getTimeUnit(seconds: number) {
  if (seconds < 60) {
    return `${seconds} s`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return remainingSeconds > 0
      ? `${minutes} m and ${remainingSeconds} s`
      : `${minutes} m`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    return remainingMinutes > 0
      ? `${hours} h and ${remainingMinutes} m`
      : `${hours} h`;
  }
}

export const returnDateAndTimeString = (dateString: string) => {
  const date = new Date(dateString);

  // Format date as 'MMM do, yyyy' (e.g., Feb 23rd, 2024)
  const formattedDate = format(date, 'MMM do, yyyy');

  // Format time as 'h:mm a' (e.g., 6:30 PM)
  const formattedTime = format(date, 'h:mm a');

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const formatSecondsToTime = (seconds: number) => {
  // Convert the seconds to an integer value for whole seconds
  const totalSeconds = Math.floor(seconds);

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  // Format the minutes and seconds as 'mm:ss'
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export function formatDurationData(seconds: number) {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  if (duration.hours && duration.minutes) {
    const hoursStr =
      duration.hours > 0
        ? `${duration.hours} hour${duration.hours > 1 ? 's' : ''}`
        : '';
    const minutesStr =
      duration.minutes > 0
        ? `${duration.minutes} minute${duration.minutes > 1 ? 's' : ''}`
        : '';

    return [hoursStr, minutesStr].filter(Boolean).join(' ');
  }
  return `${duration.seconds} seconds`;
}

export const changeDangerouslyHtmlImages = (htmlString: string) => {
  // Create a new DOM parser
  const parser = new DOMParser();
  // Parse the HTML string into a document
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Select all images in the parsed HTML
  const images = doc.querySelectorAll('img');

  // Loop through each image and update its source or any other attribute
  images.forEach((img) => {
    // Change the source of the image (you can customize the URL)
    img.width = 30;
    img.height = 30;
    // You can also modify other attributes like 'alt', 'width', 'height', etc.
  });

  // Return the modified HTML as a string
  return doc.body.innerHTML;
};

export function splitPhoneNumber(fullPhoneNumber: string): {
  dial_code: string;
  remainingNumber: string;
} {
  for (let i = 0; i < COUNTRYCODES.length; i++) {
    const { dial_code } = COUNTRYCODES[i];
    if (fullPhoneNumber && fullPhoneNumber.startsWith(dial_code)) {
      const remainingNumber = fullPhoneNumber.slice(dial_code.length);
      return {
        dial_code,
        remainingNumber,
      };
    }
  }

  return {
    dial_code: '',
    remainingNumber: '',
  };
}

export function getCookieToken() {
  const cookie = new UniversalCookie();

  const token = cookie.get('access_token');
  return token;
}
