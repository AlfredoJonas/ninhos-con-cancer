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
    requerimiento: [],
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
    set_route: false
  };

  constructor(
    public http: Http
  ) {
    this.set_all();
  }

  public setRoute(active_route, name_route) {
    let index = this.data.bread_crumb.findIndex((item) => item.route == active_route);
    if (index != -1) {
      this.data.bread_crumb.splice(index + 1, this.data.bread_crumb.length - index);
    } else {
      this.data.bread_crumb.splice(this.data.bread_crumb.length, 0, { route: active_route, name: name_route });
    }
  }

  set_representante(cedula, nombre, apellido, numero_contacto_1, numero_contacto_2, user_id, municipio_id) {
    this.data.representante_a = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      numero_contacto_1: numero_contacto_1,
      numero_contacto_2: numero_contacto_2,
      user_id: user_id,
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
    this.data.cancer = {
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
    this.set_representante('', '', '', '', '', '', '');
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
  }

  get(ruta, obj) {
    return this.http.get(this.url_rest + '' + ruta + '/' + obj.id);
  }
  post(ruta, obj) {
    // return this.http.post(this.url_rest + '' + ruta, JSON.stringify(obj));
    return $.post(this.url_rest + '' + ruta, obj);
  }
  put(obj) {
    return this.http.put(this.url_rest + '' + obj.ruta, JSON.stringify(obj));
  }
  delete(obj) {
    return this.http.delete(this.url_rest + '' + obj.ruta + '/' + obj.id);
  }

}