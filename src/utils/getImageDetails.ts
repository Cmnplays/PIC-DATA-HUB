export interface imageDataTypes {
  fileName: string;
  dimensions: string;
  fileSize: number;
  dateCreated: number;
  fileType: string;
  dateModified: number;
  resolution: string;
  exifData: object;
  cameraModel: string;
  lens: string;
  location: string;
}

const getImageDetails = (image: File): imageDataTypes => {
  const fileName = image.name;
  const fileSize = image.size / 1024;
  return {
    fileName,
    dimensions: "Unknown",
    fileSize,
    dateCreated: image.lastModified,
    fileType: image.type,
    dateModified: image.lastModified,
    resolution: "Unknown",
    exifData: {},
    cameraModel: "Unknown",
    lens: "Unknown",
    location: "Unknown",
  };
};
export default getImageDetails;
