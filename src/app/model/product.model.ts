export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number
        //may need this, but i think i can get away with just using the ID to assign images.
        // public image?: string) 
    ) { }

}
