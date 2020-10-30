import { IStudentGroup } from './../../../utilities/interfaces/training.interface';
import { Injectable } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import { OverlayService } from '@services/overlay.service';
import { ECategory } from '@utilities/enums/user.enum';
import { IStudent, ITrainingOutcome, ITrainingPortfolio } from '@utilities/interfaces/training.interface';
import { ReplaySubject, Subject } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private $fb: FirebaseService,
    private $overlay: OverlayService
  ) {
    this.initial();
  }

  private collection = 'training-center';

  private students: ReplaySubject<IStudent[]> = new ReplaySubject(1);
  public students$ = this.students.asObservable().pipe();

  public getTrainingPortfolio$() {
    return this.$fb.document(this.collection, 'portfolio').get().pipe(
      map(res => res.data() as ITrainingPortfolio)
    );
  }

  public getStudents$() {
    this.$overlay.startLoading();
    return this.$fb.document(this.collection, 'students').get().pipe(
      map(res => {
        const USER_ID = Object.keys(res.data());
        return USER_ID.map(id => res.data()[id]) as IStudent[];
      })
    );
  }

  public chunkStudentsByCategory(students: IStudent[]): IStudentGroup {
    return {
      frontend: students.filter(student => student.category === ECategory.Frontend),
      backend: students.filter(student => student.category === ECategory.Backend),
      unity: students.filter(student => student.category === ECategory.Unity),
      java: students.filter(student => student.category === ECategory.Java),
      python: students.filter(student => student.category === ECategory.Python),
    };
  }

  private createStudent() {
    const m = this.getRandom(10, 1);
    const d = this.getRandom(30, 1);
    this.students$.pipe(
      switchMap(user => this.$fb.document(this.collection, 'students').set({
        [`userid${user.length + 1}`]: {
          category: ECategory.Unity,
          uid: `user${user.length + 1}`,
          graduatedDate: `2020-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`,
          salary: 0
        }
      }))
    ).subscribe(
      _ => console.log(_)
    );
  }

  private initial() {
    this.getStudents$().subscribe(
      students => {
        this.$overlay.finishLoading();
        this.students.next(students);
      }
    );

    // this.createStudent();


  }

  private getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
