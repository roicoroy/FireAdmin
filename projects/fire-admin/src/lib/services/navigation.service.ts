import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  private rootPath: string = null;

  constructor(public router: Router) {
    //console.log(this.router.routerState.snapshot.url);
    this.rootPath = this.router.routerState.snapshot.url.split('/')[1];
  }

  redirectTo(path: string) {
    //console.log(path);
    this.router.navigate(this.getRouterLink(path));
  }

  getRouterLink(...path: string[]) {
    const root = this.rootPath ? '/' + this.rootPath : [];
    return [root, ...path];
  }

  setRootPath(path: string) {
    this.rootPath = path;
  }

}
