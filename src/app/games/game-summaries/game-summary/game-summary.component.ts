import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IGame } from '../../games.service.interface';
import { faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';
import { GamesService } from '../../games.service';

/**
 * Displays a game's name, decomp progress, and links.
 */
@Component({
  selector: 'game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss']
})
export class GameSummaryComponent implements OnChanges {

  constructor(private gamesService: GamesService) { }

  /**
   * The game data to use.
   */
  @Input() data: IGame;
  /**
   * The percentage to display for completion.
   */
  total?: string;
  /**
   * Icon definition.
   */
  github = faGithub;
  /**
   * Icon definition.
   */
  trello = faTrello;

  ngOnChanges(): void {
    this.gamesService.getGameShield(`${this.data.shieldURL}`).subscribe(
      res => this.total = res.message,
      err => console.error(err)
    );
  }

}
