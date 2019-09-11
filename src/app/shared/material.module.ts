import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatIconRegistry,
  MatListModule,
  MatTooltipModule,
  MatCardModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { PlatformService } from './services';

@NgModule({
  exports: [
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3500,
        horizontalPosition: 'start'
      } as MatSnackBarConfig
    }
  ]
})
export class MaterialModule {
  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    platformService: PlatformService
  ) {
    const url = `${platformService.url}/assets/fonts/mdi.svg`;
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
