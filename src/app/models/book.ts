export class Book {
    public id: string;
    public title: string;
    public description: string;
    public price: number;
    public coverUrl: string;
    public gender: string;
    public previewPageUrls: string[];
    public requiredPhotos: {
        character: Character,
        emotion: string
    }[]
}

export type Character = "child" | "mother" | "father";