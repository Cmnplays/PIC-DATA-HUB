import { imageDataTypes } from "../utils/getImageDetails";

const ImageDetailsContainer = ({
  display,
  imageData,
}: {
  display: boolean;
  imageData: imageDataTypes;
}) => {
  return display ? (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-100 mt-6 transition-all ease-in-out hover:scale-105 sm:w-full sm:p-4 sm:mt-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center sm:text-2xl sm:mb-4">
        Image Details
      </h2>
      <div className="space-y-6 sm:space-y-4">
        <div className="space-y-4 sm:space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              File Name:
            </span>
            <span className="text-xl text-gray-800 font-medium break-words truncate">
              {imageData.fileName}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Dimensions:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.dimensions}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              File Size:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.fileSize}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Date Created:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.dateCreated}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              File Type:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.fileType}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Date Modified:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.dateModified}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Resolution:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.resolution}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Camera Model:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.cameraModel}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Lens:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.lens}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Location:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              {imageData.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ImageDetailsContainer;
