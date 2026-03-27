/**
 * Prepends the base URL to an asset path.
 * In development, BASE_URL is likely '/'.
 * In production (GitHub Pages), BASE_URL is '/portfolio/'.
 */
export const getAssetUrl = (path: string): string => {
  const base = (import.meta as any).env.BASE_URL || '/';
  // Ensure we don't end up with double slashes if path starts with /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

/**
 * Processes an HTML string to prepend the base URL to any src="assets/..." paths.
 */
export const processHtmlAssets = (html: string): string => {
  const base = (import.meta as any).env.BASE_URL || '/';
  if (base === '/' || !html) return html;
  
  // Use a regex to find src="assets/ and replace with src="/portfolio/assets/
  // or whatever the base is.
  return html.replace(/src=["']assets\//g, (match) => {
    return match.replace('assets/', `${base}assets/`);
  });
};
