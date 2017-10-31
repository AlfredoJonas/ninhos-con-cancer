import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StateService {

  public url_rest: string = "http://localhost:8000";
  public data: any = {
    representante: [],
    ninho: [],
    cancer: [],
    municipio: [],
    estado: [],
    tipo: [],
    requerimientos: [],
    ninho_cancer: [],
    adjunto: [],
    rol: [],
    user: [],
    representante_a: {},
    ninho_a: {},
    cancer_a: {},
    municipio_a: {},
    estado_a: {},
    tipo_a: {},
    requerimiento_a: {},
    ninho_cancer_a: {},
    adjunto_a: {},
    rol_a: {},
    user_a: {},
    is_logged_in: false,
    bread_crumb: [{ route: '/inicio', name: 'Inicio' }],
    loading: false
  };

  constructor(
    public http: Http
  ) {
    this.set_all();
  }

  changeEstate(id) {
    this.data.estado_a = this.data.estados[this.data.estados.findIndex((item) => item.id == id)];
  }

  slide(id){
    if($("."+id)[0].hidden){
      $("."+id).slideDown();
      $("."+id)[0].hidden = false;
      $( "#i"+id).removeClass( "fa-plus" ).addClass( "fa-minus" );
    }else{
      $('.'+id).slideUp();     
      $("."+id)[0].hidden = true;  
      $( "#i"+id).removeClass( "fa-minus" ).addClass( "fa-plus" );      
    }
  }

  setRoute(active_route, name_route){
    if(this.data.bread_crumb[this.data.bread_crumb.length-1].route != active_route){
      let index = this.data.bread_crumb.findIndex((item) => item.route == active_route);
      if (index != -1 && index != this.data.bread_crumb.length-1) {
        this.data.bread_crumb.splice(index + 1, this.data.bread_crumb.length - index);
      } else {
        this.data.bread_crumb.splice(this.data.bread_crumb.length, 0, { route: active_route, name: name_route });
      }
    }
    console.log(this.data.bread_crumb);
  }

  set_representante(cedula, nombre, apellido, numero_contacto_1, numero_contacto_2, municipio_id) {
    this.data.representante_a = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      numero_contacto_1: numero_contacto_1,
      numero_contacto_2: numero_contacto_2,
      municipio_id: municipio_id
    };
  }
  set_ninho(id, nombre, apellido, descripcion_situacion, representante_cedula) {
    this.data.ninho_a = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      descripcion_situacion: descripcion_situacion,
      representante_cedula: representante_cedula
    };
  }
  set_cancer(id, nombre, descripcion) {
    this.data.cancer_a = {
      id: id,
      nombre: nombre,
      descripcion: descripcion
    };
  }
  set_tipo(id, descripcion) {
    this.data.tipo_a = {
      id: id,
      descripcion: descripcion
    };
  }
  set_requerimiento(id, descripcion, cantidad, fecha_vencimiento, estado, tipo_id, ninho_id) {
    this.data.requerimiento_a = {
      id: id,
      descripcion: descripcion,
      cantidad: cantidad,
      fecha_vencimiento: fecha_vencimiento,
      estado: estado,
      tipo_id: tipo_id,
      ninho_id: ninho_id
    };
  }
  set_ninho_cancer(id, cancer_id, ninho_id) {
    this.data.ninho_cancer_a = {
      id: id,
      cancer_id: cancer_id,
      ninho_id: ninho_id
    };
  }
  set_adjunto(id, descripcion, imagen, requerimiento_id) {
    this.data.adjunto_a = {
      id: id,
      descripcion: descripcion,
      imagen: imagen,
      requerimiento_id: requerimiento_id
    };
  }
  set_rol(id, descripcion) {
    this.data.rol_a = {
      id: id,
      descripcion: descripcion
    };
  }
  set_estado(id, descripcion) {
    this.data.estado_a = {
      id: id,
      descripcion: descripcion
    };
  }
  set_municipio(id, descripcion) {
    this.data.municipio_a = {
      id: id,
      descripcion: descripcion
    };
  }
  set_user(id, username, password, email, rol_id) {
    this.data.user_a = {
      id: id,
      username: username,
      password: password,
      email: email,
      rol_id: rol_id
    };
  }

  set_all() {
    this.set_representante('', '', '', '', '', '');
    this.set_ninho('', '', '', '', '');
    this.set_cancer('', '', '');
    this.set_tipo('', '');
    this.set_requerimiento('', '', '', '', '', '', '');
    this.set_ninho_cancer('', '', '');
    this.set_adjunto('', '', '', '');
    this.set_rol('', '');
    this.set_estado('', '');
    this.set_municipio('', '');
    this.set_user('', '', '', '', '');
    this.data.is_logged_in = false;
    this.data.bread_crumb = [{ route: '/inicio', name: 'Inicio' }];
    this.data.loading = false;
  }

  get(ruta) {
    // return this.http.get(this.url_rest + '' + ruta + '/' + obj.id);
    return $.get(this.url_rest + '' + ruta);
  }
  post(ruta, obj) {
    // return this.http.post(this.url_rest + '' + ruta, JSON.stringify(obj));
    return $.post(this.url_rest + '' + ruta, obj);
  }
  put(ruta, obj) {
    // return $.delete('');
    /* $.ajax({
      url: this.url_rest + '' + ruta, // your api url
      // jQuery < 1.9.0 -> use type
      // jQuery >= 1.9.0 -> use method
      method: 'PUT', // method is any HTTP method
      data: obj, // data as js object
      success: function (data) { console.log(data); this.data.loading = false; }
    }); */
    return this.http.put(this.url_rest + '' + ruta, obj);
  }
  delete(obj) {
    return this.http.delete(this.url_rest + '' + obj.ruta + '/' + obj.id);
  }

}