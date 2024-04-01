import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page-pocari',
  templateUrl: './landing-page-pocari.component.html',
  styleUrls: ['./landing-page-pocari.component.css']
})
export class LandingPagePocariComponent {

    videoPlayer:any = document.getElementById('videoPlayer');

  openmodal() {
    var modal = document.getElementById("myModal");
    modal!.style.display = "block";
  }

  closemodal() {
    var modal = document.getElementById("myModal");
    modal!.style.display = "none";
    this.videoPlayer!.play();
  }

 span = document.getElementsByClassName("close")[0];

  onclickpause () {
    this.closemodal();
  }

  eventkeydown(event:any) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 's' || event.key === 'x' || event.key === 'q')) {
      event.preventDefault();
      this.openmodal();
  }
}

  eventkeyup (event:any) {
    this.openmodal();
      this.videoPlayer.pause();
    navigator.clipboard.writeText('');
  }

  resizealert () {
    this.openmodal(); // Open modal when resizing window
    alert('Dilarang mengambil screenshot dari halaman ini!!');
  }

  gotovideo () {
    //Redirect to the video page
    window.location.href = "src/assets/videos/Proses Produksi Pocari Sweat.mp4";
  }

    
}
