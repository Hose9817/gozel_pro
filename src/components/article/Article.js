import "./article.scss";

const Article = () => {
  return (
    <div className="article">
      <div className="article_content">
        <div className="article_company-name">T-Education</div>
        <div className="article_desc">Dealing with Stress and Depression</div>
        <div className="article_tags">
          <div className="article_tag">Family</div>
          <div className="article_tag">Business</div>
          <div className="article_tag">Relationship</div>
        </div>
      </div>
      <img className="article_img" src="/img_for_blog.png" alt="blogImg" />
    </div>
  );
};

export default Article;
