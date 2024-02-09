import { type ProductEntity } from "@/types/molecules/ProductItemEntity";
import { formatMoney } from "@/utils/formatMoney";

type ProductListItemDescriptionEntity = {
	product: ProductEntity;
};
export const ProductsListItemDescription = ({
	product: { productName, category, price },
}: ProductListItemDescriptionEntity) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">
					{productName}
				</h3>
				<p className="text-sm font-semibold text-gray-700">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
