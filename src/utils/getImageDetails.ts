import exifr from "exifr";

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

const getImageDetails = async (image: Image): Promise<imageDataTypes> => {
  let imageExifData: exifData | null = null;
  const dataToGet = ["Model", "LensModel,", "XResolution", "YResolution"];
  try {
    imageExifData = (await exifr.parse(
      image.actualFile,
      dataToGet
    )) as exifData;
  } catch (err) {
    console.error(err);
  }
  const { LensModel = "Unknown", Model = "Unknown" } = imageExifData ?? {};

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
    location: "Unknown",
  };
};

export default getImageDetails;
