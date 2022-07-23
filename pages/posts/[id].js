import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
}

export async function getStaticPaths() { //準備されている関数
    const paths = getAllPostIds();
    return {
        paths,  //配列で中はオブジェクト 事前ビルドして
        fallback: false, //指定パス以外なら404を返す
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }