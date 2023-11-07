import "./course.scss";

const Course = () => {
  return (
    <div className="course">
      <div className="course_header">
        <img
          className="course_img"
          src="https://t4.ftcdn.net/jpg/02/21/97/81/360_F_221978136_FjBvTLzPRMQuyTOUhFo6QVVyZ9C1eUFj.jpg"
          alt="course-img"
        />
        {/* <div className="course_img"></div> */}
        <div className="course_lang">EN</div>
      </div>
      <div className="course_body">
        <div className="course_descr">
          We are excited to introduce our course on app keyword promotion for
          Google Play and AppStore, created by Keyapp for the Edvice platform.
        </div>
        <div className="course_tags">
          <div className="course_tag">Family</div>
          <div className="course_tag">Business</div>
          <div className="course_tag">Relationship</div>
        </div>
      </div>
      <div className="course_footer">
        <div className="course_author">
          <img
            src="https://static.edvice.pro/thumbs/upload/800/800/18098652f5b45355_avatar-15f32575-9b15-4e75-ab8a-d3697c70b88e.png"
            alt="author"
            className="course_author_photo"
          />
          <div className="course_author_text">
            <p className="course_author_role">Author</p>
            <p className="course_author_name">Alice Munsterbalt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
