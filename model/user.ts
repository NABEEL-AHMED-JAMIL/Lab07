import * as firebase from 'firebase/app';

export interface IUser {
    uid: string;
    firstName: string;
    lastName: string;
    name:string;
    email: string;
    phone?: string;
    title?: string;
    location?: string;
    office?: string;
    role: string;
    active: boolean;
    canRunReport: boolean;
    canManageUsers: boolean;
    canManageAssets: boolean;
    canManageRequestQueue: boolean;
    canManageAccount: boolean;
    createdAt : Object;
}

export class User implements IUser{
  uid = '';
  phone = '';
  title = '';
  location = '';
  office = '';
  role = '';
  active = false;
  canRunReport = false;
  canManageUsers = false;
  canManageAssets = false;
  canManageRequestQueue = false;
  canManageAccount = false;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  firstName = '';
  lastName = '';
  email;
  name;

  constructor(name: string, email:string) {
    this.name = name;
    this.email = email;
  }
}
