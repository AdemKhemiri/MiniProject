export class Meeting {
    

    constructor(
        public id:number, 
        public titre: string,
        public lieu: string,
        public date_deb: Date,
        public date_fin: Date 
        ) {}
}