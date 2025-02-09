import { useState } from "react";
import ImageDetailsContainer from "../Components/ImageDetailsContainer";
import { toast } from "react-toastify";
import getImageDetails from "../utils/getImageDetails";
import { imageDataTypes } from "../utils/getImageDetails";
const ImageDetails = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [display, setDisplay] = useState<boolean>(false);
  const [imageData, setImageData] = useState<imageDataTypes>({
    fileName: "",
    dimensions: "",
    fileSize: 0,
    dateCreated: 0,
    fileType: "",
    dateModified: 0,
    resolution: "",
    exifData: {},
    cameraModel: "",
    lens: "",
    location: "",
  });
  // const [errorMsg, setErrorMsg] = useState<string>("");

  const showErrorMessage = (message: string): void => {
    toast.error(message);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const imageFile = e.target.files?.[0] ?? null;
    if (!imageFile) {
      showErrorMessage("No image file found");
    }
    const imagePreviewUrl = URL.createObjectURL(imageFile as Blob);
    setImagePreview(imagePreviewUrl);
    setImage(imageFile);
  };

  const showImageDetails = () => {
    if (image) {
      console.log(image);
      getImageDetails(image);
      setDisplay(true);
    }
  };

  return (
    <div className="w-full p-6 flex flex-col items-center">
      <label
        htmlFor="image"
        className="w-full max-w-2xl sm:h-48 md:h-56 lg:h-64 p-6 flex justify-center items-center text-gray-600 border-4 border-dashed border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer transition-all bg-gray-50 hover:bg-gray-100"
      >
        {!imagePreview ? (
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            Drag and Drop Image Here
          </span>
        ) : null}

        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Selected image preview"
            className="w-full h-full object-cover rounded-xl transition-all"
          />
        ) : null}
      </label>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        value="Submit"
        className="mt-4 py-2 px-6 text-white bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-all max-w-xl sm:max-w-lg md:max-w-md lg:max-w-sm w-full text-base sm:text-lg md:text-xl lg:text-2xl text-center"
        onClick={showImageDetails}
      />
      <ImageDetailsContainer display={display} />
    </div>
  );
};

export default ImageDetails;
