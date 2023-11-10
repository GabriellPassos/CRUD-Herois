import { Injectable } from '@angular/core';
import { Heroi } from '../heroi.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HeroiService } from '../heroi.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroiResolverService implements Resolve<Heroi>{

  constructor(private heroiService: HeroiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Heroi> | Promise<Heroi> | Heroi {

    const id = route.params['id'];
    if (id) {
      return this.heroiService.buscaPorId(id);
    }
    return of({} as Heroi);
  }
}
