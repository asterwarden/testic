import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";

export interface ComponentCanDeactivate{
  formTouched: boolean;


  canDeactivate: () => boolean | Observable<boolean>;
}

export class ExitFormGuard implements CanDeactivate<ComponentCanDeactivate>{

  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
