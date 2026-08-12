import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton, IonToggle, IonCheckbox, IonAvatar, IonListHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonIcon, IonButton, IonToggle, IonCheckbox, IonAvatar, IonListHeader]
})
export class ListsPage {
  darkMode: any;

  constructor() { }

}
