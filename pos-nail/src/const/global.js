
export const colorsRandom = ['#f7eef7', '#f4f1f4', '#fbe9fb',];

export const firebaseApikey = 'AIzaSyD8oHB-2xVnPupyWk6zR-BdvJBq7GCn4vs';

export const appName = 'OP';

export const api_url = 'https://opapi.npm-technology.com/';

export const defaultSearchRadius = 2;

export const OPTypes = {
  WORKER: 'worker',
  PLACE: 'place',
  ESTATE: 'estate',
};

export const OpTypeByKey = {
  [OPTypes.WORKER]: 'Worker',
  [OPTypes.PLACE]: 'Place',
  [OPTypes.ESTATE]: 'Estate',
};

export const AutoCompleteApis = {
  job: 'ano/jobs/get-select-list',
  hometown: 'ano/hometowns/get-select-list',
  realEstateType: 'ano/real-estate-types/get-select-list',
};

export const AutoCompleteTypes = {
  job: 'job',
  hometown: 'hometown',
  realEstateType: 'realEstateType',
};

export const OPImageTypes = {
  WORKER: 'Worker',
  PLACE: 'Place',
  ESTATE: 'Estate',
};

export const ImageExtensions = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
};

export const EstateType = [
  {
    key: 'Sale',
    label: 'Mua / bán',
  },
  {
    key: 'Rent',
    label: 'Cho thuê',
  },
];

export const WorkerType = [
  {
    key: 'Worker',
    label: 'Lao động',
  },
  {
    key: 'Recruiter',
    label: 'Tuyển dụng',
  },
];

export const AppEvents = {
  tokenInvalid: 'tokenInvalid',
};

export const serverEnums = {
  workerType: {
    worker: 'Worker',
    recruiter: 'Recruiter',
  },
};

export const DefaultTake = 10;

export const JobType = {
  1: 'Cố định',
  2: 'Không cố định', 
};


export const UserRoles = {
  USER: 1,
  ADMIN: 2,
};