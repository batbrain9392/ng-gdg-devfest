import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <h1 mat-dialog-title>Confirm App Update</h1>
    <div mat-dialog-content>
      Updating app might cause loss of unsaved data. Please save all data before
      proceeding.<br />
      Continue with the update?
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateAppComponent {}
