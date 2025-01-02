const orig = JSON.parse;
JSON.parse = function () {
  const r = orig.apply(this, arguments);

  if (r.adPlacements) {
    r.adPlacements = [];
  }

  if (r.playerAds) {
    r.playerAds = false;
  }

  if (r.adSlots) {
    r.adSlots = [];
  }

  if (r.contents
    && r.contents.tvBrowseRenderer
    && r.contents.tvBrowseRenderer.content
    && r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer
    && r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content
    && r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer
    && r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents
  ) {
    r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents = r.contents.tvBrowseRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer.contents.filter(e => !e.adSlotRenderer);
  }

  return r;
};

