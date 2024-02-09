import { ProductList } from "@/ui/organism/ProductList";
import { type ProductItemEntity } from "@/types/molecules/ProductItemEntity";
import { PageTitle } from "@/ui/atoms/PageTitle";

const products: ProductItemEntity[] = [
	{
		id: "1",
		category: "Bluzy",
		productName: "Bluza z kapturem",
		price: 25000,
		coverImg: {
			alt: "Bluza z kapturem",
			src: "/hoodie.png",
		},
	},
	{
		id: "2",
		category: "T-shirty",
		productName: "Koszulka",
		price: 9999,
		coverImg: {
			alt: "Koszulka",
			src: "/t-shirt.png",
		},
	},
	{
		id: "3",
		category: "Sukienki",
		productName: "Sukienka wieczorowa",
		price: 39999,
		coverImg: {
			alt: "Sukienka wieczorowa",
			src: "/dress.png",
		},
	},
	{
		id: "4",
		category: "Bluzy",
		productName: "Sweter",
		price: 18900,
		coverImg: {
			alt: "Sweter",
			src: "/sweater.png",
		},
	},
];

export default function Home() {
	return (
		<div className="bg-white">
			<section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<PageTitle />
				<ProductList products={products} />
			</section>
		</div>
	);
}
