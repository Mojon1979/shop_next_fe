import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { ProductsListItemDescription } from "@/ui/atoms/ProductsListItemDescription";
import { type ProductItemEntity } from "@/types/molecules/ProductItemEntity";

type ProductListItemProps = {
	product: ProductItemEntity;
};

export const ProductListItem = ({
	product: { productName, category, price, coverImg },
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductImageWrapper coverImg={coverImg} />
				<ProductsListItemDescription
					product={{
						productName,
						category,
						price,
					}}
				/>
			</article>
		</li>
	);
};
