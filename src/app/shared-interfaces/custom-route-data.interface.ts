// shared/custom-route-data.interface.ts
import { ActivatedRouteSnapshot } from '@angular/router';

export interface CustomRouteData extends ActivatedRouteSnapshot {
  data: {
    title: string;
    imageUrl?: string; // Making imageUrl optional
  };
}
