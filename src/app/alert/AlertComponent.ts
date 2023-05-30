import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './AlertComponent.html',
  styleUrls : ['./AlertComponent.css']
})

export class AlertComponent{
  @Input() message = null;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  onClose() {
    this.close.emit();
  }
}
