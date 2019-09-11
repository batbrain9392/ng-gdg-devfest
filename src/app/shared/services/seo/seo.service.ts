import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PlatformService } from '../platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly appName = 'GDG Devfest';

  constructor(
    private title: Title,
    private meta: Meta,
    private platformService: PlatformService
  ) {}

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
      content: `${this.platformService.originUrl}${route}`
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
