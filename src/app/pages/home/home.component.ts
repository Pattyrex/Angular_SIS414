import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:string = "";
  abrev:string = "";
  precio:string = "";
  lugar:string = "";
  dataSource:any = [];

  constructor(private data: DataService){}


  ngOnInit()
  {
    this.data.getListLanguges().subscribe( (data) => {
      for(var key in data)
      {
        var row = {id:key, abrev: data[key].abrev, name: data[key].name, precio: data[key].precio, lugar: data[key].lugar}
        this.dataSource.push(row)
      }
      console.log(this.dataSource)
    } )
  }

  save()
  {
    let body = 
    {
      name: this.name,
      abrev: this.abrev,
      precio: this.precio,
      lugar: this.lugar
    }
    this.data.postLanguage(body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
  }

  borrar(id:string){
    let aux = confirm("Esta Seguro de Borrar")
    if(!aux) return
    this.data.deleteLanguage(id).subscribe( (data) => {
      if(data==null)
      {
        window.location.reload();
      }
    })
  }

  actualizar(id:string){
    let aux = confirm("Esta Seguro de Actualizar")
    let body = 
    {
      abrev: this.abrev,
      name:  this.name,
      precio: this.precio,
      lugar: this.lugar,
      
    }    
    if(!aux) return
    this.data.updateLanguage(id, body).subscribe( (data) => {
      if(data!=null)
      {
        window.location.reload();
      }
    })
  }
}
