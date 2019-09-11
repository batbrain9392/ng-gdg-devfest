import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <h1 mat-dialog-title>Update Confirmation</h1>
    <div mat-dialog-content>
      <p>
        The window will reload and any unsaved data will be lost. However, all
        saved user data will remain intact. The update might take a few seconds.
      </p>
      Continue?
    </div>
    <div mat-dialog-actions align="end">
      <button mat-stroked-button [mat-dialog-close]="false">
        LATER
      </button>
      <button
        mat-raised-button
        color="primary"
        [mat-dialog-close]="true"
        cdkFocusInitial
      >
        UPDATE
      </button>
    </div>
  `,
  styles: [`
    [mat-dialog-content] {
      max-width: 450px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateAppComponent {}
