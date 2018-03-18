export interface Paging {
  meta: {
    previous_page: any,
    next_page: any,
    count: number
  };
  data: {
    slug: string,
    fields: object
  } [];
}
