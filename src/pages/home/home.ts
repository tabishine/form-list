import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  formData = {
    title: " ",
    year: null,
    description: " ",
    duration: null,
  };

  constructor(private toastCtrl: ToastController) {}

  saveData() {
    if (!this.isFormValid()) {
      this.presentToast("Заполните все поля");
      return;
    }

    // fake request
    // this.postRequest(this.formData).then(() => {
    //   this.presentToast("Сохранено");
    // });
  }

  isFormValid(): boolean {
    // check if all form fields are filled
    return (
      this.formData.title.trim() !== "" &&
      this.formData.year !== null &&
      this.formData.description.trim() !== "" &&
      this.formData.duration !== null
    );
  }

  // postRequest(data: any): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000); 
  //   });
  // }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }
}
