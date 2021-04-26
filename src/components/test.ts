// <ol className={style.content}>
// {posts.allMarkdownRemark.edges.map( (edge: {node: any}) => {
//     return(
//         <li className={style.list}>
//             <div className={style.post}>
//                 <Link to={`${edge.node.fields.slug}`}
//                 className={style.link}
//                 >
//                   <h3>{edge.node.frontmatter.title}</h3>
//                   <p>{edge.node.frontmatter.data}</p>
//                   <p className={style.desc}>{edge.node.frontmatter.desc}</p>
//                 </Link>
//             </div>
//         </li>
//     )
// })}
// </ol>