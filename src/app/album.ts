export class Album {
    constructor(
        public id: string,
        public ref: string,
        public name: string,
        public title: string,
        public description: string,
        public duration: number,
        public status: string,
        public url?: string,
        public tags?: Array<string>, //string[]
        public like?: string
    ){ }
}
export interface List{
    id:string,
    list: Array<string>
}

export interface SortAlbumCallback{
    (a: Album, b: Album): number
}