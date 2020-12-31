import { EventEmitter, Injectable } from "@angular/core";
import { Meeting } from "./Meeting.model";

@Injectable()
export class MeetingService {

    selectedMeeting = new EventEmitter<Meeting>();
    
    addedMeeting = new EventEmitter<Meeting[]>();

    meetings : Meeting[];

    constructor () {
        this.meetings = [
            new Meeting(123,"Meeting 1", "Tones", new Date("12/12/2000"),new Date()),
            
        ];
    }
    createMeeting(
        id:number, 
        titre: string, 
        lieu: string, 
        date_deb: Date,
        date_fin: Date ) {
        
        return new Meeting (id, titre, lieu, date_deb, date_fin);
    }
    getMeetings() {
        return this.meetings.slice();
    }
    getMeeting(indice: number) {
        return this.meetings[indice];
    }
    addMeeting(meeting: Meeting) {
        this.meetings.push(meeting);
        this.addedMeeting.emit(this.meetings.slice());
    }
    deleteMeeting(indice: number) {
        this.meetings.slice(indice ,1);
    }
}