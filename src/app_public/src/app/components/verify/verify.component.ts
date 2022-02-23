import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ModalConfirmComponent } from "../modal-confirm/modal-confirm.component";
import { VerifyService } from "../../services/verify.service";
import {Uporabnik} from "../../classes/uporabnik";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  // Status
  statusPending = 'pending';
  statusDenied = 'denied';
  statusVerified = 'verified';

  public users: Uporabnik[];

  /*public users = [{
    _id: "609877974266ec0015276907",
    ime: "Šime",
    priimek: "Šimasti",
    email: "šimethešime@gmail.com",
    slikaProfila: "../../../assets/img/person.jpg",
    slikaDokumenta: "",
    tipRacuna: "sprehajalec",
    datumRojstva: "2012-12-12T00:00:00.000Z",
    status: "pending"
  }, {
    _id: "60987eb79b10f000156ee544",
    ime: "Zavrnjen",
    priimek: "uporabnik",
    email: "sađboi@gmail.com",
    slikaProfila: "",
    slikaDokumenta: "",
    tipRacuna: "lastnik",
    datumRojstva: "2012-12-12T00:00:00.000Z",
    status: "denied",
    opis: ":("
  }];*/
  public buttonValues: any = [];

  constructor(
    private modalService: NgbModal,
    private readonly verifyService: VerifyService
  ) { }

  ngOnInit(): void {
    /*// Just another field in users
    for (let i = 0; i < this.users.length; i++) {
      // merge objects into one with multiple props
      this.users[i] = Object.assign(this.users[i], {
        buttonValue: this.users[i].status,
      });
    }*/
    this.verifyService.getNonVerified()
      .then(data => {
        this.users = data;

        // Saving button values
        for (let i = 0; i < this.users.length; i++) {
          if(!this.users[i].potrjen) {
            this.users[i].potrjen = this.statusPending;
          }
          let data = {
            userID: this.users[i]._id,
            buttonValue: this.users[i].potrjen
          }
          this.buttonValues.push(data);
        }
      })

  }

  async verify(verify: string, userID: string, event: any) {
    /* https://medium.com/code-divoire/ng-bootstrap-modalservice-and-expressionchangedafterithasbeencheckederror-7b21cbf6c74a */
    event.target.blur(); // needed because of ExpressionChangedAfterItHasBeenCheckedError (opening modal from form)

      if(verify === 'yes') {
        this.openModal('yes', userID);
      }
      else if(verify === 'no') {
        if(this.buttonValues.find((user: any) => user.userID === userID).buttonValue != this.statusDenied) {
          this.openModal('no', userID);
        }
      }
  }

  removeItem(id: string){
    this.users = this.users.filter(item => item._id !== id);
    this.buttonValues = this.buttonValues.filter((item: any) => item.userID !== id);
  }

  updateItem(id: string, updatedStatus: string){
    this.users.find(item => item._id === id).potrjen = updatedStatus;
    this.buttonValues.find((item: any) => item.userID === id).buttonValue = updatedStatus;
  }

  /* Show image - code source: https://www.w3schools.com/css/css3_images.asp */

  public showImage(src: string): void {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal
    var modalImg = document.getElementById("img01") as HTMLImageElement;
    modal.style.display = "block";
    modalImg.src = src;
  }

  public closeImageModal() {
    // Get the modal
    var modal = document.getElementById('myModal');
    // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
  }

  /* Confirmation modal */

  openModal(mode: string, userID: string) {
    const modalRef = this.modalService.open(ModalConfirmComponent);

    let data;

    let user = this.users.find(user => user._id === userID);
    let userButtonvalue = this.buttonValues.find((user: any) => user.userID === userID);

    if(mode === 'yes') {
      data = {
        title: 'Confirm verification',
        action: ' verify the user',
        extraInfo: ` ${user.ime} ${user.priimek}`,
        permanent: true,
        buttonName: 'Verify',
        form: false
      };
    }
    else if(mode === 'no') {
      data = {
        title: 'Reject user',
        action: ' reject the user',
        extraInfo: ` ${user.ime} ${user.priimek}`,
        permanent: false,
        buttonName: 'Reject',
        form: false
      };
    }

    modalRef.componentInstance.fromParent = data;

    modalRef.result
        .then((result) => {
          if(result === 'Verify') {
            this.verifyService.verifyUser(userID)
              .then(() => {
                // Remove from frontend
                this.removeItem(userID);
              })
              .catch(error => {
                console.log(error);
                userButtonvalue.buttonValue = user.potrjen;
              });
            // TODO: send message to the user
          }
          else {
            // Send request to deny user
            this.verifyService.denyUser(userID)
              .then(data => {
                // Update info after success
                this.updateItem(userID, this.statusDenied)
              })
              .catch(error => {
                console.log(error);
                userButtonvalue.buttonValue = user.potrjen;
              })

            // TODO: send message to the user
            /*if(result === '') {
              console.log("No reason was provided.");
            }*/
          }
        })
        .catch(error => {
          // Cancel, X, dismiss
          // Reset radio buttons
          userButtonvalue.buttonValue = user.potrjen;
        });

  }

}
