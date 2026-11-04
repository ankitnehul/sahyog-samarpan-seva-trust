import { workEvents } from "@/data/events";
import type { GalleryAlbum } from "@/types";

/** Albums that have no event page of their own. */
const standaloneAlbums: GalleryAlbum[] = [
  {
    id: "community-distribution",
    title: "Community Distribution",
    titleMr: "समुदायासाठी वाटप",
    images: [
      {
        id: "community-distribution",
        src: "/images/gallery/community-distribution.png",
        alt: "Community distribution of essentials",
        caption: "Distribution of groceries and essentials to the community",
        captionMr: "समुदायासाठी किराणा व जीवनावश्यक वस्तू वाटप",
      },
    ],
  },
  {
    id: "kite-activity",
    title: "Kite Activity",
    titleMr: "पतंग क्रियाकलाप",
    images: [
      {
        id: "kite-activity",
        src: "/images/gallery/kite-activity.png",
        alt: "Kite activity with students",
        caption: "Kite activity with students — celebrating creativity and joy",
        captionMr: "विद्यार्थ्यांसोबत पतंग क्रियाकलाप",
      },
    ],
  },
];

/**
 * Gallery albums: every event that has photographs (newest first),
 * then the standalone albums. Each album is one section on the Gallery page.
 */
export const galleryAlbums: GalleryAlbum[] = [
  ...workEvents
    .filter((event) => event.photos && event.photos.length > 0)
    .map((event) => ({
      id: event.id,
      title: event.album?.title ?? event.title,
      titleMr: event.album?.titleMr ?? event.titleMr ?? "",
      images: event.photos ?? [],
    })),
  ...standaloneAlbums,
];
