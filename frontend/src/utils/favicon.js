// src/utils/favicon.js

export function updateFavicon(iconPath) {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = iconPath;
      document.getElementsByTagName('head')[0].appendChild(newLink);
    } else {
      link.href = iconPath;
    }
  }