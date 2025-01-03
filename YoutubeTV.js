const orig = JSON.parse;
JSON.parse = function () {
  const r = orig.apply(this, arguments);

  if (r.adPlacements) {
    r.adPlacements = [];
    console.log(JSON.stringify(r, null, 2));
  }

  if (r.playerAds) {
    r.playerAds = false;
    console.log(JSON.stringify(r, null, 2));
  }

  if (r.adSlots) {
    r.adSlots = [];
    console.log(JSON.stringify(r, null, 2));
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
    console.log(JSON.stringify(r, null, 2));
  }

  return r;
};

console.log("[+] Youtube TV tweak injected successfully!");
