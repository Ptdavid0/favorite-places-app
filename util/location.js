const GOOGLE_API_KEY = "AIzaSyCfQuj7tpGAGfO7YR2DMTX36PsnBpqrBEs";

export const getMapPreview = ({ latitude, longitude }) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&maptype=roadmap&scale=2&size=200x400&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
};

export const getAdressFromLatLng = async ({ latitude, longitude }) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  if (!data.results) {
    throw new Error("Something went wrong");
  }

  const address = data.results[0].formatted_address;

  return address;
};
