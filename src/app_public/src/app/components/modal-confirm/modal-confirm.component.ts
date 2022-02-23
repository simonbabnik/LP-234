import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() fromParent: any;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  passBack() {
    if(this.fromParent.form) {
      let input = document.getElementById('textArea') as HTMLTextAreaElement;
      this.modal.close(input?.value);
    }
    else {
      this.modal.close(this.fromParent.buttonName);
    }


  }

}
