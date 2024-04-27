import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { InsertedSuccess, Read, Cloth } from '../cloth';
import { Router } from '@angular/router';
import { CharityDetails } from '../charity-details';

@Component({
  selector: 'app-cloth-read',
  templateUrl: './cloth-read.component.html',
  styleUrls: ['./cloth-read.component.css']
})
export class ClothReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: ClothService, private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: Cloth = {
    s_no : '',
    name: '',
    contact_no: '',
    charity_name:'',
    total_clothes:'',
    dd:''
  };

  
 
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  
 
  Results2=[];
  a=[];
  Read1(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          s_no:this.a[0],
          name:this.a[1],
          contact_no:this.a[2],
          charity_name:this.a[3],
          total_clothes:this.a[4],
          dd:this.a[5],
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
Update(RollNumber: String, Details: Cloth) {
  this.Service.Update(RollNumber, Details).subscribe({
    next: (Data) => {
      console.log(Data);
      this.Read('All');
    },
    error: (err) => {
      console.log(err);
    },
  });
}
Delete(Roll: String) {
  this.Service.Delete(Roll).subscribe({
    next: (Data: InsertedSuccess) => {
      console.log(Data.rowsAffected);
      this.Read('All');
    },
    error: (Error) => {
      console.log(Error);
    },
  });
}



  onHomeClick(){
    this.router.navigateByUrl('/home')
  }
  onOurmissionClick(){
    this.router.navigateByUrl('/ourmission')
  }
  onGalleryClick(){
    this.router.navigateByUrl('/gallery')
  }
  onContactusClick(){
    this.router.navigateByUrl('/contactus')
  }
  onCiClick(){
    this.router.navigateByUrl('/cinsert')
  }
  onCrClick(){
    this.router.navigateByUrl('/cread')
  }
  onCuClick(){
    this.router.navigateByUrl('/cupdate')
  }
  onCdClick(){
    this.router.navigateByUrl('/cdelete')
  }
  onMiClick(){
    this.router.navigateByUrl('/m_insert')
  }
  onMrClick(){
    this.router.navigateByUrl('/m_read')
  }
  onMuClick(){
    this.router.navigateByUrl('/m_update')
  }
  onMdClick(){
    this.router.navigateByUrl('/m_delete')
  }
  onFiClick(){
    this.router.navigateByUrl('/f_insert')
  }
  onFrClick(){
    this.router.navigateByUrl('/f_read')
  }
  onFuClick(){
    this.router.navigateByUrl('/f_update')
  }
  onFdClick(){
    this.router.navigateByUrl('/f_delete')
  }
  onCliClick(){
    this.router.navigateByUrl('/cloth_insert')
  }
  onClrClick(){
    this.router.navigateByUrl('/cloth_read')
  }
  onCluClick(){
    this.router.navigateByUrl('/clothupdate')
  }
  onCldClick(){
    this.router.navigateByUrl('/cloth_delete')
  }
  onloClick(){
    this.router.navigateByUrl('/nec')
  }
} 


  
 
