import uuid from "react-native-uuid";

export class Place {
  constructor(title, location, imageUrl) {
    this.title = title;
    this.location = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.imageUrl = imageUrl;
    this.adress = location.address;
    this.id = uuid.v4();
  }
}
