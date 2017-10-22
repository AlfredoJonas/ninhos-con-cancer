import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class StateService {

  public url_rest:string = "http://localhost:8001/";
  public data: any = { 
    representante: [], 
    niño: [], 
    cancer: [], 
    municipio: [], 
    estado: [], 
    tipo: [],
    requerimiento_tipo: [],
    niño_cancer: [],
    recipe: [],
    rol: [],
    representante_a: {}, 
    niño_a: {}, 
    cancer_a: {}, 
    municipio_a: {}, 
    estado_a: {}, 
    tipo_a: {},
    requerimiento_tipo_a: {},
    niño_cancer_a: {},
    recipe_a: {},
    usuario_a: {},
    is_logged_in: false,
    bread_crumb: [{route: '/inicio', name: 'Inicio'}],
    set_route: false
  };

  constructor(
    public http: Http 
  ){
    this.set_all();
  }

  public setRoute(active_route, name_route){
    let index = this.data.bread_crumb.findIndex((item) => item.route == active_route);
    if(index != -1){
      this.data.bread_crumb.splice(index+1, this.data.bread_crumb.length - index);
    }else{
      this.data.bread_crumb.splice(this.data.bread_crumb.length,0,{route: active_route, name: name_route});
    }
  }

  logIn(){
    this.data.usuario_a.estado = true;
  }

  set_representante(cedula, nombres, apellidos, numero_contacto1, numero_contacto2, correo, usuario, contraseña, id_municipio){
    this.data.representante_a = {
      cedula: cedula,
      nombres: nombres,
      apellidos: apellidos,
      numero_contacto1: numero_contacto1,
      numero_contacto2: numero_contacto2,
      correo: correo,      
      usuario: usuario,
      contraseña: contraseña,
      id_municipio: id_municipio
    };
  }
  set_niño(id, nombres, apellidos, des_situacion, id_representante){
    this.data.niño_a = {
      id: id,
      nombres: nombres,
      apellidos: apellidos,
      des_situacion: des_situacion,
      id_representante: id_representante
    };
  }
  set_cancer(id, nombre, descripcion){
    this.data.cancer = {
      id: id,
      nombre: nombre,
      descripcion: descripcion
    };
  }
  set_tipo(id, descripcion){
    this.data.tipo_a = {
      id: id,
      descripcion: descripcion
    };
  }
  set_requerimiento_tipo(id, descripcion, cantidad, fecha_vencimiento, estatus, id_tipo, id_niño){
    this.data.requerimiento_tipo_a = {
      id: id,
      descripcion: descripcion,
      cantidad: cantidad,
      fecha_vencimiento: fecha_vencimiento,
      estatus: estatus,
      id_tipo: id_tipo,
      id_niño: id_niño
    };
  }
  set_niño_cancer(id, id_cancer, id_niño){
    this.data.niño_cancer_a = {
      id: id,
      id_cancer: id_cancer,
      id_niño: id_niño
    };
  }
  set_recipe(id, descripcion, imagen, id_requerimiento_tipo){
    this.data.recipe_a = {
      id: id,
      descripcion: descripcion,
      imagen: imagen,
      id_requerimiento_tipo: id_requerimiento_tipo
    };
  }
  set_usuario_a(id, contraseña, usuario, id_representante, id_rol_usuario){
    this.data.usuario_a = {
      id: '0',
      contraseña: '',
      usuario: 'Jonas',
      id_representante: '',
      id_rol_usuario: '0'
    };
  }
  set_all(){
    this.set_representante( '', '', '', '', '', '', '', '', '');  
    this.set_niño( '', '', '', '', '');    
    this.set_cancer( '', '', '');
    this.set_tipo( '', '');    
    this.set_requerimiento_tipo( '', '', '', '', '', '', '');    
    this.set_niño_cancer( '', '', '');
    this.set_recipe( '', '', '', '');
    this.set_usuario_a( '0', '', 'jonas', '', '0');
  }

  get(obj){
    return  this.http.get(this.url_rest);
  }
  post(obj){
    return  this.http.post(this.url_rest, JSON.stringify(obj));
  }
  put(obj){
    return  this.http.post(this.url_rest, JSON.stringify(obj));
  }
  delete(obj){
    return  this.http.delete(this.url_rest);
  }

}