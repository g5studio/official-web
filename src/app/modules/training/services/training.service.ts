import { Injectable } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import { ITrainingOutcome, ITrainingPortfolio } from '@utilities/interfaces/training.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private $fb: FirebaseService
  ) { }

  private collection = 'training-center';

  public getTrainingPortfolio$() {
    return this.$fb.document(this.collection, 'portfolio').get().pipe(
      map(res => res.data() as ITrainingPortfolio)
    );
  }
}
