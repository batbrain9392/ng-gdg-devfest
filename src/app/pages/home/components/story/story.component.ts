import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent {
  loadResource: boolean;

  onViewed() {
    this.loadResource = true;
  }
}
