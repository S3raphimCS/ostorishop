import {
  menCategoryImages,
  womenCategoryImages,
  kidsCategoryImages,
} from '@/widgets/categories-grid/lib/config';
import { items } from '@/widgets/header/ui/header-catalog/nav/config';

const getCategoryImages = (categoryType: string) => {
  switch (categoryType) {
    case 'men':
      return menCategoryImages;
    case 'women':
      return womenCategoryImages;
    case 'kids':
      return kidsCategoryImages;
    default:
      return {};
  }
};

export const getSubmenu = (mainMenuText: string, submenuText: string) => {
  return (
    items
      .find((item) => item.text === mainMenuText)
      ?.submenu?.find((subitem) => subitem.text === submenuText)?.submenu || []
  );
};

export const getCategoryItems = (
  mainMenuText: string,
  submenuText: string,
  categoryType: string
) => {
  const submenu = getSubmenu(mainMenuText, submenuText);
  return generateCategoryItems(submenu, categoryType);
};

export const generateCategoryItems = (submenu: any[], categoryType: string) => {
  const categoryImages = getCategoryImages(categoryType);

  return submenu.map((item) => {
    const { path, text } = item;
    const categoryKey = path.split('/').pop() as string;
    const imageUrl = categoryImages[categoryKey]?.imageUrl || '';
    const alt = categoryImages[categoryKey]?.alt || text;

    return {
      imageUrl,
      alt,
      title: text,
      href: path,
    };
  });
};
