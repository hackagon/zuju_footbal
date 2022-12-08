export interface JsonApiResource {
  id: string | number;
  entity: string;
  attributes: any;
  meta: ObjectMeta;
  relationships: any;
}

export interface Relationships {}

export interface JsonApiCollection {
  data: Array<JsonApiResource> | Array<any>;
  links: ObjectLinks;
  meta: CollectionMeta;
}

export interface ObjectMeta {
  createdAt: Date;
  updatedAt: Date;
}

export interface ObjectLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface CollectionMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
