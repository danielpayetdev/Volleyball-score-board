import { Component, WritableSignal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointScoreComponent } from "./point-score/point-score.component";
import { MatchService, Team } from './services/score.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, PointScoreComponent]
})
export class AppComponent {
  toto =['t']
  scoreService = inject(MatchService);

  update(controller: WritableSignal<Team>): void {
    controller.mutate(team => {
      const currentSet = this.scoreService.currentSet();
      return team.sets[currentSet] = team.sets[currentSet] + 1;
    })
  }
}
