import { Injectable } from '@angular/core';
import { TareaInterface } from '../../../models/tareasInterface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TareaService {

	tareasCollection: AngularFirestoreCollection<TareaInterface>;
	tareas: Observable<TareaInterface[]>;
	tareaDoc: AngularFirestoreDocument<TareaInterface>;

  constructor(public afs: AngularFirestore) {
	  //this.tareas = afs.collection('tareas').valueChanges();

	  this.tareasCollection = afs.collection<TareaInterface>('tareas');
	  this.tareas = this.tareasCollection.snapshotChanges().pipe(
		  map(actions => actions.map(a => {
			  const data = a.payload.doc.data() as TareaInterface;
			  const id = a.payload.doc.id;
			  return { id, ...data };
		  }))
	  );

  }

  getTareas(){
	  return this.tareas;
  }

	addTarea(tarea: TareaInterface){
		console.log('new tarea');
		this.tareasCollection.add(tarea);
		alert('Tarea agregada exitosamente')
	}

	deleteTarea(tarea: TareaInterface) {
		this.tareaDoc = this.afs.doc(`tareas/${tarea.id}`)
		this.tareaDoc.delete();
	}

	updateTarea(tarea: TareaInterface){
		this.tareaDoc = this.afs.doc(`tareas/${tarea.id}`);
		this.tareaDoc.update(tarea);
	}
}
