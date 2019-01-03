import Link from "next/link";
import fetch from "isomorphic-unfetch";
// import Header from "../components/header.js";
import Layout from "../components/layout.js";
const PostLink = props => {
  return (
    <li>
      {/* href真实路径，as显示给用户看的网址 */}
      <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};
const Index = props => (
  <div>
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(item => {
          return (
            <li key={item.show.id}>
              <Link
                as={`/post/${item.show.id}`}
                href={`/post?id=${item.show.id}`}
              >
                <a>{item.show.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          h1{
            font-size: 16px;
            color: red;
          }
          ul{
            margin:0;
          }
          li {
            list-style: none;
            margin: 10px 0;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            opacity: 0.6;
            color:rgba(255,0,0,0.6)
          }
        `}
      </style>
    </Layout>
  </div>
);
Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data
  };
};
export default Index;
