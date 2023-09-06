import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(billboards[0].id);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
