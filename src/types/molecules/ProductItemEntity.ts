export type ProductItemEntity = {
	id: string;
	productName: string;
	category: string;
	price: number;
	coverImg: {
		src: string;
		alt: string;
	};
};

export type ImageEntity = Pick<ProductItemEntity, "coverImg">;
export type ProductEntity = Omit<
	ProductItemEntity,
	"id" | "coverImg"
>;
