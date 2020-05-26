export class Schedule{
    constructor(
        public id:number,
        public name:string,
        public location:string,
        public startdate:Date,
        public enddate:Date,
        public sessions:number
    ){}
}