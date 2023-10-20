import { Component, WritableSignal, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointScoreComponent } from './point-score/team-score.component';

export class Team {
  sets = signal([]);

  constructor(public name: string) {}
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, PointScoreComponent],
})
export class AppComponent {
  public readonly TEAM_A = 0;
  public readonly TEAM_B = 1;
  teamA = 'Team A';
  teamB = 'Team B';
  match: { [k: number]: WritableSignal<[number, number]> } = {
    1: signal([0, 0]),
    2: signal([0, 0]),
    3: signal([0, 0]),
    4: signal([0, 0]),
    5: signal([0, 0]),
  };

  currentSet = signal(1);
  teamASets = computed<number>(() => this.#computeTeamSets()[this.TEAM_A]);
  teamBSets = computed<number>(() => this.#computeTeamSets()[this.TEAM_B]);

  currentSetPoint = computed(() => this.match[this.currentSet()]());

  isSetWin = computed(() => {
    return this.#isSetWin(this.match[this.currentSet()](), this.currentSet());
  });

  isMatchWin = computed(() => {
    return (
      (this.isSetWin() && this.teamASets() + 1 === 3) ||
      this.teamBSets() + 1 === 3
    );
  });

  nextSet(): void {
    this.currentSet.update((score: number) => score + 1);
  }

  #isSetWin(set: [number, number], currentSet: number): boolean {
    const maxSetPoint = currentSet === 5 ? 15 : 25;
    return (
      (set[this.TEAM_A] >= maxSetPoint || set[this.TEAM_B] >= maxSetPoint) &&
      Math.abs(set[this.TEAM_A] - set[this.TEAM_B]) > 1
    );
  }

  #computeTeamSets(): [number, number] {
    let nbSet: [number, number] = [0, 0];
    for (let i = 1; i <= this.currentSet(); i++) { 
      const set = this.match[i]();
      if (set[this.TEAM_A] > set[this.TEAM_B]) {
        nbSet[this.TEAM_A] += 1;
      } else {
        nbSet[this.TEAM_B] += 1;
      }
    }
    return nbSet;
  }

  update(team: 0 | 1): void {
    this.match[this.currentSet()].update((set) => {
      set[team] += 1;
      return [set[this.TEAM_A], set[this.TEAM_B]];
    });
  }
}
