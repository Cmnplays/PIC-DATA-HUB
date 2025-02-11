import { LocationData } from "./getImageDetails";
const getLocationData = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&addressdetails=${1}&format=json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    const locationData: LocationData = (await response.json()) as LocationData;
    let displayName: string | string[] = locationData.display_name;
    displayName = displayName.split(",").map((item) => item.trim());
    return displayName[0];
  } catch (err) {
    console.log(err);
    return "Unknown";
  }
};
export default getLocationData;
