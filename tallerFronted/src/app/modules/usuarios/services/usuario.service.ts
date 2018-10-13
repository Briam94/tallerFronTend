import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UsuarioInterface } from '../../../models/usuarioInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


	usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
	usuarios: Observable<UsuarioInterface[]>;
	usuariosDoc: AngularFirestoreDocument<UsuarioInterface>;

	constructor(public afs: AngularFirestore) {
		//this.usuarios = afs.collection('usuarios').valueChanges();
		this.usuariosCollection = afs.collection<UsuarioInterface>('usuarios');
		this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data() as UsuarioInterface;
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);
	}

	getUsuarios(){
		return this.usuarios;
	}

	addUsuario(usuario: UsuarioInterface){
		console.log('nuevo usuario')
		this.usuariosCollection.add(usuario);
	}
}
