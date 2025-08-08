import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  private overlay = inject(Overlay);

  create(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

}
