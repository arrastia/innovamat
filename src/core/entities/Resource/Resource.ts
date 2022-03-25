export type ResourceTagType = 'ambientes' | 'rincones' | 'rutinas' | 'talleres';

export interface Resource {
  description: string;
  file?: string;
  fileType?: string;
  id: string;
  image?: string;
  tag?: ResourceTagType;
  title: string;
}

export class Resource {
  constructor({ description, file, fileType, id, image, tag, title }: Resource) {
    this.description = description;
    this.file = file;
    this.fileType = fileType;
    this.id = id;
    this.image = image;
    this.tag = tag;
    this.title = title;
  }
}
