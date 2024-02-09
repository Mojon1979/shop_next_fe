import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemEntity } from "@/types/molecules/ProductItemEntity";

export const ProductList = ({
	products,
}: {
	products: ProductItemEntity[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
