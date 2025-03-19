import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  rid: string='';
  MenuList:Menu[]=[];
  constructor(private srv:MydataService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.rid=this.route.snapshot.paramMap.get('id')!;
    this.srv.getMenuList().subscribe({next:(res)=>{
      var allMenuList:Menu[]= <Menu[]>res;
      
      this.MenuList=allMenuList.filter(r=>r.rid==this.rid)
    },
    error:(err)=>{
      console.log(err);
    }
  });

  }
  
}
