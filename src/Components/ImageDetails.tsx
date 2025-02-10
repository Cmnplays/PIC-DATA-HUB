import { useState } from "react";
import ImageDetailsContainer from "../Components/ImageDetailsContainer";
import { toast } from "react-toastify";
import getImageDetails from "../utils/getImageDetails";
import { imageDataTypes } from "../utils/getImageDetails";
import { Image as imageFileType } from "../utils/getImageDetails";

const ImageDetails = () => {
  const [image, setImage] = useState<null | imageFileType>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [display, setDisplay] = useState<boolean>(false);
  const [imageData, setImageData] = useState<imageDataTypes>({
    fileName: "",
    dimensions: "",
    fileSize: "",
    dateCreated: "",
    fileType: "",
    dateModified: "",
    resolution: "",
    cameraModel: "",
    lens: "",
    location: "",
  });

  const showErrorMessage = (message: string): void => {
    toast.error(message);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const imageFile = e.target.files?.[0] ?? null;
    if (!imageFile?.type.startsWith("image")) {
      showErrorMessage("No image file found");
      return;
    }
    const imagePreviewUrl = URL.createObjectURL(imageFile as Blob);
    const image = new Image();
    image.src = imagePreviewUrl;
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      const imageData = {
        actualFile: imageFile,
        width,
        height,
      };
      setImage(imageData);
      setImagePreview(imagePreviewUrl);
    };
  };

  const showImageDetails = async () => {
    if (!image) {
      return;
    }
    try {
      const imageData = await getImageDetails(image);
      setImageData(imageData);
      setDisplay(true);
    } catch (err) {
      console.log(err);
    }
  };

  // File Upload Section with Image Preview
  return (
    <div className="w-full p-6 flex flex-col items-center">
      <label
        htmlFor="image"
        className="w-full max-w-2xl p-6 flex justify-center items-center text-gray-600 border-4 border-dashed border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer transition-all bg-gray-50 hover:bg-gray-100"
        style={{ maxHeight: "250px", overflow: "hidden" }} // Adjust max-height for smaller screens
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
            style={{ maxHeight: "200px" }} // Ensure image doesn't overflow
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
        type="submit"
        onClick={() => {
          showImageDetails().catch((err) => {
            console.log(err);
          });
        }}
      />
      <ImageDetailsContainer imageData={imageData} display={display} />
    </div>
  );
};
export default ImageDetails;
