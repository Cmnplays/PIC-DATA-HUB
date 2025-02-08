const DragAndDropBox = () => {
  return (
    <div className="w-full sm:h-32 md:h-40 lg:h-48 p-6 flex flex-col items-center">
      <label
        htmlFor="image"
        className="w-full max-w-2xl sm:h-32 md:h-40 lg:h-48 p-6 flex justify-center items-center text-gray-600 border-4 border-dashed border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer transition-all px-5 py-7"
      >
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Drag and Drop Image Here
        </span>
      </label>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        className="hidden"
      />
      <input
        type="submit"
        value="Submit"
        className="mt-4 py-2 px-6 text-white bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-all max-w-xl sm:max-w-lg md:max-w-md lg:max-w-sm w-full text-base sm:text-lg md:text-xl lg:text-2xl"
      />
    </div>
  );
};

export default DragAndDropBox;
