import { Card, Layout, Page } from '@shopify/polaris';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_PRODUCT = (productId) => { return gql`
  query getProduct {
    product(id: "${productId}") {
      id
      title
      images(first: 10) {
        edges {
          node {
            altText
            id
            originalSrc
            src
          }
        }
      }
      options(first: 10) {
        id
        name
        position
        values
      }
      variants(first: 10) {
        edges {
          node {
            id
            image {
              src
              altText
              id
              originalSrc
            }
            images {
              id
              src
              originalSrc
            }
          }
        }
      }
      metafields(first: 10) {
        edges {
          node {
            id
            namespace
            value
            key
          }
        }
      }
    }
  }
`;
}

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
    }
  }

  componentDidMount() {
    this.setState({
      productId: window.location.search.split('=')[1]
    })
  }

  render() {
    debugger;

    const { productId } = this.state;

    if (!productId) return <div>Loading...</div>
    return (
      <Page>
        <Layout>
        <Query query={GET_PRODUCT(productId)}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>{error.message}</div>
            return (
              <h1>Product {data.product.title}</h1>
            );
          }}
        </Query>
        </Layout>
      </Page>
    )
  }
}

// const ProductItem = () => (
//   <Page>
//     <Layout>
//       <Layout.AnnotatedSection
//         title="Title"
//         description="Description"
//       >
//         <Card>
//           <div>Put content here</div>
//           <a href="https://polaris.shopify.com/components/structure/layout">For more information see Polaris docs</a>
//         </Card>
//       </Layout.AnnotatedSection>
//     </Layout>
//     <Layout>
//       <Layout.AnnotatedSection
//         title="Title"
//         description="Description"
//       >
//         <Card>
//           Put content here
//         </Card>
//       </Layout.AnnotatedSection>
//     </Layout>
//   </Page>
//   );
  export default ProductItem;