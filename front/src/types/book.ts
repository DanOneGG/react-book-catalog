export declare namespace Book {
  interface Data {
    id: number;
    title: string;
    year: number;
    isbn: string;
    imageId: number;
    genreId: number;
    description: string;
    publisherId: number;
    languageId: number;
    authors: number[];
  }

  namespace Create {
    interface Params {
      title: string;
      year: number;
      isbn: string;
      imageId: number;
      genreId: number;
      publisherId: number;
      languageId: number;
      authors: number[];
      description?: string;
    }
  }

  namespace All {
    interface Search {
      search?: string;
    }
  }
}
