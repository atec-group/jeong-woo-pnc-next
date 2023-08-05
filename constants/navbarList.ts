const routerPath = {
    company: {
        url: 'company',
        title: '회사 소개'
    },
    products: {
        url: 'products',
        title: '제품'
    },
    technology: {
        url: 'technology',
        title: '기술'
    }
};

export const navbarList = [
    {
        title: routerPath.company.title,
        url: `/${routerPath.company.url}`
    },
    {
        title: routerPath.products.title,
        url: `/${routerPath.products.url}`
    },
    {
        title: routerPath.technology.title,
        url: `/${routerPath.technology.url}`
    }
];