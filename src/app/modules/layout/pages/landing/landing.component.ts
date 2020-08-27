import { tap, switchMap } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { NavigationService } from '@services//navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private $navigation: NavigationService
  ) { }

  private animationStart$ = of([]);

  public start = false;
  public showTitle = false;

  ngOnInit(): void {
    this.animationStart$.pipe(
      tap(_ => this.onAnimationLogoRotationStart()),
      switchMap(_ => timer(1500)),
      tap(_ => this.onAnimationLogoRotationEnd())
    ).subscribe();
  }

  private onAnimationLogoRotationStart() {
    this.start = true;
  }

  private onAnimationLogoRotationEnd() {
    this.showTitle = true;
  }

  public login() {
    sessionStorage.setItem('login', JSON.stringify(true));
    this.$navigation.navigate('/home');
  }
}
