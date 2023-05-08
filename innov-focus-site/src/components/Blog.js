import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import InnerBanner from "./InnerBanner";

const BlogHome = () => {
  return ( 
    <>
     <InnerBanner />
    <section id="blog" className="container">
    <h2 className="heading mb-sm-5 mb-4">Nos derniers nouveaux articles </h2>
    <CreateBlog />
    <BlogList />
    </section>
    </>
   );
}
 
export default BlogHome;