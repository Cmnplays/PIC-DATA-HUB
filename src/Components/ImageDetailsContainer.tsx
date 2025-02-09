const ImageDetailsContainer = ({ display }: { display: boolean }) => {
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
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              example_image.jpg
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Dimensions:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              1920 x 1080 px
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              File Size:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              2000 KB
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Date Created:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              2024-02-09
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              File Type:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              JPEG
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Date Modified:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              2024-02-10
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Resolution:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              72 DPI
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Exif Data:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              Yes
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Camera Model:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              Canon EOS 5D Mark IV
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Exposure Time:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              1/200 sec
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              ISO Speed:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              800
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              F-Stop:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              f/2.8
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Lens:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              24-70mm
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-600 font-medium w-1/2 sm:text-lg">
              Location:
            </span>
            <span className="text-xl text-gray-800 font-medium w-1/2 text-right sm:text-lg">
              Paris, France
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ImageDetailsContainer;
