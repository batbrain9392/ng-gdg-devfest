import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PlatformService } from '../platform/platform.service';
import { IRoute } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly appName = 'GDG Devfest';

  constructor(
    private title: Title,
    private meta: Meta,
    private platformService: PlatformService,
    private router: Router
  ) {}

  seoForMainRoutes(routes: IRoute[]) {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map(navigationEndEvent => navigationEndEvent.url),
        map(url => routes.find(route => route.path === url))
      )
      .subscribe(route => {
        if (route) {
          this.updateTitle(route.title);
          this.updateUrl(route.path);
          this.updateType(route.type);
          this.updateDescription(route.description);
          this.updateImageUrl(route.imageUrl);
        }
      });
  }

  updateTitle(title: string) {
    title = `${this.appName} | ${title}`;
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'og:title',
      content: title
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: title
    });
  }

  updateType(type: string) {
    this.meta.updateTag({
      name: 'og:type',
      content: type
    });
  }

  updateDescription(description: string) {
    this.meta.updateTag({
      name: 'description',
      content: description
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: description
    });
  }

  updateUrl(route: string) {
    this.meta.updateTag({
      name: 'og:url',
      content: `${this.platformService.url}${route}`
    });
  }

  updateImageUrl(imageUrl: string) {
    this.meta.updateTag({
      name: 'og:image',
      content: imageUrl
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: imageUrl
    });
  }
}
