const GOOGLE_API_KEY = "AIzaSyCfQuj7tpGAGfO7YR2DMTX36PsnBpqrBEs";

export const getMapPreview = ({ latitude, longitude }) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&maptype=roadmap&scale=2&size=200x400&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
};
