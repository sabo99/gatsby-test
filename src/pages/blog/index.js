import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { navLinkText } from '../../components/layout.module.css';

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.slug}`} className={navLinkText}>
							{node.frontmatter.title}
						</Link>
					</h2>
					<p>Posted: {node.frontmatter.date}</p>
					<hr />
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				slug
			}
		}
	}
`;

export default BlogPage;
