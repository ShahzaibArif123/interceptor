import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intercept';
constructor(private dataservice:DataserviceService){

}
  loadData(){
    this.dataservice.getData().subscribe(res=>{
      console.log(res);
    })
  }
}
