export interface MenuItems {
    menuItem: Menu[];
}

export interface Menu {
    key: string;
    url: string[];
}

export const company: Menu[] = [
    {
        key: '인사말',
        url: [
            '/company/1.png'
        ]
    },
    {
        key: '오시는 길',
        url: [
            '/company/2.png'
        ]
    }
]

export const products = [
    {
        key: 'PosMac 저류조',
        url: [
            '/products/1-1.png',
            '/products/1-2.png'
        ]
    },
    {
        key: '파형강관',
        url: [
            '/products/2-1.png',
            '/products/2-2.png'
        ]
    },
    {
        key: 'PE피복 파형강관',
        url: [
            '/products/3-1.png',
            '/products/3-2.png'
        ]
    },
    {
        key: 'iPS 파형강관',
        url: [
            '/products/4-1.png',
            '/products/4-2.png'
        ]
    },
    {
        key: '일반 파형강관',
        url: [
            '/products/5-1.png'
        ]
    },
    {
        key: '연결공법',
        url: [
            '/products/6-1.png'
        ]
    }
]