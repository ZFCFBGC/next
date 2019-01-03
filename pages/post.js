import Layout from "../components/layout.js";
// import React,{Component}from 'react';
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary}</p>
    <img src={props.show.image.medium}/>
  </Layout>
);
Post.getInitialProps = async function(context) {
    console.log(context)
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    return { show };
};

export default Post;
