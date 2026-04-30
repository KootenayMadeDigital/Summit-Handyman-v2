const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export function ogImage(url: string, alt: string) {
  return [{ url, width: OG_WIDTH, height: OG_HEIGHT, alt }];
}

export function staticOg(name: string) {
  return `/og/${name}.jpg`;
}

export function serviceOg(slug: string) {
  return `/og/service-${slug}.jpg`;
}

export function areaOg(slug: string) {
  return `/og/area-${slug}.jpg`;
}

export function guideOg(slug: string) {
  return `/og/guide-${slug}.jpg`;
}

export function serviceAreaOg(serviceSlug: string, areaSlug: string) {
  return `/og/service-${serviceSlug}-in-${areaSlug}.jpg`;
}
