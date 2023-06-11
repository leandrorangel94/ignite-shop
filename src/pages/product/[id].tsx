import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { useRouter } from "next/router";
export default function Product() {
  const { query } = useRouter();
  return (
    <>
      <ProductContainer>
        <ImageContainer></ImageContainer>

        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            inventore maiores voluptatum similique? Laborum ratione harum
            aspernatur recusandae hic? Error porro maiores esse inventore odio
            sapiente expedita, corrupti quibusdam!
          </p>

          <button>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
