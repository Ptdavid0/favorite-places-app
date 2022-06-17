import uuid from "react-native-uuid";

export class Place {
  constructor(title, location, imageUrl, adress) {
    this.title = title;
    this.location = location;
    this.imageUrl = imageUrl;
    this.adress = adress;
    this.id = uuid.v4();
  }
}
