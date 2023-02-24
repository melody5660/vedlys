import mList from '../../markers.json';

let instance: Markers;
let markersList = new Array();

class Markers {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }
    this.setMarkersList(mList.items);
    instance = this;
  }

  setMarkersList(pMarkersList:any) {
    markersList = pMarkersList;
  }

  getMarkersList() {
    return markersList;
  };
}

let markersInstance = Object.freeze(new Markers());

export default markersInstance;