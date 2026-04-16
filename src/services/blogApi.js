const WP_GRAPHQL_URL = 'https://wp.menuscan.io/graphql';
export async function getPosts(first = 10, after = null) {
  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          id
          title
          slug
          excerpt
          date
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { first, after },
        }),
        // Fallback cache: 5 min (primary invalidation via webhook /api/revalidate)
        next: { revalidate: 300 } 
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    const { data, errors } = await res.json();
    
    if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error('GraphQL Error while fetching posts');
    }

    return data.posts;
  } catch (error) {
    console.error('Error in getPosts:', error);
    return { nodes: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }
}

/**
 * Fetch all categories
 */
export async function getCategories() {
  const query = `
    query GetCategories {
      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
        // Categories change rarely; 10-min fallback is still fine
        next: { revalidate: 600 } 
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
    }

    const { data, errors } = await res.json();
    
    if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error('GraphQL Error while fetching categories');
    }

    return data.categories.nodes;
  } catch (error) {
    console.error('Error in getCategories:', error);
    return [];
  }
}

/**
 * Fetch posts filtered by category slug
 */
export async function getPostsByCategory(categorySlug) {
  const query = `
    query GetPostsByCategory($slug: String!) {
      posts(where: { categoryName: $slug }) {
        nodes {
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { slug: categorySlug },
        }),
        next: { revalidate: 300 } 
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch posts by category: ${res.status} ${res.statusText}`);
    }

    const { data, errors } = await res.json();
    
    if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error('GraphQL Error while fetching posts by category');
    }

    return data.posts.nodes;
  } catch (error) {
    console.error('Error in getPostsByCategory:', error);
    return [];
  }
}

/**
 * Fetch a single post detail by its slug
 */
export async function getPostBySlug(slug) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { slug },
        }),
        next: { revalidate: 300 } 
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch post by slug: ${res.status} ${res.statusText}`);
    }

    const { data, errors } = await res.json();
    
    if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error('GraphQL Error while fetching post detail');
    }

    return data.post;
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
  }
}

/**
 * Fetch a single post detail with SEO by its slug
 */
export async function getPostSEOBySlug(slug) {
  const query = `
    query GetPostSEO($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        seo {
          title
          metaDesc
          canonical
          opengraphImage {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { slug },
        }),
        next: { revalidate: 300 } 
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch post SEO by slug: ${res.status} ${res.statusText}`);
    }

    const { data, errors } = await res.json();
    
    if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error('GraphQL Error while fetching post SEO');
    }

    return data.post;
  } catch (error) {
    console.error('Error in getPostSEOBySlug:', error);
    return null;
  }
}
