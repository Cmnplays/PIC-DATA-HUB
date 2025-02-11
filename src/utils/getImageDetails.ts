import exifr from "exifr";
import getLocationData from "./getLocationData";
export interface imageDataTypes {
  fileName: string;
  dimensions: string;
  fileSize: string;
  dateCreated: string;
  fileType: string;
  dateModified: string;
  resolution: string;
  cameraModel: string;
  lens: string;
  location: string;
}

interface exifData {
  Model?: string;
  LensModel?: string;
  XResolution?: number;
  YResolution?: number;
}

export interface Image {
  actualFile: File;
  width: number;
  height: number;
}

interface locationDataTypes {
  latitude: number;
  longitude: number;
}

interface Address {
  ISO3166_2_lvl4: string;
  city: string;
  city_district: string;
  country: string;
  country_code: string;
  county: string;
  municipality: string;
  state: string;
}

export interface LocationData {
  address: Address;
  addresstype: string;
  boundingbox: [string, string, string, string]; // Array with 4 string values
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}

const getImageDetails = async (image: Image): Promise<imageDataTypes> => {
  let imageExifData: exifData | null = null;
  let locationData: locationDataTypes | null = null;
  let location = "Unknown";

  const dataToGet = ["Model", "LensModel,", "XResolution", "YResolution"];
  try {
    imageExifData = (await exifr.parse(
      image.actualFile,
      dataToGet
    )) as exifData;
    locationData = await exifr.gps(image.actualFile);
  } catch (err) {
    console.error(err);
  }
  const { LensModel = "Unknown", Model = "Unknown" } = imageExifData ?? {};
  const { latitude = 0, longitude = 0 } = locationData ?? {};
  if (latitude !== 0 && longitude !== 0) {
    location = await getLocationData(latitude, longitude);
    // location = `${latitude},${longitude}`;
  }

  const { XResolution = 0, YResolution = 0 } = imageExifData ?? {};
  let resolution;
  if (XResolution === 0 || YResolution === 0) {
    resolution = "Unknown";
  } else {
    resolution = `${XResolution} X ${YResolution} DPI`;
  }
  return {
    fileName: image.actualFile.name,
    fileSize: (image.actualFile.size / 1024).toFixed(2) + "KB",
    fileType: image.actualFile.type,
    dateModified: new Date(image.actualFile.lastModified).toLocaleString(),
    dimensions: `(${image.width} X ${image.height})px`,
    dateCreated: new Date(image.actualFile.lastModified).toLocaleString(),
    resolution,
    cameraModel: Model,
    lens: LensModel,
    location: location,
  };
};

export default getImageDetails;
