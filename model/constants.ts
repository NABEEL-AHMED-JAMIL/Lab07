import { IValueOption } from './value-option';


export const STANDARD = 'Standard';
export const PRIORITY = 'Priority';
export const RUSH = 'Rush';
export const TIME_SENSITIVE = 'Time Sensitive';


export type Priority = 'Standard' | 'Priority' | 'Rush' | 'Time Sensitive'

export const PriorityOptions: Array<IValueOption<string>> = [
  {
    title: STANDARD,
    value: STANDARD
  },
  {
    title: PRIORITY,
    value: PRIORITY
  },
  {
    title: RUSH,
    value: RUSH
  },
  {
    title: TIME_SENSITIVE,
    value: TIME_SENSITIVE
  }
];


export const OPEN = 'Open';
export const IN_PROCESS = 'In Process';
export const COMPLETED = 'Completed';
export const CANCELLED = 'Cancelled';


export type Status = 'Open' | 'In Process' | 'Completed' | 'Cancelled'

export const StatusOptions: Array<IValueOption<string>> = [
  {
    title: OPEN,
    value: OPEN
  },
  {
    title: IN_PROCESS,
    value: IN_PROCESS
  },
  {
    title: COMPLETED,
    value: COMPLETED
  },
  {
    title: CANCELLED,
    value: CANCELLED
  }
];


export const DELIVERY = 'Delivery';
export const RETURN = 'Return';
export const TRANSFER = 'Transfer';


export type ServiceType = 'Delivery' | 'Return' | 'Transfer'

export const ServiceTypeOptions: Array<IValueOption<string>> = [
  {
    title: DELIVERY,
    value: DELIVERY
  },
  {
    title: RETURN,
    value: RETURN
  },
  {
    title: TRANSFER,
    value: TRANSFER
  }
];