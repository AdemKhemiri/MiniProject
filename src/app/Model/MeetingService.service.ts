import { EventEmitter, Injectable } from "@angular/core";
import { Meeting } from "./Meeting.model";

@Injectable()
export class MeetingService {

    selectedMeeting = new EventEmitter<Meeting>();

    private meetings : Meeting[];

    constructor () {
        this.meetings = [
            new Meeting(123,"Meeting 1", "Tones", new Date(), new Date()),
            new Meeting(123,"Meeting 2", "USA", new Date("12/1/2020"), new Date("3/31/2077"))
        ];

        if(window.localStorage.getItem('Meetings')) {
            this.meetings = JSON.parse(window.localStorage.getItem('Meetings'));
        }
        else {
            this.meetings = [];
        }
    }
    saveInLocalStorage() {
        window.localStorage.setItem('Meetings', JSON.stringify(this.meetings));
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
      this.saveInLocalStorage();
    }
    editMeeting(i:number, meeting: Meeting) {
      this.meetings[i].id = meeting.id;
      this.meetings[i].titre = meeting.titre;
      this.meetings[i].lieu = meeting.lieu;
      this.meetings[i].date_deb = meeting.date_deb;
      this.meetings[i].date_fin = meeting.date_fin;
      //this.meetings[i] = meeting;
      this.saveInLocalStorage();
    }
    deleteMeeting(indice: number) {
        this.meetings.splice(indice ,1);
        this.saveInLocalStorage();
    }
}
