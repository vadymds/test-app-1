import { EmptyState, Page } from "@shopify/polaris";

const ProductTest = () => (
  <Page>
    <EmptyState
      heading="Manage your inventory transfers"
      action={{ content: 'Add transfer' }}
      secondaryAction={{ content: 'Learn more about empty state', url: 'https://polaris.shopify.com/components/structure/empty-state' }}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    >
      <p>Track and receive your incoming inventory from suppliers.</p>
    </EmptyState>
  </Page>
)
export default ProductTest;