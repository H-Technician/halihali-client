export interface Category {
    id: number,
    name: string,
    subCategories: subCategories[]
}

export interface subCategories {
    subId: number,
    categoryId: number,
    subName: string,
    subDescr: string,
    subTag: string
}