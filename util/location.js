const GOOGLE_API_KEY = "AIzaSyCfQuj7tpGAGfO7YR2DMTX36PsnBpqrBEs";

export const getMapPreview = ({ lat, lng }) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&maptype=roadmap&scale=2&size=200x400&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
};
