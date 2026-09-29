export type Language = 'en' | 'te';

export interface CeremonyEvent {
  id: string;
  titleEn: string;
  titleTe: string;
  ritualEn: string;
  ritualTe: string;
  dateEn: string;
  dateTe: string;
  timeEn: string;
  timeTe: string;
  descriptionEn: string;
  descriptionTe: string;
  significanceEn: string;
  significanceTe: string;
  locationEn: string;
  locationTe: string;
  iconName: string;
}

export interface CoupleDetails {
  familyTitleEn: string;
  familyTitleTe: string;
  slokamTe: string;
  slokamEn: string;
  poeticProseTe: string;
  poeticProseEn: string;
  groom: {
    nameEn: string;
    nameTe: string;
    titleEn: string;
    titleTe: string;
    qualificationEn: string;
    qualificationTe: string;
    roleEn: string;
    roleTe: string;
    parentsEn: string;
    parentsTe: string;
    grandparentsEn: string;
    grandparentsTe: string;
    nativeEn: string;
    nativeTe: string;
  };
  bride: {
    nameEn: string;
    nameTe: string;
    titleEn: string;
    titleTe: string;
    qualificationEn: string;
    qualificationTe: string;
    parentsEn: string;
    parentsTe: string;
    nativeEn: string;
    nativeTe: string;
  };
  sumuhurtham: {
    dateEn: string;
    dateTe: string;
    tithiEn: string;
    tithiTe: string;
    timeEn: string;
    timeTe: string;
    lagnaEn: string;
    lagnaTe: string;
    nakshatramEn: string;
    nakshatramTe: string;
  };
  reception: {
    dateEn: string;
    dateTe: string;
    timeEn: string;
    timeTe: string;
    descriptionEn: string;
    descriptionTe: string;
  };
  venue: {
    nameEn: string;
    nameTe: string;
    addressEn: string;
    addressTe: string;
    cityEn: string;
    cityTe: string;
    landmarkEn: string;
    landmarkTe: string;
    mapQuery: string;
  };
  hosts: {
    namesEn: string;
    namesTe: string;
    businessEn: string;
    businessTe: string;
    addressEn: string;
    addressTe: string;
    phones: string[];
    complimentsEn: string;
    complimentsTe: string;
  };
}

export interface GuestBlessing {
  id: string;
  name: string;
  relation: string;
  city: string;
  attending: 'yes' | 'maybe' | 'wishes';
  guestsCount: number;
  message: string;
  dietPreference?: string;
  timestamp: string;
}
