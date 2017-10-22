import * as firebase from 'firebase/app';


export interface IAsset {
    id: any;
    name: string;
    summary?: string;
    description?: string;
    searchTags?: string[];
    location?: string;
    assetContentList: string[];
    createdAt: Object;
}

export class Asset implements IAsset{
  id= '';
  summary= '';
  description= '';
  searchTags= [];
  location= '';
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  name;
  assetContentList = [];

  constructor(name: string) {
    this.name = name;
  }
}