import type { IResource } from 'core/entities/Resource';

export interface Section {
  resources: IResource[];
  sectionName: string;
}

export class Section {
  constructor({ resources, sectionName }: Section) {
    this.resources = resources;
    this.sectionName = sectionName;
  }
}
