import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonTextarea, IonSelect, IonSelectOption, IonCheckbox, IonList, IonLabel, IonRadioGroup, IonListHeader, IonRadio, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonButton, IonTextarea, IonSelect, IonSelectOption, IonCheckbox, IonList, IonLabel, IonRadioGroup, IonListHeader, IonRadio, IonToggle]
})
export class FormPage {
  username: any;
  notificationsEnabled: any;

  constructor() { }

  login() {
    throw new Error('Method not implemented.');
  }

}
